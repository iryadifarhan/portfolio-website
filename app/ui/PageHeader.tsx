export default function PageHeader({ title }: { title: string }) {
    return (
        <header className="mb-4 pb-4 border-b border-black/10 dark:border-white/10">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight px-8">{title}</h1>
        </header>
    );
}