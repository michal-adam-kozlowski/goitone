import React, {  useEffect, useState } from "react"
import { useToggle } from "../../hooks"



export const CounterFunctional = ( { valueFromProps }) => {
    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const { toggle, isOpen } = useToggle()

    console.log("data from context: ")

    useEffect(() => {
        console.log(" Mounting phase: same as component did mount")

    }, [])

    useEffect(() => {
        console.log(" Update phase: same as component did update", value)
    }, [value, value2])

    useEffect(() => {
        return () => console.log(" Unmount phase, clear, remove listners etc.")
    }, [])

    const incrementValue = () => setValue(value + 1)


    return (

        <div>
            {isOpen && <>
            <h3>{value}</h3>
            <button onClick={incrementValue}>Click me 1</button>
            <button onClick={() => setValue2(value2 + 1)}>Click me 2</button>
            </>}
            <button onClick={() => toggle()}>Toggle counter</button>
        </div>

    )
}