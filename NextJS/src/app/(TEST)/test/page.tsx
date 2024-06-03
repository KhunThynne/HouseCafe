// "use client"

// import { useCallback, useEffect, useState } from "react"



// export default function TestPage() {
//     const [test, setTest] = useState(false)
//     const [Un, setUn] = useState(false)
//     // const Hello = useCallback(() => {
//     //     console.log("Hello")

//     // }, [test])


//     const Hello = () => {
//         console.log("Hello")
//         setTest(true);
//     }


//     useEffect(() => {

//         return (() => {

//             alert("hello")
//         })
//     }, [test])

//     return (<Test Hello={Hello} >
//         Button
//     </Test>)
// }

// const Test = (props: any) => {


//     return <div className="p-5 bg-primary" onClick={props.Hello}> Hi </div>
// }

// "use client"

// import ProductBox from "@/app/(ROOT)/(MAIN)/home/@Products/ui/ProductBox";
// import { getItem, nontest, test } from "@/lib/express_prisma";
// import React, { ReactNode, useCallback, useEffect, useState } from "react"







//  function Child({ children }: { children: ReactNode }) {

    

//     return <div>{children}  </div>;
// }


//  function TestD() {
//     const [name,setName] =useState<string>("")

//     useEffect(()=>{
//         async function fetch() {
//             await test().then(
//                 ((val:any) =>{

//                     setName(val.name)
//                 })
//             );
//         }

//         fetch()
//     },[])
//     return (
//         <>
//         <div className="flex flex-col gap-10">

    
//             <Child> Npp user: {name}</Child>
    
//             </div>  
//         </>
//     );
// }




// export default function ProductPage() {
//     const [name,setName] =useState<string>("")

//     useEffect(()=>{
//         async function fetch() {
//             await test().then(
//                 ((val:any) =>{

//                     setName(val.name)
//                 })
//             );
//         }

//         fetch()
//     },[])
//     return (
//         <>
//         <div className="flex flex-col gap-10">

    
//             <Child> user: {name}</Child>
//     <TestD></TestD>
//             </div>  
//         </>
//     );
// }




















// export default function TestPage() {
//     const [test, setTest] = useState(false)
//     const [Un, setUn] = useState(5)



//     const Hello = useCallback(() => {
//         console.log(`Hello ${Un}`)
//     }, [test])

//     let t = 1;
//     const dd = () => {
//         t = t + 1
//         console.log(`Hello ${t}`)

//     }


//     useEffect(() => {
        
//         console.log(`Hello ${Un}`)
//     }, [Un])

//     return (<>  <Test Hello={Hello} >
//         Button
//     </Test>
//         <div className="p-5 bg-black" onClick={() => {

//             setUn(pre => pre + 1)
//         }}>

//             SDDS

//         </div>
//         <div className="p-5 bg-danger" onClick={() => {
//             dd()
//         }}>

//         DD

//         </div>

//     </>

//     )
// }

// const Test = ({ Hello }: any) => {


//     return <div className="p-5 bg-primary" onClick={Hello}> Hi </div>
// }











"use client"

import { useCallback, useEffect, useMemo, useState } from "react"



const ExampleComponent = () => {
    const [number, setNumber] = useState(0);
    const [clic, setClic] = useState(false);
    const factorial = (num: number) => {
        console.log("Calculating factorial..."+num);
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };
    useEffect(() => {
        console.log(number);

    }, [clic])
    const memoizedFactorial = useMemo(() => factorial(number), [number]);
    return (
        <div>
            <h2>Calculate Factorial</h2>
            <p>Number: {number}</p>

            {/* <p>Factorial: {factorial(number)}</p> */}
            <p>Factorial: {memoizedFactorial}</p>
            <div>
                <button onClick={() => setNumber(number + 1)}>Increment Number</button>
            </div>

            <div className="p-5 bg-black" onClick={() => setClic(pre => !pre)}>    <button >ssdsd Number</button>
            </div>
        </div>
    );
};


export default ExampleComponent;