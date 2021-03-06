import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import calendarData from  './data.js';

const generateResources = calendarData.generateResources;
const generateAppointments = calendarData.generateAppointments;
  

const currentDate = new Date(2021, 8, 6);
const views = [{
  type: 'day',
  groupOrientation: 'vertical',
  name: '2 Days',
  intervalCount: 2
}, {
  type: 'day',
  groupOrientation: 'vertical',
  name: '3 Days',
  intervalCount: 3
}, {
  type: 'workWeek',
  name: 'Work Week',
  groupOrientation: 'vertical'
}];
const scrolling = { mode: 'virtual' };
const resourceData = generateResources();
const resources = [{
  fieldExpr: 'resourceId',
  dataSource: resourceData
}];
const groups = ['resourceId'];
const appointments = generateAppointments();

class Calendar extends React.Component {
  render() {
    return (
      <Scheduler
        dataSource={appointments}
        height={600}
        views={views}
        defaultCurrentView="2 Days"
        defaultCurrentDate={currentDate}
        startDayHour={9}
        endDayHour={18}
        scrolling={scrolling}
        showAllDayPanel={false}
        groups={groups}
        resources={resources}
      />
    );
  }
}

export default Calendar;
