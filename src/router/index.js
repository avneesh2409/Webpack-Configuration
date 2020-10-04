import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Coviddata from '../component/Covid19Data/CovidData'
import Gallery from '../component/Gallery'
import Repository from '../component/GeneralRepository.js'
import Addauthor from '../component/GeneralRepository.js/AddAuthor'
import Addbook from '../component/GeneralRepository.js/AddBook'
import Displayauthorbook from '../component/GeneralRepository.js/DisplayAuthorBook'
import Home from '../component/Home'
import Index from '../component/Index'
import Layout from '../component/Layout'
import Signalrclient from '../component/SignalRClient'
import { ADD_AUTHOR, ADD_BOOK, COVID19, DISPLAY_AUTHOR_BOOK, GALLERY, HOME, INDEX, REPOSITORY, SIGNALR } from '../constant'

export default function MyRouter() {
    return (

        <BrowserRouter>
            <Layout>
                <Route exact path={`/${HOME.toLowerCase()}`} render={(props) => <Home {...props} />} />
                <Route exact path={`/${INDEX.toLowerCase()}`} render={(props) => <Index {...props} />} />
                <Route exact path={`/${GALLERY.toLowerCase()}`} render={(props) => <Gallery {...props} />} />
                <Route exact path={`/${SIGNALR.toLowerCase()}`} render={(props) => <Signalrclient {...props} />} />
                <Route exact path={`/${COVID19.toLowerCase()}`} render={(props) => <Coviddata {...props} />} />
                <Route exact path={`/${REPOSITORY.toLowerCase()}`} render={(props) => <Repository {...props} />} />
                <Route exact path={`/${ADD_AUTHOR.toLowerCase()}`} render={(props) => <Addauthor {...props} />} />
                <Route exact path={`/${ADD_BOOK.toLowerCase()}`} render={(props) => <Addbook {...props} />} />
                <Route exact path={`/${DISPLAY_AUTHOR_BOOK.toLowerCase()}`} render={(props) => <Displayauthorbook {...props} />} />
            </Layout>
        </BrowserRouter>
    )
}
