import React from 'react';

//这个组件只是展示组件, 没有处理任何的业务逻辑, 是个纯函数, 只是靠接受的数据来渲染(解耦)
const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked: true} : {};

    return (
        <li
            className="todo-item"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>×</button>
        </li>
    )

};

export default TodoItem;
