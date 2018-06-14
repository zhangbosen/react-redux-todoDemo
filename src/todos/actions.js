

//导入动作类型
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

let nextTodoId = 0;

//导出一个构造函数, 这个构造函数返回一个action对象, 功能是添加一条数据
export const addTodo = text => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId ++,
    text
});


//功能是 切换具体一条数据的completed
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});


//功能是 删除指定的数据
export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});