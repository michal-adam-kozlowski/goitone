import { useUser } from "../../services"


export const UserMenu = () => {
    const { userName, isLoggedIn, logIn, logOut } = useUser()

    return (
        <div>
            {isLoggedIn && <p>{userName}</p>}
            {
                isLoggedIn ? 
                <button onClick={logOut}>Log out</button> 
                : <button onClick={logIn}>Log in</button>
            }
            <p>
                
            </p>
        </div>
    )
}