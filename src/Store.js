/*
    store是管理应用的唯一状态的地方, 所有组件来这个里面取数据
*/


import {createStore, combineReducers} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';


const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});



export default createStore(reducer, {});