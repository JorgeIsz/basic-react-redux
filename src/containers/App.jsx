import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeContainer from '../containers/HomeContainer'
import NotFound from '../containers/NotFound'

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/home" component={HomeContainer} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
)


export default App 
