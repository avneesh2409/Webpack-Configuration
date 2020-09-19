import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

export default function MyRouter() {
    return (
        <BrowserRouter>
            <Route exact path="/home" render={()=><h1>hello this home page</h1>} />
            <Route exact path="/" render={()=><h1>this is index page</h1>} />
            <Route exact path="/gallery" render={()=><h1>this is Gallery page</h1>} />
        </BrowserRouter>
    )
}
