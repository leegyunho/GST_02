// ParentComponent.jsx
import React, { useState } from 'react';
import AddSchedule from './AddSchedule';
import Calendar from '../calendar/calendar';

const ParentComponent = () => {

console.log('parent Component')
  return (
    <div>
      <AddSchedule onScheduleAdded={handleNewSchedule}/>
      <Calendar events={events} />
    </div>
  );
};

export default ParentComponent;
