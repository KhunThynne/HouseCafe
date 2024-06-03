import { ReactNode } from "react";

interface GridLayoutProps {
    // Define your props here
    children?: ReactNode,
    className?: string,
}

const GridLayout: React.FunctionComponent<GridLayoutProps> = ({ children, className = "" }) => {
    // Component logic
    return <div className={`grid  grid-rows-[auto,1fr]    ${className}`}>
        {children}
    </div>;
}


export default GridLayout;