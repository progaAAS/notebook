import './App.css';
import {Route, Switch} from "react-router-dom";
import Public from './Page/Public/Public';
import WithLayout from './Page/Public/WithLayout';
import Login from './component/Auth/Login/Login';
import SingUp from './component/Auth/SingUp/SingUp';
import UsersPage from './Page/UserPage/UsersPage';
import { useEffect } from 'react';
import { getInfoUser } from './redux/userReducer';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getInfoUser())
  }, [])

  return (
    <div className="App">
      <Switch>
        <WithLayout Layout={Public} exact path="/" AuthComponent={Login}/>
        <WithLayout Layout={Public} exact path="/singup" AuthComponent={SingUp}/>
        <Route exact path="/users" component={UsersPage}/>
      </Switch>
    </div>
  );
}

export default App;
