import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
    
function App() {
  return (
    <BrowserRouter>
    <h1 className="text-center">Products DB</h1>
        <Switch>
          <Route exact path="/products">
            <Main />
          </Route>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}
    
export default App;

