import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'

import './App.scss'
import NotFound from './components/NotFound'
import Header from './components/Header'

// Lazy loading - Code splitting
const Photo = React.lazy(() => import('./features/Photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from={'/'} to={'/photos'} />

            <Route path={'/photos'} component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
