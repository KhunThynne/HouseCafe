import { ReactNode } from "react";

interface MainContentProps {
    // Define your props here
    className?: string,
    children?: ReactNode
}

const MainContent: React.FunctionComponent<MainContentProps> = ({ children, className }) => {
    // Component logic
    return <main className={`${className}  `}>

        {children}
    </main>;
}


export default MainContent;