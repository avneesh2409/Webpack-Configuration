import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Displayauthorbook = (props) => {
    const [state, setState] = useState({ author: '', books: null })
    useEffect(() => {
        fetch("https://localhost:44345/author")
            .then(res => res.json())
            .then(json => {
                setState({
                    ...state,
                    data: json
                })
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if (state.author) {
            fetch(`https://localhost:44345/author/author-book/${state.author}`)
                .then(res => res.json())
                .then(json => {
                    if(json.status){
                        setState({
                            ...state,
                            books: json.data.books
                        })
                    }
                })
                .catch(err => console.log(err))
        }
        console.log(state.books)
    }, [state.author])
    return (
        <>
            <select name="author" value={state.author} onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}>
                <option value=''>Select Author</option>
                {
                    state.data && state.data.map((e, i) => {
                        const { name, id } = e
                        return (
                            <option key={i} value={id}>{name}</option>
                        )
                    })
                }
            </select>
            <h1>Your Books Are Here </h1>
            {
                state.books && state.books.length > 0 && state.books.map((e, i) => {

                    return (
                    <div key={i}>
                        <p>{e.title}</p>
                        <p>{e.createdAt}</p>
                        <p>{e.year}</p>
                    </div>
                    )
                })
            }

        </>
    )
}

Displayauthorbook.propTypes = {

}

export default Displayauthorbook
