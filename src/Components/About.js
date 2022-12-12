import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import pic from "../Images/about.svg"
import DOMPurify from 'dompurify';

// import { NavLink } from 'react-router-dom';

const About = () => {


    let aboutData;
    aboutData = { name: 'Ganesh' }
    const navigate = useNavigate();
    const callAboutPage = async () => {
        // console.log(authenticationCookie)
        try {
            const Options = {
                url: "http://localhost:5000/about",
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "cookies": document.cookie,
                },
                credentials: "include" //this is used for send cookies data to backend
            }
            axios(Options)
                .then((res) => {
                    // debugger;
                    if (res) {
                        let a = document.cookie;
                        let b = a.split(' ')[0].split('=')[1];
                        const tokens = b.slice(0, b.length - 1);
                        console.log(tokens);
                        let myArr = res.data.tokens;
                        aboutData = res.data;
                        console.log(aboutData)
                        let token = myArr[myArr.length - 1];
                        // console.log("yes = ",document.cookie)
                        if (tokens === token.token) {
                            navigate('/image')
                        }
                        // debugger;
                        if (document.cookie === null || document.cookie === undefined) {
                            navigate('/login')

                        }
                    }
                    else {
                        console.log("yes = ", document.cookie)
                        alert("Please Login First")
                        navigate.push('/login')

                    }
                })
                .catch((err) => console.log("error: ", err))
        } catch (error) {
            navigate.push('/login')

        }
    }

    //Note :- inside useEffect we can't use async function.
    useEffect(() => {
        callAboutPage();

    }, []);

    return (
        <>
            {/* <div
                dangerouslySetInnerHTML={{
                    __html: callAboutPage?.options?.data
                }}
            /> */}

            {/* <div className='d-flex mt-5 justify-content-center'>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={pic} alt="required" />
                    <div className="card-body">
                        <h5 className="card-title"> {aboutData.name} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
 */}
            <div className='mt-5 d-flex justify-content-center'>

                <h3 className='text-center '>Please login first</h3>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                {/* { alert('please login first')} */}
                <NavLink className=" btn btn-danger" to="/login">Go to Login</NavLink>
            </div>
        </>
    )
}

export default About