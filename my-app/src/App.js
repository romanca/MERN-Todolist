import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import CreateTodo from "./components/Create-Todo.Component";
import EditTodo from "./components/Edit-Todo.Component";
import TodosList from "./components/Todos-List.Component";
import ButtonAppBar from "./components/AppBar"
 
 
const App =()=>{
  return(
     <Router>
        <div>
          <ButtonAppBar/>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
  )
}

export default App
