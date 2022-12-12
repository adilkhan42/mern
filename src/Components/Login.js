import React, { useState } from 'react'
import pic from '../Images/login.svg'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {
    const [userAuthentication, setloginPaswword] = useState({
        emails: "",
        password: "",
    });
    const navigate = useNavigate();
    let name, value;

    function onChangeHandler(e) {

        name = e.target.name;
        value = e.target.value;
        // console.log(name, value);

        setloginPaswword({ ...userAuthentication, [name]: value })
    }
    // console.log(userAuthentication);
    function Login(e) {



        const options = {
            method: "POST",
            data: userAuthentication,
            headers: { "Content-Type": "application/json", "Accept": 'application/json' },
            url: "http://localhost:5000/login"
        }
        axios(options)
            .then((res) => {
                // debugger
                console.log(res);
                if (res.data.id !== 78600) {
                    console.log(res.data.id)
                    const val = res.data.cookie;
                    console.log(val)
                    // document.cookie = "authenticationCookie=val;expires=Thu, 08 Dec 2022 02:30:00 UTC;"



                    function WriteCookie() {
                        var now = new Date();
                        var minutes = 30;
                        now.setTime(now.getTime() + (minutes * 60 * 1000));
                        document.cookie="authenticationCookie=" + val;
                        document.cookie = "expires=" + now.toUTCString() + ";"
                     }
                     WriteCookie();
//  console.log(document.cookie);
                    alert("login Successfully")
                    // navigate('/image')
                }
                else {
                    alert("please enter valid credentials")
                }
            })
            .catch((err) => console.log(err))
    }


    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-6 img-thumbnail mt-5 ">
                        <img src={pic} className="img-fluid" alt="" />
                    </div>


                    <div className="col-6 text-center mt-5 login">
                        <form method='POST'>
                            <div>
                                <label htmlFor="emails">Login:</label>
                                <input type="text" id='emails' value={userAuthentication.emails} onChange={onChangeHandler} name='emails' />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="text" value={userAuthentication.password} onChange={onChangeHandler} id='password' name='password' />
                            </div>
                            <div className='mt-2'>
                                <button type='button' onClick={Login} className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Login