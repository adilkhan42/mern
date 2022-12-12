import React from 'react'
import pic from '../Images/login.svg'
import { useNavigate } from 'react-router'
import axios from 'axios'



const Image = () => {
    const navigate = useNavigate();
    const flags = [
        { id: 1, image: pic },
        { id: 1, image: pic },
        { id: 1, image: pic },
        { id: 1, image: pic },
        { id: 1, image: pic },
        { id: 1, image: pic },
        { id: 1, image: pic },
        { id: 1, image: pic },
        //  { id: 2,  image: canada },
    ]
    function Logout() {
        debugger;
        const options = {
            method: "GET",
            url: "http://localhost:5000/logout",
            Headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // "Content-Type": "application/json",
            }
        }

        axios(options)
            .then((res) => {
                navigate('/login')
                console.log(res)
            })
            .catch((err) => console.log(err))


    }
    return (
        <>
            <div className=" mt-5">
                <div className="imagediv row m-2 gap-2 d-flex justify-content-center">

                    {

                        flags.map((item, ids) => {
                            return <div className="col-3  img-thumbnail" key={ids}> `<img className="img-fluid" key={item.id} src={item.image} alt="responsive images" />`</div>
                        })}

                </div>
            </div>
            <div className='text-center'>

                <button className='btn bg-info mb-5' onClick={Logout}>Logout</button>
            </div>
        </>
    )
}

export default Image