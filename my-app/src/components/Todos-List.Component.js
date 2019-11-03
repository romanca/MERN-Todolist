import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import axios from "axios"
 

const styles = theme => ({
  '@global': {
    body: {
      background: "#212121"
    },
   },
    root: {
      marginTop: theme.spacing(0),
      overflowX: 'auto',
      marginRight: 10,
      marginLeft:10,
    },
    table: {
      minWidth: 650,
      marginRight: 80,
    },
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    cell1:{
      width:'60%',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    cell2:{
      width:'15%',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    cell3:{
      width:'0%',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    cell4:{
      width:'0%',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    cell5:{
      width:'0%',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  });

  const Todo = props => (
    <TableRow> 
      <TableCell align="left"><Typography variant="h6">{props.todo.description}</Typography></TableCell>
      <TableCell align="center"><Typography variant="h6">{props.todo.category}</Typography></TableCell>
      <TableCell align="center"><Typography variant="h6">{props.todo.priority}</Typography></TableCell>
      <TableCell align="center"><Button><Typography variant="h6"><Link to={"/edit/"+props.todo._id}><EditIcon/></Link></Typography></Button></TableCell>
      <TableCell align="center"> <Button  onClick={()=>{props.onRemove(props.todo._id)}}><Typography variant="h6"><DeleteIcon/></Typography></Button></TableCell>
    </TableRow>
 )
 
  class TodosList extends Component {
    
    constructor(props) {
        super(props);
         this.state = {todos: []};
        }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })}
            
    onRemove =(id)=>{
        axios.delete("http://localhost:4000/todos/" + id)
        .then(res => console.log(res.data))

        this.setState({
            todos: this.state.todos.filter(el => el._id !== id)
        })
      }
    
    
    todoList =()=> {
        return this.state.todos.map(currentTodo => {
            return <Todo todo={currentTodo} key={currentTodo._id} onRemove={this.onRemove}/>;
        })
    }
    
    render(){ 
      const {classes} = this.props;
        return (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.cell1} align="center"><Typography variant="h4">Todos</Typography></TableCell>
                  <TableCell className={classes.cell2} align="center"><Typography variant="h6">Category</Typography></TableCell>
                  <TableCell className={classes.cell3} align="center"><Typography variant="h6">Priority</Typography></TableCell>
                  <TableCell className={classes.cell4} align="center"><Typography variant="h6">Edit</Typography></TableCell>
                  <TableCell className={classes.cell5} align="center"><Typography variant="h6">Delete</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               { this.todoList()}
              </TableBody>
            </Table>
          </Paper>
        );
      } 
    }

export default withStyles(styles)(TodosList)