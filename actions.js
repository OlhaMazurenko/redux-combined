'use strict';

const NUMBERS_INCREMENT = 'numbers_increment';
const NUMBERS_DECREMENT = 'numbers_decrement';
const TODO_ADD_ITEM = 'todo_add_item';
const TODO_REMOVE_ITEM = 'todo_remove_item';
const TODO_UPDATE_INPUT = 'todo_update_input';

function getIncrementAction() {
    return {
        type: NUMBERS_INCREMENT
    };
}

function getDecrementAction() {
    return {
        type: NUMBERS_DECREMENT
    };
}

function getAddItemAction(title) {
    return {
        type: TODO_ADD_ITEM,
        title: title
    };
}

function getRemoveItemAction(index) {
    return {
        type: TODO_REMOVE_ITEM,
        index: index
    };
}

function getUpdateInputAction(newValue) {
    return {
        type: TODO_UPDATE_INPUT,
        newValue: newValue
    };
}