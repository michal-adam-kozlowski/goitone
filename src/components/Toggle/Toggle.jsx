import { Component } from "react";


class Toggle extends Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState(state => ({ isOpen: !state.isOpen }))
    }

    // show = () => this.setState({
    //     isOpen: true
    // })

    // hide = () => this.setState({
    //     isOpen: false
    // })

    // currentState = { a: 2, b: 6, c: 7, d: 9}

    // updateSlice = {b: 3, d: 4 }

    // nextState = { ...this.currentState, ...this.updateSlice }



    render() {
        const { isOpen } = this.state
        const { children } = this.props

        return <div>
            <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>
            {isOpen && children}
        </div>
    }
}

export default Toggle