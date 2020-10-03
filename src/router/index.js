import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Coviddata from '../component/Covid19Data/CovidData'
import Gallery from '../component/Gallery'
import Repository from '../component/GeneralRepository.js'
import Home from '../component/Home'
import Index from '../component/Index'
import Layout from '../component/Layout'
import Signalrclient from '../component/SignalRClient'
import { COVID19, GALLERY, HOME, INDEX, REPOSITORY, SIGNALR } from '../constant'

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
            </Layout>
        </BrowserRouter>
    )
}
