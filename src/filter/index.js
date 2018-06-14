//模块的边界,即对外暴露的接口文件
import * as actions from './actions';
import reducer from './reducer';
import view from './views/filters';

export {actions, reducer, view};