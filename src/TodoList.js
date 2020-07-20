import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const TodoList = (props) => {
    const logToLocalStorage = function (e) {        
        localStorage.setItem(`todoLists`, JSON.stringify(props.todoLists));
    }
    useEffect(() => {
        window.addEventListener("beforeunload", logToLocalStorage);

        return () => {
            window.removeEventListener("beforeunload", logToLocalStorage);
        }
    });
    return(
        <div>
            {
                props.todoLists.map((list, index) => (
                    <div key={list.index} className={`todo-list ${list.isChecked ? 'checked' : ''}`}>
                        <input onChange ={() => {props.onClickCheck(!list.isChecked, index)}} type='checkbox' checked={list.isChecked}/>
                        <div className="label">{list.label}</div>
                        <div className="cross" onClick={() => props.onCross(index)}>x</div>
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
          },
          onCross: (index) => {  
            const action = {
                type: 'REMOVE-ITEM',
                index   
            }  
            dispatch(action);  
          } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);