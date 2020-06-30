import React from "react";
import { connect } from "react-redux";
import "./AllReminders.scss"

const AllReminders = (props) => {

    const deleteHandel = (i) => {
        props.deleteReminder(i)
    }
    const remindersList = props.reminders.map((reminder, i) => {
        return (
            <li key={Math.random()}  >
                {reminder.text}, {reminder.date}
                <button onClick={()=>deleteHandel(i)}>X</button>
            </li>
        );
    });
    return <ul id="all-reminders">{remindersList}</ul>;
};

const mapStateToProps = (state) => {
    return { reminders: state.reminders };
};

const mapDispatchToProps = (dispatch) => {
    return { deleteReminder: (i) => dispatch({type: 'delete Reminder', payload: i}) };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllReminders);
