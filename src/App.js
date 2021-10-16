import React from 'react';
import './nprogress.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Character from './personagemMain'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Character} />
          <Route path={`${process.env.PUBLIC_URL}/:id`} exact component={Character} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
