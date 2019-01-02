import React from 'react'
import { withStyles } from '@material-ui/core/styles' 
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class TodoBar extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Node Todo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(TodoBar)