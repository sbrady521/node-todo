
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
    render() {
        const { classes } = this.props
        const todos = this.props.todos

        return (
            <Paper className={classes.root}>
                <Grid container spacing={0}>
                    {todos.map(todo => (
                        <Grid item key={todo._id} xs={12}>
                            <Task taskDetails={todo} />
                            <Divider />
                        </Grid>
                    ))}
                </Grid>

            </Paper>
        )
    }
}

export default withStyles(styles)(TodoList)