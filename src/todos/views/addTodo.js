import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }
    
    onSubmit(ev) {
        ev.preventDefault();
        
        const input = this.input;
        if(!input.value.trim()) {
            return;
        }
        
        this.props.onAdd(input.value);
        input.value = "";
    }
    
    refInput(node) {
        //拿到真实的DOM元素, 即input标签
        this.input = node;
    }
    
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    {/*当组件完成挂载的时候,会检查ref属性,如果是函数,会自动调用, 参数就是对应的DOM元素(是真实的DOM, 不是虚拟DOM)*/}
                    <input className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        //这个组件的属性是用来派发一个添加数据的action
        onAdd: text => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);