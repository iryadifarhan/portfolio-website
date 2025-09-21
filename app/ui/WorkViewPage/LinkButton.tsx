export function LinkButton ( { link, className, Icon, text } : { link: string, className: string, Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, text: string } ) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={className}
            >
            <Icon className="h-4 w-4" aria-hidden />
            <span className="lg:hidden">{text}</span>

            {/* Tooltip */}
            <span
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
                        rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0
                        transition-opacity lg:group-hover:opacity-100"
            >
                {text}
            </span>
        </a>
    );
}