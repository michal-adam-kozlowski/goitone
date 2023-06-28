import { Component } from "react";
import HelpCounter from "./components/HelpCounter";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// const Button = ({ changeValue }) => (
//     <button type="button" onClick={changeValue}>Set value</button>
// )

// const ButtonOne = ({ changeValue }) => {
//     console.log("button one rerender")
    
//     return (
//     <button type="button" onClick={changeValue}>Button One</button>
// )}

// const ButtonTwo = ({ changeValue }) => {
//     console.log('button two rerender')
    
//     return (
//     <button type="button" onClick={changeValue}>Button Two</button>
// )}



class Counter extends Component {
    static defaultProps = { 
        step: 3,
        // initialValue: 4
    }

    // constructor() {
    //     super();
    // }

    state = {
        valueOne: 0,
        valueTwo: 0
    }

    handleIncrementValueOne = () => {
        this.setState((state, props) => ({
            valueOne: state.valueOne + props.step
        }))
        // console.log("Click on increment btn!", event)
        // console.log("this.props: ", this.props)

        // for (let i = 0; i < 3; i += 1) {
        //     console.log(this.state.value)

        //     this.setState(prev => {
        //         console.log(prev.value)

        //         return { value: prev.value + 1}
        //     })
        // }
    }

    handleIncrementValueTwo = () => {
        this.setState((state, props) => ({
            valueTwo: state.valueTwo + props.step
        }))
    }

    handleDecrement = () => {    
        this.setState((state, props) => ({
            value: state.value - props.step
        }))
        // console.log("Click on increment btn!", event)
        // console.log("this.props: ", this.props)
    }

    handleChangeValue = event => {
        console.log(event)
        this.setState({
            value: 100
        })
    }


    
    render() {
        // const { step } = this.props
        const { valueOne, valueTwo} = this.state

        console.log(valueTwo)

        return (
            //komponent do obslugi bledu
            <ErrorBoundary>
            <div>
                <HelpCounter name="one" value={valueOne} onClick={this.handleIncrementValueOne}/>
                <HelpCounter name="two" value={valueTwo} onClick={this.handleIncrementValueTwo}/>
            </div>
            </ErrorBoundary>
        )
    }
}

export default Counter