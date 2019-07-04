'use strict';

function getNextStateForNumbers(state = initialState.numbers, action) {
    let newState;
    switch (action.type) {
        case NUMBERS_INCREMENT:
            newState = {
                currentNumber: state.currentNumber + 1
            };
            break;
        case NUMBERS_DECREMENT:
            newState = {
                currentNumber: state.currentNumber - 1
            };
            break;
        default:
            newState = state;
    }
    return newState;
}


function initNumbers() {
    document.getElementById('plus').addEventListener('click', () => {
        store.dispatch(getIncrementAction());
    });

    document.getElementById('minus').addEventListener('click', () => {
        store.dispatch(getDecrementAction());
    });

    function updateNumber() {
        document.getElementById('number').innerText = store.getState().numbers.currentNumber;
    }

    store.subscribe(() => {
        updateNumber();
    });

    updateNumber();
}