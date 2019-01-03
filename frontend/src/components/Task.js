import React from 'react'
import { withStyles } from '@material-ui/core/styles' 
import { Typography, Grid } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import axios from 'axios'

const API = 'http://localhost:8000/api/todo'

const styles = {
    root: {
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
    },
};

class Task extends React.Component {
    state = {
        _id: null,
        username: "Bean1",
        todo: "",
        isDone: false,
        hasAttachment: false
    }

    componentDidMount() {
        this.setState(this.props.taskDetails)
    }

    setTaskMongo = () => {
        axios({
            url: API,
            method: "POST",
            data: this.state
        })
        .then((response) => {
            console.log(`isDone successfully updated: ${response}`)
        })
        .catch((error) => {
            console.error(error)
        })

    }

    onCheckbox = (event) => {
        this.setState({isDone: event.target.checked}, this.setTaskMongo)
    }
    
    render() {
        const { classes } = this.props
        const taskDetails = this.state

        return (
            <div className={classes.root}>
                <Grid container spacing={0} justify="flex-start" alignItems="center">
                    <Grid item xs={1}>
                        <Checkbox onChange={this.onCheckbox} checked={taskDetails.isDone}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="subheading">
                            {taskDetails.todo}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Task)