import React, { Component } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const styles = (theme) => ({
  "@global": {
    body: {
      background: "#212121"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    borderRadius: 5,
    boxShadow: 20
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.black
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      category: "",
      priority: ""
    };
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      category: e.target.value
    });
  };

  onChangePriority = (e) => {
    this.setState({
      priority: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      description: this.state.description,
      category: this.state.category,
      priority: this.state.priority
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then((res) => console.log(res.data));

    this.setState({
      description: "",
      category: "",
      priority: ""
    });
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.paper} component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Create a New Todo
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.onSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Create a New Todo'
              autoFocus
              autoComplete='email'
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='filled-age-simple'>Category</InputLabel>
              <Select
                native
                type='text'
                value={this.state.category}
                onChange={this.onChangeCategory}>
                <option value='' />
                <option value='Home'>Home</option>
                <option value='Office'>Office</option>
                <option value='School'>School</option>
                <option value='Schopping'>Schopping</option>
                <option value='Hobby'>Hobby</option>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  value='Low'
                  checked={this.state.priority === "Low"}
                  onChange={this.onChangePriority}
                />
              }
              label='Low'
            />
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  value='Medium'
                  checked={this.state.priority === "Medium"}
                  onChange={this.onChangePriority}
                />
              }
              label='Medium'
            />
            <FormControlLabel
              control={
                <Checkbox
                  color='primary'
                  value='High'
                  checked={this.state.priority === "High"}
                  onChange={this.onChangePriority}
                />
              }
              label='High'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Create
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(CreateTodo);
