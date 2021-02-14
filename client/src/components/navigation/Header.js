import React, { useState, Fragment } from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import { AccountCircle, ImportContacts } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const [anchor, setAnchor] = useState(null);

  const renderContent = () => {
    if (auth) {
      return (
        <Fragment>
          <IconButton
            aria-label='use account'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
            onClick={(e) => setAnchor(e.target)}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id='account-menu'
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={(e) => setAnchor(null)}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem
              component={Button}
              href='/auth/logout'
              style={{ textTransform: 'none' }}
            >
              Log Out
            </MenuItem>
          </Menu>
        </Fragment>
      );
    }
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <ImportContacts style={{ color: 'white' }} />
        </IconButton>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          StoryBooks
        </Typography>
        {renderContent()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
