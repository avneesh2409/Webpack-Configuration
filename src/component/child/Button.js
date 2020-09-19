import React from 'react'
import style from '../../css/style.module.css'

const Button = (props) =>{
    return (
        <>
            <button {...props} className={style.button}>{props.children}</button>
        </>
    )
}

export default Button
