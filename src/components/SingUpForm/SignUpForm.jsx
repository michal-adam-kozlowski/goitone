import React, { useState, useEffect } from "react";

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
    age: "",
    loading: true
}

export const SignUpForm = ({ onSubmit }) => {
    // state = { ...INITIAL_STATE }
    const [formData, setFormData] = useState(INITIAL_STATE)

    // constructor() {
    //     super()

    //     this.state = {
    //         ...INITIAL_STATE,
    //         login: "12"
    //     }

    //     console.log('constructor')

    // }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         login: "14"
    //     }
    // }

    useEffect(() => {
        console.log('did mount')
    }, [])

    // componentDidMount() {
    //    console.log('did mount') 
    // }


    useEffect(() => {
        console.log("did update", formData.login)
    }, [formData.login])


    // componentDidUpdate() {
    //     console.log("did update", this.state.login)
    //     // wylogowania
    // }

    useEffect(() => {
       return () => console.log('will unmout')
    }, [])

    // componentWillUnmount() {
    //     console.log('will unmout')
    //     // clear interval
    // }






    const handleChange = e => {
        const {value, name, type, checked } = e.target
        setFormData({ [name]: type === 'checkbox' ? checked : value })
    }

    const reset = () => {
        setFormData(INITIAL_STATE)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        if (!formData.agreed) {
            return console.log('must agree to terms', formData.agreed)
        }
        
        const { login, email, password } = formData

        console.log(`Login: ${login}, Email: ${email},  Password: ${password}`)

        onSubmit({ ...formData})
        reset()
    }

    




        const { login, email, password, agreed, gender, age } = formData

        return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
            <input
                type="text"
                placeholder="Enter login"
                name="login"
                value={login}
                onChange={handleChange}
            
            />
            </label>
            <label>
                Email
            <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
            
            />
            </label>
            <label>
                Password
            <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
            
            />
            </label>

            <label>
                Agree to terms
            <input
                type="checkbox"
                name="agreed"
                checked={agreed}
                onChange={handleChange}
            
            />
            </label>

            <section>
                <h3>Choose your gender</h3>
            <label>
                Male
            <input
                type="radio"
                name="gender"
                checked={gender === Gender.MALE}
                onChange={handleChange}
                value={Gender.MALE}
            
            />
            </label>
            <label>
                Female
            <input
                type="radio"
                name="gender"
                checked={gender === Gender.FEMALE}
                onChange={handleChange}
                value={Gender.FEMALE}
            
            />
            </label>
            </section>

            <label>
                Choose your age
            <select name="age" value={age} onChange={handleChange}>
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