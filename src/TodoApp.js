
import React from 'react';
import {view as Todos} from './todos';
import {view as Filter} from './filter';

//纯函数: 傻瓜组件(也叫展示组件), 因为简单到只是返回一个视图组件,并没有其他的业务逻辑,所以可以把定义类组件那一套简化到一个纯函数
function TodoApp() {
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    )
}

export default TodoApp;