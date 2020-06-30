let initialState = {
    reminders: [
        { text: "hello", date: "2020-07-10" },
        { text: "hello2", date: "2021-04-20" }
    ],
};

const rootReducer = (state = initialState, action) => {
    let newReminders = [...state.reminders];
    switch (action.type) {
        case "add Reminder":
            newReminders = [...state.reminders, action.payload];
            return { ...state, reminders: newReminders };
        case "delete Reminder":
        console.log(action.payload)
            newReminders.splice(action.payload, 1)
            return { ...state, reminders: newReminders };
        case "clear":
            return { ...state, reminders: [] };
        default:
            return state;
    }
};

export default rootReducer;
