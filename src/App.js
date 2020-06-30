import React from "react";
import { connect } from "react-redux";
import ReminderForm from "./components/ReminderForm";
import AllReminders from "./components/AllReminders";

const App = (props) => {

    return (
      <div>
        <h1 id="logo"> Reminder App</h1>
       
        <div>
          <ReminderForm/>
        </div>
        <div>
          <AllReminders />
        </div>
      </div>
    );
}

export default connect(null)(App);