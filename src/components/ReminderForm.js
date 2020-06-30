import React, { useState } from "react";
import { connect } from "react-redux";
import "./ReminderForm.scss";

const ReminderForm = (props) => {
    const iniReminder = {};
    const [reminder, setReminder] = useState(iniReminder);

    const changeHandel = (e) => {
        let newReminder = { ...reminder, [e.target.name]: e.target.value };
        setReminder(newReminder);
    };

    const newReminderHandel = (e) => {
        e.preventDefault();
        if (Object.keys(reminder).length) {
            props.addReminder(reminder);
            setReminder({});
        }
    };

    const clearHandel = (e) => {
        e.preventDefault();
        setReminder({});
        props.clearAll();
    };
    return (
        <div id="Reminder-Component">
            <form id="reminder-form" onChange={changeHandel}>
                <div>
                    <label htmlFor="text">Text</label>
                    <input
                        onChange={changeHandel}
                        type="text"
                        id="text"
                        name="text"
                        value={reminder.text || ""}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Start Date</label>
                    <input
                        onChange={changeHandel}
                        type="date"
                        id="date"
                        name="date"
                        value={reminder.date || ""}
                        min="2020-07-01"
                        required
                    />
                </div>
                <div>
                    <button type="submit" onClick={newReminderHandel}>
                        Add
                    </button>
                    <button onClick={clearHandel}>Clear All</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addReminder: (reminder) => {
            dispatch({ type: "add Reminder", payload: reminder });
        },

        clearAll: () => dispatch({ type: "clear" }),
    };
};

export default connect(null, mapDispatchToProps)(ReminderForm);
