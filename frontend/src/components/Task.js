import React from 'react'
import { withStyles } from '@material-ui/core/styles' 
import Paper from '@material-ui/core/Paper'
import { Typography, Grid } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
        width: 'auto',
        height: 'auto',
    },
};

class Task extends React.Component {
    render() {
        const { classes } = this.props
        const taskDetails = this.props.taskDetails

        return (
            <div className={classes.root}>
                <Grid container spacing={0} justify="flex-start" alignItems="center">
                    <Grid item xs={1}>
                        <Checkbox checked={taskDetails.isDone}/>
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