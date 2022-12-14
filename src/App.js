import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Info from './components/Info/Info'


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/info' component={Info} />
            </Switch>
        </Router>
    )
}

export default App
