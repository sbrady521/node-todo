
import React from 'react'
import { withStyles } from '@material-ui/core/styles' 
import { Paper, Grid, Divider } from '@material-ui/core';
import Task from './Task';


const styles = {
    root: {
        flexGrow: 1,
        width: 600,
        marginTop: 50,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
};

class TodoList extends React.Component {
    state = {
        todos: []
    }

    removeTodo = (id) => {
        let found = -1
        for(let i = 0 ; i < this.state.todos.length ; i++) {
            if(this.state.todos[i]._id === id) {
                console.log("found at " + i)
                found = i
                break
            }
        }
        this.setState({
            todos: this.state.todos.filter((_, i) => i !== found)
        }, console.log(this.state.todos))
    }

    render() {
        const { classes } = this.props
        this.state.todos = this.props.todos

        return (
            <Paper className={classes.root}>
                <Grid container spacing={0}>
                    {this.state.todos.map(todo => (
                        <Grid item key={todo._id} xs={12}>
                            <Task taskDetails={todo} removeTodo={this.removeTodo}/>
                            <Divider />
                        </Grid>
                    ))}
                </Grid>

            </Paper>
        )
    }
}

export default withStyles(styles)(TodoList)