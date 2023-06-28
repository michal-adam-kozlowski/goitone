import { Component } from "react";


class ErrorBoundary extends Component {
    state = { isError: false }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { isError: true };
      }

    componentDidCatch(error, errorInfo) {

        console.log(error, errorInfo)
    }

    render() {

        if (this.state.isError) {
            return <h1>{"Oops, something went wrong :("}</h1>
        }


        return this.props.children
    }
}

export default ErrorBoundary