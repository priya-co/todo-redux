import React, { useState } from 'react';
import { connect } from 'react-redux';


const TodoList = (props) => {
    return(
        <div>
            {
                props.todoLists.map((list, index) => (
                    <div key={list.index} className='todo-list'>
                        <input onChange ={() => {props.onClickCheck(!list.isChecked, index)}} type='checkbox' checked={list.isChecked}/>
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
          onClickCheck: (isChecked, index) => {  
            const action = {
                type: 'CHECK-INPUT',
                isChecked,
                index   
            }  
            dispatch(action);  
          } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);