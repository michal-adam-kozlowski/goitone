import React, { Component } from "react";

class HelpCounter extends Component {

    shouldComponentUpdate(nextProps) {
        // console.log("nextProps", nextProps)
        // console.log("thisProps", this.props)
        if (nextProps.value !== this.props.value) {
            return true
        } else {
            return false
        }
    }

    render() {
        const { value, onClick, name } = this.props

        console.log(`render component: ${name}`)

        return (
            <div>
                
                {/* 
                Kod z bledem, props ma literowke
                <h3>{`Counter ${nme}:`}</h3> 
                */}
                <h3>{`Counter ${name}:`}</h3> 
                <h3>{value}</h3>
                <button onClick={onClick}>Add</button>
            </div>
        )
    }
}

export default HelpCounter