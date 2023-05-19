import React, { useState, useEffect } from "react";
//import './slide navbar SlideLogin.css';
import '../SlideLogin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
export const SlideLogin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [loginemail, setLoginemail] = useState("");
    const [loginpassword, setLoginpassword] = useState("");
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setUserType(event.target.value);
    };

    // const nameChangeListner = (event) => {
    //   setName(event.target.value);
    // };

    const emailChangeListner = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangeListner = (event) => {
        setPassword(event.target.value);
    };

    const loginemailChangeListner = (event) => {
        setLoginemail(event.target.value);
    };

    const loginpasswordChangeListner = (event) => {
        setLoginpassword(event.target.value);
    };




    function loginChangeListner(event) {
        event.preventDefault();
        const userData = {
            email: loginemail,
            password: loginpassword
        }
        axios
            .post('https://raj-spring.kaushalkr.com/api/auth/login', userData)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("email", loginemail);

                localStorage.setItem("type", response.data.userType);
                swal({
                    title: 'Success!',
                    text: 'Login Successful !!',
                    icon: 'success',
                })
                if (response.data.userType == "investor" || response.data.userType == "Investor") {
                    navigate("/investor/landingpage");
                } else {
                    navigate("/startup/landingpage");
                }
                //  navigate('/signup/investor');
            }).catch((error) => {
                swal({
                    title: "Error !!",
                    text: error.response.data,
                    icon: 'error',
                })
            })

    }
    useEffect(() => {

        localStorage.clear();


    }, [])
    function submitChangeListener(event) {
        event.preventDefault();


        const userData = {
            email: email,
            password: password,
            userType: userType,
        };

        axios
            .post('https://raj-spring.kaushalkr.com/api/auth/signup', userData)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("email", email);
                localStorage.setItem("type", userType);
                if (userType === 'Investor') {
                    swal({
                        title: 'Success!',
                        text: 'You have signed up successfully as an investor',
                        icon: 'success',
                    }).then(() => {
                        navigate('/signup/investor'); // Redirect to the investor registration page
                    });
                } else if (userType === 'Startup') {
                    swal({
                        title: 'Success!',
                        text: 'You have signed up successfully as a startup',
                        icon: 'success',
                    }).then(() => {
                        navigate('/signup/startup'); // Redirect to the startup registration page
                    });
                }
            })
            .catch((error) => {
                console.log(error.response.data);
                swal({
                    title: "Error !!",
                    text: error.response.data,
                    icon: 'error',
                })
            });
    }


    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form autocomplete="off" onSubmit={submitChangeListener}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    {/* <input type="text" name="txt" placeholder="User name" required="" /> */}
                    <input type="email" onChange={emailChangeListner} name="email" placeholder="Email" required="" />
                    <input type="password" onChange={passwordChangeListner} name="pswd" placeholder="Password" required="" />
                    <div className="dropdown">
                        {/* <label htmlFor="options" required="" >Select an option: </label> */}
                        <select id="options" value={userType} onChange={handleOptionChange}>
                            <option value="">Select an option</option>
                            <option value="Investor">Investor</option>
                            <option value="Startup">Startup</option>
                        </select>
                    </div>



                    <button>Sign up</button>
                </form>
            </div>

            <div className="login" onSubmit={loginChangeListner}>
                <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" onChange={loginemailChangeListner} name="email" placeholder="Email" required="" />
                    <input type="password" onChange={loginpasswordChangeListner} name="password" placeholder="Password" required="" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default SlideLogin;