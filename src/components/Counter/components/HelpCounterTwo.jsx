import React, { Component } from "react";

class HelpCounterTwo extends Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
            return false
        } else {
            return false
        }
    }

    render() {
        const { value, onClick } = this.props

        console.log("button two rerender")

        return (<div>
            <h3>Counter 2:</h3>
            <h3>{value}</h3>
            <button onClick={onClick}>Add</button>
        </div>)
    }
}

export default HelpCounterTwo