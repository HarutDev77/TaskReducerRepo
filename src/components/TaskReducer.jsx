import {useReducer, useState} from "react";

const changeText = (state,action)=>{

    switch (action.type) {
        case 'addText': return [...state,{name: action.payload,id: Math.random()}];
        case 'delete': return  [...state.filter((text) => text.id !== action.payload)];
        default : return null
    }
}
function TaskReducer () {

    const [state,dispatch] = useReducer(changeText,[]);
    const [Text,setText] = useState('')

    return(
        <>
            <input value={Text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>{dispatch({
                type: "addText",
                payload: Text
            });
            setText('')
            }}
            >
                Add
            </button>
            <ol>
                {state.map(text=>{
                    return(
                        <li
                            key={text.id}
                        >
                            {text.name}
                            <span onClick={()=>dispatch({
                                type: 'delete',
                                payload: text.id
                            })}
                            >
                                X
                            </span>
                        </li>
                    )
                })}
            </ol>

        </>
    )
}

export default TaskReducer;