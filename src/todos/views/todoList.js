import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {toggleTodo, removeTodo} from '../actions';
import {FilterTypes} from '../../constants';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map(todo => 
                    <TodoItem 
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onToggle={() => onToggleTodo(todo.id)}
                        onRemove={() => onRemoveTodo(todo.id)}
                    />
                )
            }
        </ul>
    )
};

//根据传入的filter过滤todos
const selectVisibleTodos = (todos, filter) => {
    switch(filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(todo => todo.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error('unsupported filter');
    }
};

//根据应用的state, 新建一份todos列表,并把它赋值给组件的属性上, 以便用于组件的渲染源
const mapStateToProps = state => {
    return {
        //这个组件属性就是渲染组件的数据源
        todos: selectVisibleTodos(state.todos, state.filter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        //这个组件属性是用来派发切换数据的操作的
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id));
        },
        //这个属性是用来删除数据操作的
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);