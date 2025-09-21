import { Github, Linkedin, Instagram, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type LinkFormat = {
    label: string,
    href: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const LINKS : LinkFormat[] = [
  { label: "GitHub", href: "https://github.com/iryadifarhan", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/iryadifarhan", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/iryadifarhan", icon: Instagram },
];