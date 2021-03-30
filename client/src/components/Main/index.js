import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import EventIcon from "@material-ui/icons/Event";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Chart from "../Chart/index";
import Calendar from "../../Calendar";
import Home from "../Home";
import API from "../../utils/API";
import LogOutCard from "../LogOutCard";
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
  useLayoutEffect(() => {
    if (localStorage.getItem("activeAction")) {
      API.getAction({
        activeAction: localStorage.getItem("activeAction"),
      }).then((res) => {
        console.log(res.data);
        setActiveTaskData(res.data);
      });
    }
    return;
  }, []);
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
      height: "6vh",
    },
    navItemWidth: {
      width: "25%",
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
            icon={<EventIcon />}
            aria-label="calendar"
            {...a11yProps(2)}
          />
          <LogOutCard
            style={style.navItemWidth}
            icon={<ExitToAppIcon />}
            {...a11yProps(2)}
            removeToken={props.removeToken}
          ></LogOutCard>
          {/* <Tab
            style={style.navItemWidth}
            icon={<ExitToAppIcon />}
            aria-label="logout"
            {...a11yProps(3)}
            onClick={() => props.removeToken()}
          /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home
          activeTaskData={activeTaskData}
          updateActiveTaskData={updateActiveTaskData}
        />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Chart></Chart>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Calendar></Calendar>
      </TabPanel>
    </div>
  );
}
