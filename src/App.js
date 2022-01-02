import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Импорт компонентов

import OurPets from './components/ourPets/OurPets.js';
import Main from './components/main/main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/pets" component={OurPets} />
      </Switch>
    </Router>
  );
}

export default App;
