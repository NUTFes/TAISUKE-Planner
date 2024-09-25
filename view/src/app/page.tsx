"use client"


import EventName from "./components/common/EventName/EventName"
import EventRemark from "./components/common/EventRemark/EventRemark"
import TaskEditForm from "./components/common/TaskEditForm"

export default function Home() {
  return (
    <div>
      <EventName initialText="イベント名を入力"/>
      <EventRemark initialText="備考を入力"/>
      <TaskEditForm/>
    </div>
  );
}
