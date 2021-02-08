import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles({
  root: {
    width: '600px',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: '1rem',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  control: {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant='h4' gutterBottom className={classes.title}>
          <SupervisedUserCircleIcon fontSize='large' />
          StoryBooks Social
        </Typography>
        <Typography variant='subtitle1' align='center' gutterBottom>
          Share you story with the world
        </Typography>
        <Divider />
        <div className={classes.control}>
          <Button
            variant='contained'
            color='primary'
            startIcon={<AccountBoxIcon />}
            href='/auth/google'
          >
            Log In With Google
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default Login;
