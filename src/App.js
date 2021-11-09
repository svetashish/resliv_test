import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/Home/Home';
import Employees from './Employees/Employees';
import TopMenu from './TopMenu/TopMenu'

function App() {
    return (
        <BrowserRouter>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/employees">
                    <Employees/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
