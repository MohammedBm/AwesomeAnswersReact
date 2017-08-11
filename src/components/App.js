import React, {Component} from 'react';
import QuestionsIndexPage from './pages/QuestionsIndexPage';
import {
  BrowserRouter as Router, //when importing use `as` to alias imported to something else
  Route,
  Link
} from 'react-router-dom'
import QuestionsShowPage from './pages/QuestionsShowPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/questions'>Questions</Link>
            <Link to='/questions/new'>New Question</Link>
          </nav>
          <h1>Awesome Answers</h1>
          <Route exact path='/' component={QuestionsIndexPage} />
          <Route exact path='/questions' component={QuestionsIndexPage} />
          <Route path='/questions/:id' component={QuestionsShowPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
