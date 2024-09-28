"use client"
import React, {useState}from 'react';
import styles from "./page.module.css"

import EventName from "./components/common/EventName/EventName"
import EventRemark from "./components/common/EventRemark/EventRemark"
import TaskEditForm1 from "./components/common/TaskEditForm"
import ScheduleColumn from './components/common/ScheduleBox/ScheduleColumn/ScheduleColumn';

export default function Home() {
  const [showForm, setShowForm] = useState(false);


  const SetForm = () => {
    setShowForm(true);
  }

  const DelForm = () => {
    setShowForm(false);

  }

  return (
    <div>
      <EventName initialText="イベント名を入力"/>
      <EventRemark initialText="備考を入力"/>
      <div className={styles.page}>
        <div className={styles.ScheduleColumn}>
          <ScheduleColumn/>
        </div>
        <div className={styles.TaskEditForm}>
          {showForm&&(<TaskEditForm1/>)}
          <button onClick={SetForm}></button>
          
        </div>
      </div>
    </div>
  );
}

