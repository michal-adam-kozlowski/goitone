import { Helmet } from "react-helmet";
import { RegisterForm } from "../../components";



const Register = () => (
    <div>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <RegisterForm/>
    </div>
)

export default Register