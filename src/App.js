import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'

import { Books, BookReview } from './screens'
import { SideBar } from './components'

function App() {
  return (
    <Router>
      <Layout>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route path="/book/:bookId" component={BookReview} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
