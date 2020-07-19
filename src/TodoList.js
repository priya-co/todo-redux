import React from 'react';
import { connect } from 'react-redux';


const TodoList = (props) => {
    return(
        <div>
            {
                props.todoLists.map((list) => (
                    <div key={list.key} className='todo-list'>
                        <input type='checkbox' checked={list.isChecked}/>
                        <div className="label">{list.label}</div>
                    </div>
                ))
            }
            <h3>{props.inputItem}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoLists: state.todoLists,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         onAddItem:()=>{  
            console.log('onAddItem - onButtonClick');  
            const action={type:'ADD_INPUT'};  
            dispatch(action);  
          } ,
          onInputChange:()=>{  
            console.log('onInputChange');  
            const action={type:'INPUT_ITEM_CHANGE'};  
            dispatch(action);  
          } 
    }
}

export default connect(mapStateToProps, null)(TodoList);