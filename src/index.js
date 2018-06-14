import React from 'react';
import ReactDOM from 'react-dom';

//应用的根组件
import TodoApp from './TodoApp';

//把store绑定在这个组件身上, 这样,所有的组件都可以拿到应用的唯一状态
import {Provider} from 'react-redux';

//应用的唯一状态的管理地方
import store from './Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
