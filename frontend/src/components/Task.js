import React from 'react'
import { withStyles } from '@material-ui/core/styles' 
import { Typography, Grid, Fade, IconButton } from '@material-ui/core'
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

    standardAPIRequest = (method, data) => {
        axios({
            url: API,
            method: method,
            data: data 
        })
        .then((response) => {
            console.log(`isDone successfully updated: ${response}`)
        })
        .catch((error) => {
            console.error(error)
        })

    }

    setTaskMongo = () => {
        this.standardAPIRequest('POST', this.state)
    }

    onCheckbox = (event) => {
        this.setState({isDone: event.target.checked}, this.setTaskMongo)
    }

    onAttachFile = () => {
        console.log("attach file")
    }

    onDelete = () => {
        this.standardAPIRequest('DELETE', this.state)
        this.props.removeTodo(this.state._id)
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
                        <IconButton aria-label="Delete" >
                            <AttachFileIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="Delete" >
                            <EditIcon className={classes.icon}/> 
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="Delete" onClick={this.onDelete}>
                            <DeleteIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Task)