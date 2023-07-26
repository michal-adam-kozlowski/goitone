import css from './RegisterForm.module.css'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/operations'

export const RegisterForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget;

        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset()
    }


    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                USername
                <input type='text' name='name'/>
            </label>
            <label className={css.label}>
                Email
                <input type='email' name='email'/>
            </label>
            <label className={css.label}>
                Password
                <input type='password' name='password'/>
            </label>
            <button type='submit'>Log in</button>
        </form>
    )
}