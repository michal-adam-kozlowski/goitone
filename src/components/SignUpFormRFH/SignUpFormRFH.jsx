import { useForm } from 'react-hook-form'

const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}

const INITIAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: ""
}

export const SignUpFormRFH = () => {
    const { watch, register, handleSubmit } = useForm({
        defaultValues: { ...INITIAL_STATE }
    })

    const login = watch('login')


    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <label>
                Name
            <input {...register('login')}/>
            </label>
            <label>
                Email
                <input {...register('email')}/>
            </label>
            <label>
                Password
                <input type='password' {...register('password')}/>
            </label>

            <label>
                Agree to terms
            <input type="checkbox" {...register('agreed')}/>
            </label>

            <section>
                <h3>Choose your gender</h3>
            <label>
                Male
            <input type="radio" value={Gender.MALE} {...register('gender')}/>
            </label>
            <label>
                Female
                <input type="radio" value={Gender.FEMALE} {...register('gender')}/>
            </label>
            </section>

            <label>
                Choose your age
            <select {...register('age')}>
                <option value="" disabled>
                    ...
                </option>
                <option value="18-25">
                    18-25
                </option>
                <option value="26-35">
                26-35
                </option>
                <option value="36+">
                36+
                </option>

            </select>
            </label>

            <button type="submit">Sign up as {login}</button>
        </form>
    )

}