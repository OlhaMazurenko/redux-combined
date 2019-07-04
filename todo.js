'use strict';

function getNextStateForTodo(state = initialState.todo, action) {
    switch (action.type) {
        case TODO_ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.title]
            };
        case TODO_REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((item, index) => {
                    return index !== action.index;
                })
            };
        case TODO_UPDATE_INPUT:
            return {
                ...state,
                inputValue: action.newValue
            };
        default:
            return state;
    }
}

function initTodo() {
    document.getElementById('input').addEventListener('input', (event) => {
        store.dispatch(getUpdateInputAction(event.target.value.toLowerCase()));
    });

    document.getElementById('input').addEventListener('keydown', (event) => {
        if (event.code === 'Enter' && event.target.value.trim() !== '') {
            store.dispatch(getAddItemAction(event.target.value));
            store.dispatch(getUpdateInputAction(''));
        }
    });

    function render() {
        const state = store.getState();
        document.getElementById('input').value = state.todo.inputValue;
        const list = document.getElementById('list');
        list.innerHTML = '';
        for (let i = 0; i < state.todo.items.length; i++) {
            const item = state.todo.items[i];
            const listItem = document.createElement('li');
            listItem.innerText = item;
            const remove = document.createElement('span');
            remove.className = 'remove';
            remove.innerHTML = '&times;';
            listItem.insertAdjacentElement('beforeend', remove);
            list.append(listItem);
            remove.addEventListener('click', () => {
                store.dispatch(getRemoveItemAction(i));
            });
        }
    }

    store.subscribe(() => {
        render();
    });

    render();
}