import { Helmet } from "react-helmet";
import { LoginForm } from "../../components";



const Login = () => (
    <div>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm/>
    </div>
)

export default Login;