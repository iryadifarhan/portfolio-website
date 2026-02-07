export function LinkButton ( { link, className, Icon, text } : { link: string, className: string, Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, text: string } ) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`${className} relative group`}
            >
            <Icon className="h-4 w-4" aria-hidden />
            <span className="lg:hidden">{text}</span>

            {/* Tooltip */}
            <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                        rounded-md bg-foreground text-white dark:text-black px-2 py-1 text-xs opacity-0
                        transition-opacity lg:group-hover:opacity-100"
            >
                {text}
            </span>
        </a>
    );
}