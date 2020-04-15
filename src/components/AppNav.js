import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default () => {
    return(
      <div>
        <AppBar position='static'>
            <Toolbar className="nav">
              <Typography variant="h4" color="inherit"  className="grow" component="h1">
                Admin Panel
              </Typography>
            </Toolbar>
        </AppBar>
      </div>
    );
};
