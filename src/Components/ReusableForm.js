// import React from 'react'
// import { useForm, handleSubmit } from 'react-hook-form'
// function ReusableForm(props) {
//     let { register } = useForm();
//     // function handleSubmit(e) {
//     //     console.log(e);
//     // }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e);
//     }

//     return (
//         <>
//             <form onSubmit={handleSumbit(onSubmit)}>
//                 <h4>Job Application Form</h4>
//                 <div>
//                     <label htmlFor="firstname">FirstName : </label>
//                     <input type="text" name='firstname' id='firstname' ref={register} />
//                     <br />
//                     <button className="btn">Submit</button>
//                 </div>

//             </form>
//         </>
//     )
// }
// function onSubmit(values) {
//     console.log(values)
// }

// export default ReusableForm







// import { useReducer, useCallback } from 'react';

// const formReducer = (state, action) => {
//     switch (action.type) {
//         case 'INPUT_CHANGE':
//             return {
//                 ...state, inputs: { ...state.inputs, [action.inputId]: { value: action.value } }
//             };
//         default:
//             return state
//     }
// }

// export const useForm = (initialInput) => {
//     const [formState, dispatch] = useReducer(formReducer, { inputs: initialInput });

//     const inputHandler = (id, value) => {
//         dispatch(
//             { type: 'INPUT_CHANGE', value: value, inputId: id })
//     }

//     return [formState, inputHandler];
// }

