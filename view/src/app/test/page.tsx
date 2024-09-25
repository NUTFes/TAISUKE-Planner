"use client"

import Header from "../components/layouts/Header/Header"
import EventName from "../components/common/EventName/EventName"
export default function test() {
return (
    <div>
        <Header/>
        <Header/>
        <EventName initialText="イベント名を入力"/>
    </div>
);
}
