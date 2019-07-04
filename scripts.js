'use strict';

let initialState = {
    numbers: {
        currentNumber: 1000
    },

    todo: {
        inputValue: '',
        items: []
    }
};

const getNextState = Redux.combineReducers({
    numbers: getNextStateForNumbers,
    todo: getNextStateForTodo
});

const store = Redux.createStore(getNextState);

initNumbers();
initTodo();