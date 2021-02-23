import React from 'react';
import { Route, Switch } from "react-router-dom"

import Navbar from './components/Nav'
import CreateTodoPage from './containers/CreateTodoPage'
import TodoDetails from './containers/TodoDetails'

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Switch>
        <Route path="/" exact component={CreateTodoPage} />
        <Route path="/todoDetails" component={TodoDetails} />
      </Switch>
    </div>
  );
}

export default App;
