import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Coviddata from '../component/Covid19Data/CovidData'
import Gallery from '../component/Gallery'
import Home from '../component/Home'
import Index from '../component/Index'
import Signalrclient from '../component/SignalRClient'

export default function MyRouter() {
    return (
        <BrowserRouter>
            <Route exact path="/home" render={(props)=><Home {...props} />} />
            <Route exact path="/" render={(props)=><Index {...props} />} />
            <Route exact path="/gallery" render={(props)=><Gallery {...props} />} />
            <Route exact path="/signalr" render={(props)=><Signalrclient {...props} />} />
            <Route exact path="/covid19" render={(props)=><Coviddata {...props} />} />
        </BrowserRouter>
    )
}
