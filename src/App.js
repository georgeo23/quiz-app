import React from "react";
import { Switch, Route } from 'react-router-dom';
//Components
import { HowToPlay, Welcome, Play, QuestionPage, Result } from './Pages';


class App extends React.Component {

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={ Welcome } />
          <Route path='/howto' component={ HowToPlay } />
          <Route path='/play' component={ Play } /> 
          <Route path='/questions' component={ QuestionPage } />
          <Route path='/result' component={ Result } />
        </Switch>
       
      </>
    );
  }
}
export default App;
