import React from 'react'
import { Link } from 'react-router-dom'
import { ADD_AUTHOR, ADD_BOOK, COVID19, DISPLAY_AUTHOR_BOOK, GALLERY, HOME, INDEX, REPOSITORY, SIGNALR } from '../../constant'
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
    },
    {
        name:ADD_AUTHOR,
        path:`/${ADD_AUTHOR.toLowerCase()}`
    },
    {
        name:ADD_BOOK,
        path:`/${ADD_BOOK.toLowerCase()}`
    },
    {
        name:DISPLAY_AUTHOR_BOOK,
        path:`/${DISPLAY_AUTHOR_BOOK.toLowerCase()}`
    }]
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
