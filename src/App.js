import React from "react";
import { Switch, Route } from 'react-router-dom';
import { HowToPlay, Welcome, Play, QuestionPage, Result } from './Pages';


class App extends React.Component {
// Does this need to be a class Component?
  render() {
    return (
      <div id="app">
        {/* Lovely, nice and neat */}
        <Switch>
          <Route exact path='/' component={ Welcome } />
          <Route path='/howto' component={ HowToPlay } />
          <Route path='/play' component={ Play } /> 
          <Route path='/questions' component={ QuestionPage } />
          <Route path='/result' component={ Result } />
        </Switch>
       
      </div>
    );
  }
}
export default App;
