import { Component } from "react";


class LoginForm extends Component {
    state = {
        inputValue: ""
    }

    handleChange = event => {
       this.setState({ inputValue: event.target.value})
    }



    render() {
        const { inputValue } = this.state

        return (
                <input onChange={this.handleChange} value={inputValue} type="text"/>               
        )
    }
}

export default LoginForm