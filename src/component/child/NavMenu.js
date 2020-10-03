import React from 'react'
import { Link } from 'react-router-dom'
import { COVID19, GALLERY, HOME, INDEX, REPOSITORY, SIGNALR } from '../../constant'
import style from '../../css/style.module.css'


const Navmenu = () => {
    const initial = [{
        name:HOME,
        path:`/${HOME.toLowerCase()}`
    },{
        name:GALLERY,
        path:`/${GALLERY.toLowerCase()}`
    },{
        name:REPOSITORY,
        path:`/${REPOSITORY.toLowerCase()}`
    },{
        name:SIGNALR,
        path:`/${SIGNALR.toLowerCase()}`
    },{
        name:INDEX,
        path:`/${INDEX.toLowerCase()}`
    },{
        name:COVID19,
        path:`/${COVID19.toLowerCase()}`
    }]
    const clickHandler = (path) =>{
        window.history.pushState("","",path);
    }
    return (
        <>
            <ul className={style.ul}>
                {
                    initial.map((e,i)=>{
                        return (
                        <li key={i}><Link to={e.path}> {e.name}</Link></li>
                        )
                    })
                }
                
            </ul>
        </>
    )
}

export default Navmenu
