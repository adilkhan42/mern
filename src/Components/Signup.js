import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        work: '',
        password: '',
        cpassword: '',
    });

    // debugger;
    let value, name;
    function onChangeHandler(e) {
        name = e.target.name;

        value = e.target.value;

        setUser({ ...user, [name]: value })

    }

    function PostData(event) {
        event.preventDefault();
        // var form = document.getElementById('form')
        // let formData = new FormData();

        // const { name, email, phone, work, password, cpassword } = user;

        // formData.append('name', name);
        // formData.append('email', email);
        // formData.append('phone', phone);
        // formData.append('work', work);
        // formData.append('password', password);
        // formData.append('cpassword', cpassword);
        // console.log([...formData]);

        // this axios method is used for send form data

        const options = {
            // mode: 'no-cors',
            url: 'http://localhost:5000/signup',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //this line is must when sending data other empty data would be send. 
            },
            data: user
        };

        axios(options)
            .then(response => {
                console.log(response);
                // console.log(response.data.error);
                // console.log(response.data.message);
                if (response.data.id === 1) {
                    console.log("inside succes");
                    alert(response.data.message)
                    navigate('/login')
                }
                else {
                    console.log("inside error");
                    // console.log(response);
                    alert(response.data.error)
                }
            }).catch((err) => { console.log("error = ", err); });



        // this axios method is used for send object or json data

        // axios({
        //     method: 'POST',
        //     url: "http://localhost:5000/signup",
        //     Headers: { "Content-Type": "application/json" },
        //     data: { "name": "rock", "email": 'rock@gmail.com' },

        // }).then(res => console.log(res)).catch(err => console.log(err))


    }



    // const PostData = async (e) => {
    //     e.preventDefault();
    //     let formData = new FormData();
    //     const { name, email, phone, work, password, cpassword } = user;
    //     formData.append('name', name);
    //     formData.append('email', email);
    //     formData.append('phone', phone);
    //     formData.append('work', work);
    //     formData.append('password', password);
    //     formData.append('cpassword', cpassword);
    //     console.log(formData);

    //     const options = {
    //         // mode: 'no-cors',
    //         url: 'http://localhost:5000/signup',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json', //this line is must when sending data other empty data would be send. 
    //         },
    //         data: formData
    //     };

    //     const res = await fetch(options).then(response => response.json())
    //         .catch(function (data) {
    //             console.log(data)
    //         });
    //     console.log(res)
    //     const data = await res.json()
    //     if (data.status === 422 || !data) {
    //         window.alert("invalid registeration");
    //         console.log("Invalid");
    //     } else {
    //         window.alert("Registeration successful");
    //         console.log(" registeration");
    //         navigate("/login")
    //     }
    // }

    return (
        <>
            <div className='container userform d-flex'>

                <form method="POST" id='form' className='w-25 h-25 mt-5 userforms justify-content-center col'>
                    <div className="d-flex gap-3 mt-3 text-center" >
                        <label htmlFor="name" className="form-label m-auto" >Name:</label>
                        <input type="text" className="form-control w-100 h-25 align-item-center" value={user.name} name="name" id="name" aria-describedby="emailHelp" onChange={onChangeHandler} />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="d-flex gap-3 mt-3 text-center">
                        <label htmlFor="email" className="form-label m-auto">Email:</label>
                        <input type="email" className="form-control w-100 h-25" name="email" id="email" value={user.email} onChange={onChangeHandler} />
                    </div>
                    {/* pattern="[6-9]{1}[0-9]{9}" */}
                    <div className="d-flex gap-3 mt-3 text-center">
                        <label htmlFor="phone" className="form-label m-auto">Phone:</label>
                        <input type="number" title='Please enter valid number' pattern="[6-9]{1}[0-9]{9}"  className="form-control w-100 h-25" name="phone" id="phone" value={user.phone} onChange={onChangeHandler} />
                    </div>
                    <div className="d-flex gap-3 mt-3 text-center">
                        <label htmlFor="work" className="form-label m-auto">Work:</label>
                        <input type="text" className="form-control w-100 h-25" name="work" id="work" value={user.work} onChange={onChangeHandler} />
                    </div>
                    <div className="d-flex gap-3 mt-3 text-center">
                        <label htmlFor="password" className="form-label m-auto">Password:</label>
                        <input type="password" className="form-control w-100 h-25" name="password" id="password" value={user.password} onChange={onChangeHandler} />
                    </div>
                    <div className="d-flex gap-3 mt-3 text-center">
                        <label htmlFor="cpassword" className="form-label m-auto">CPassword:</label>
                        <input type="password" className="form-control w-100 h-25" name="cpassword" id="cpassword" value={user.cpassword} onChange={onChangeHandler} />
                    </div>

                    <button type="submit" onClick={PostData} className="btn btn-primary mt-4 mb-4">Submit</button>
                </form>
            </div>




            {/* <h4>{user}</h4> */}
        </>
    )
}

export default Signup