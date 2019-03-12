import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Home } from './pages/home.page'
import { Page1 } from './pages/page1.page'

export const Routes = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/route1" render={() => <Page1 />} />
        <Route component={() => <div>NOT FOUND</div>} />
      </Switch>
    </>
  </BrowserRouter>
)
