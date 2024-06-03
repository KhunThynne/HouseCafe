

// const conectx = useContext(SomeContext)

import { createContext } from "react";

const webContext = createContext<any>({});
const alertContext = createContext<any>({});

export { webContext, alertContext };