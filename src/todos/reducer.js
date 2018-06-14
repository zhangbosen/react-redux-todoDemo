
//引入动作类型
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

//对应用的状态做修改的唯一地方(其实并不是在原有的state上做修改,而是重新赋值了, 这也是redux跟flux不一样的地方,flux直接修改原有的state)
//这里接受到的state, 是对应着这个功能模块的子state,(即: 并不是应用的整个state对象,而是state里面的某一个字段, 这里是state.todos对应的子状态)
//redux上的一个原则就是: 一个子状态只能被一个功能模块操控, 一个功能模块也只能操控一个子状态

//监听派发过来的action对象
export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }
            
        case TOGGLE_TODO: {
            return state.map(item => {
                if(action.id === item.id) {
                    return {...item, completed: !item.completed};
                }else {
                    return item;
                }
            })
        }
            
        case REMOVE_TODO: {
            return state.filter(item => item.id !== action.id)
        }
            
        default: {
            return state;
        }  
    
            
            
    }
}
