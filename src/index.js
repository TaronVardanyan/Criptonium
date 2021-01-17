import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header.js';
import './index.css';
import List from './components/list/List.js';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NotFound from './components/Notfound/NotFound';
import Detail from './components/detail/Detail';

const App = () => {
 return (
    <BrowserRouter>
        <div>
            <Header />
             <Switch>
                 <Route  path="/" component={List} exact />
                 <Route path="/currency/:id" component={Detail} exact />
                 <Route  component={NotFound} />
             </Switch>
        </div>
    </ BrowserRouter>);
}

ReactDOM.render(<App />,document.getElementById('root'));


