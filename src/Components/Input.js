// // import React from 'react'
// import React, { useReducer, useEffect } from "react";
// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE':
//             return { ...state, value: action.val };
//         default:
//             return state;
//     }
// }

// const Input = (props) => {
//     const [inputState, dispatch] = useReducer(inputReducer, { value: '' });

//     const { id, onInput } = props;
//     const { value } = inputState;

//     useEffect(() => {
//         onInput(id, value)
//     }, [id, onInput, value]
//     )

//     const changeHandler = event => { dispatch({ type: 'CHANGE', val: event.target.value }); }

//     const element = props.element === "input" ? (
//         <input name={props.name} type={props.type}
//             placeholder={props.placeholder} value=""
//         />
//     ) : (
//         <textarea name={props.name} rows="4" value=""
//         />
//     );



//     return (
//         <>
//             <div>
//                 <label htmlFor={props.id}> {props.label}</label>
//                 {element}
//             </div>
//         </>
//     )
// }

// export default Input