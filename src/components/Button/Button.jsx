import clsx from 'clsx'
import './Button.css'

export const Button = ({ children, variant }) => {

    return (
        <button 
            className={clsx('button', variant)}
        >
        {children}
        </button>
    )
}

export const PrimaryButton = () => { 
    // logika


    return ( 
    <Button variant='primary'>I am Primary</Button>
    )
}

export const SecondaryButton = () => ( 
    // !loigka
    <Button variant='secondary'>I am Secondary</Button>
    )