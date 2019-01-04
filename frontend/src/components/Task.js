import React from 'react'
import { withStyles } from '@material-ui/core/styles' 
import { Typography, Grid, Fade } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import { fade } from '@material-ui/core/styles/colorManipulator'


const API = 'http://localhost:8000/api/todo'

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
        padding: 20,
    },
    icon: {
        margin: theme.spacing.unit,
        color: fade(theme.palette.common.black, 0.25)
    },
});

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

    onAttachFile = () => {
        console.log("attach file")
    }

    onDelete = () => {
        console.log("delete")
    }

    onEdit = () => {
        console.log("edit")

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
                    <Grid item xs={8}>
                        <Typography variant="subheading">
                            {taskDetails.todo}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <AttachFileIcon className={classes.icon}/>
                    </Grid>
                    <Grid item xs={1}>
                        <DeleteIcon className={classes.icon}/>
                    </Grid>
                    <Grid item xs={1}>
                        <EditIcon className={classes.icon}/> 
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Task)