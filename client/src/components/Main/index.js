import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Chart from "../Chart/index";
import MeetTheTeam from "../MeetTheTeam";
import Home from "../Home";
import API from "../../utils/API";
import LogOutCard from "../LogOutCard";
import GroupIcon from "@material-ui/icons/Group";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import About from "../About";
import Calendar from "../Calendar";  

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
          <Typography component="span">{children}</Typography>
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

export default function ScrollableTabsButtonPrevent(props) {
  const [actions, setActions] = useState([]);
  useLayoutEffect(() => {
    if (localStorage.getItem("activeAction")) {
      API.getAction({
        activeAction: localStorage.getItem("activeAction"),
      }).then((res) => {
        setActiveTaskData(res.data);
      });
    }

    API.getAllActions().then((res) => {
      setActions(res.data);
    });
  }, []);
  const syncActions = () => {
    API.getAllActions().then((res) => {
      setActions(res.data);
    });
  };
  const updateActiveTaskData = (data) => {
    setActiveTaskData(data);
  };
  const [activeTaskData, setActiveTaskData] = useState({
    _id: "",
    startTime: "",
    task: { name: "", _id: "" },
    project: { color: "" },
  });
  const style = {
    nav: {
      background: "#042046",
    },
    navItemWidth: {
      height: "7vh",
      width: "20%",
    },
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar style={style.nav} position="static">
        <Tabs
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            style={style.navItemWidth}
            icon={<HomeIcon />}
            aria-label="home"
            {...a11yProps(0)}
          />
          <Tab
            style={style.navItemWidth}
            icon={<EqualizerIcon />}
            aria-label="charts"
            {...a11yProps(1)}
          />
          <Tab
            style={style.navItemWidth}
            icon={<CalendarIcon />}
            aria-label="calendar"
            {...a11yProps(2)}
          />
          <Tab
            style={style.navItemWidth}
            icon={<GroupIcon />}
            aria-label="team"
            {...a11yProps(3)}
          />
          <Tab
            style={style.navItemWidth}
            icon={<LiveHelpIcon />}
            aria-label="FAQ"
            {...a11yProps(4)}
          />
          <LogOutCard
            id="scrollable-prevent-tab-logout"
            className="logout-card"
            style={style.navItemWidth}
            icon={<ExitToAppIcon />}
            {...a11yProps(5)}
            removeToken={props.removeToken}
          ></LogOutCard>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home
          activeTaskData={activeTaskData}
          updateActiveTaskData={updateActiveTaskData}
        />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Chart actions={actions} syncActions={syncActions}></Chart>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Calendar />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <MeetTheTeam></MeetTheTeam>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <About />
      </TabPanel>
    </div>
  );
}
