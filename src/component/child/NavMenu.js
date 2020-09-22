import React from 'react'
import style from '../../css/style.module.css'

const Navmenu = (props) => {
    return (
        <>
            <ul className={style.ul}>
                <li><a href="/" >Index</a></li>
                <li><a href="/home" >Home</a></li>
                <li><a href="/gallery" >Gallery</a></li>
                <li><a href="/signalr" >SignalR</a></li>
                <li><a href="/covid19" >Covid19</a></li>
            </ul>
        </>
    )
}

export default Navmenu
