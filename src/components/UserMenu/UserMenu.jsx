import { useAuth } from "../../hooks"
import css from './UserMenu.module.css'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/auth/operations'


export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth()

    const handleLogout = () => dispatch(logOut())

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user?.name}</p>
            <button onClick={handleLogout} type="button">Logout</button>
        </div>
    )
}