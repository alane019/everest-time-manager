import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EventIcon from "@material-ui/icons/Event";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DropUpContainer from "../DropUpContainer";
import Chart from "../../Chart";
import Calendar from "../../Calendar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
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
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const style = {
    nav: {
      background: "#042046",
      height: "6vh",
    },
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={style.nav} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<HomeIcon />} aria-label="home" {...a11yProps(0)} />
          <Tab icon={<EqualizerIcon />} aria-label="charts" {...a11yProps(1)} />
          <Tab icon={<EventIcon />} aria-label="calendar" {...a11yProps(2)} />
          <Tab icon={<ExitToAppIcon />} aria-label="logout" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}></TabPanel>

      <TabPanel value={value} index={1}>
        <Chart></Chart>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Calendar></Calendar>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Log Out
      </TabPanel>
      <DropUpContainer></DropUpContainer>
    </div>
  );
}
