export default function Heading({ level, children, ...props }) {
    const Component = level;
    const stylesMap = new Map([
        ["h1", "font-medium text-5xl"],
        ["h2", "font-medium text-3xl"],
        ["h3", "font-medium text-2xl"],
    ]);

    return (
        <Component
            className={`${stylesMap.get(level) ?? ""} ${props.className}`}
        >
            {children}
        </Component>
    );
}
