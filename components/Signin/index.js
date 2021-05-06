import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './signin.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50px 50px 60px 60px'
    },
    panel: {
        backgroundColor: '#66676c',
        borderRadius: '0 0 50px 50px',
        height: '500px'
    },
    tab: {
        backgroundColor: '#45464c',
        opacity: '0.6',
        color: 'white',
        borderRadius: '50px 50px 0 0',
     
    },
    
  }));
  

export default function Signin(props) {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div> 
        {props.signinOpen && (
        <div className="wrapper5" id="wrapper5">
        <div className={classes.root}>
      <AppBar position="static"
      className={classes.tab}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Sign in" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Log in" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.panel} value={value} index={0}>
        <div className='inform'>
            <p className='title'>First Name</p>
            <input className='getInform'></input>
        </div>
        <div className='inform'>
            <p className='title'>Last Name</p>
            <input className='getInform'></input>
        </div>
        <div className='inform'>
            <p className='title'>UserName</p>
            <input className='getInform'></input>
        </div>
        <div className='inform'>
            <p className='title'>e-mail</p>
            <input className='getInform'></input>
        </div>
        <div className='inform'>
            <p className='title'>Password</p>
            <input className='getInform'></input>
        </div>
        <div className='inform'>
            <p className='title'>Confirm your password</p>
            <input className='getInform'></input>
        </div>
        <input className='button' type='button' value='SIGN IN'/>
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={1}>
        <div className='inform'>
            <p className='title'>UserName</p>
            <input className='getInform'></input>
        </div>
        <div className='inform'>
            <p className='title'>Password</p>
            <input className='getInform'></input>
        </div>
        <input className='button' type='button' value='SUBMIT'/>
      </TabPanel>
    </div>
        </div>)}
        </div>
    )
}
