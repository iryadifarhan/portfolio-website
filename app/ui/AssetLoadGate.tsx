"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import LoadingScreen from "./LoadingScreen";

function waitForStaticAssets(timeoutMs = 4000) {
  if (typeof window === "undefined") return Promise.resolve();

  const elements = Array.from(
    document.querySelectorAll("img, video")
  ) as Array<HTMLImageElement | HTMLVideoElement>;

  const listeners: Array<() => void> = [];

  const pending = elements.map(
    (el) =>
      new Promise<void>((resolve) => {
        const cleanup = () => {
          resolve();
        };

        if (el instanceof HTMLImageElement) {
          if (el.loading === "lazy") {
            resolve();
            return;
          }

          if (el.complete && el.naturalWidth > 0) {
            resolve();
            return;
          }

          const done = () => {
            el.removeEventListener("load", done);
            el.removeEventListener("error", done);
            cleanup();
          };
          listeners.push(() => {
            el.removeEventListener("load", done);
            el.removeEventListener("error", done);
          });
          el.addEventListener("load", done, { once: true });
          el.addEventListener("error", done, { once: true });
          return;
        }

        if (el instanceof HTMLVideoElement) {
          if (el.readyState >= 3) {
            resolve();
            return;
          }

          const done = () => {
            el.removeEventListener("canplaythrough", done);
            el.removeEventListener("error", done);
            cleanup();
          };
          listeners.push(() => {
            el.removeEventListener("canplaythrough", done);
            el.removeEventListener("error", done);
          });
          el.addEventListener("canplaythrough", done, { once: true });
          el.addEventListener("error", done, { once: true });
        }
      })
  );

  const timeout = new Promise<void>((resolve) =>
    window.setTimeout(resolve, timeoutMs)
  );

  return Promise.race([Promise.all(pending), timeout]).finally(() => {
    listeners.forEach((fn) => fn());
  });
}

export default function AssetLoadGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [assetsReady, setAssetsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setAssetsReady(false);

    waitForStaticAssets().then(() => {
      if (!cancelled) {
        setAssetsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <>
      {!assetsReady && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <LoadingScreen />
        </div>
      )}
      <div
        aria-busy={!assetsReady}
        aria-hidden={!assetsReady}
        className={!assetsReady ? "pointer-events-none opacity-0" : "opacity-100 transition-opacity duration-200"}
      >
        {children}
      </div>
    </>
  );
}
