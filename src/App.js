import logo from './logo.svg';
import './App.css';
import TodoApp from "./Todo/TodoApp";
import React, {Component} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
  <TodoApp/>
      <LoginComponent/>
    </div>
  );
}


class LoginComponent extends Component
{
  render(){return(
      <div>

          UserName:<input type={"text"} name={"username"}/>

          Password: <input type={"text"} name={"password"} />

              <Button className={"LoginButton"} variant="contained" sx={{marginLeft: 2, boxShadow: 5, borderRadius: 5}}>Login</Button>

      </div>
  )}
}

export default App;
