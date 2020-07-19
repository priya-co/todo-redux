import React, {useState} from 'react'
import { connect } from 'react-redux';

function TodoInput(props) {
    const [userInput, setUserInput] = useState('');


    console.log("I am re-rendering");
    return (
        <div>
            <input onChange={(e) => {setUserInput(e.target.value)}} value={userInput} placeholder="Please add TO DO Item"/>
            <button onClick={() => {props.onAddItem(userInput)} }>Add</button> 
        </div>
    )
}
const mapDispatchToProps= (dispatch) => {
    return {
        onAddItem: (userInput) => {
            const action = { 
                type: 'ADD-ITEM',
                todoList: {
                        label: userInput,
                        isChecked: false  
                    }
            }
           dispatch(action); 
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);