import React from "react"
import css from './Alert.module.css'
import clsx from 'clsx';

// const styles = {
//     margin: '2rem 4rem',
//     padding: 40,
//     borderRadius: 8,
//     // backgroundColor: "gray",
//     color: "white",
//   }

//   const getBgFromVariant = (variant) => {
//     switch(variant) {
//         case 'info':
//             return 'blue'
//         case 'error': 
//             return 'red'
//         case 'success':
//             return 'green'
//         case 'warning':
//             return 'orange'
//         default:
//             throw new Error(`Unsupported variant prop value - ${variant}`)
//     }
// }

export const Alert = ({ children, variant, isOutlined, isElevated }) => {
    // const classNames = ['alert', variant]

    // if (isOutlined) {
    //     classNames.push('is-outlined')
    // }

    // if (isElevated) {
    //     classNames.push('is-elevated')
    // }

    return (
    <p className={clsx(css[variant], {
        [css.isOutlined]: isOutlined,
        [css.isElevated]: isElevated
    })}
    >
       {children}
    </p>
  )
}