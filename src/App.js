import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components'
import { HomePage, AddBook } from './pages'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add-book" component={AddBook}/>
      </Switch>
    </div>
  );
}

export default App;
