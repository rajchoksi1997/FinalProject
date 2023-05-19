import React, { useState, useEffect } from 'react';
// import './header.css'; // Import the CSS file
import './Header.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
export const Header = ({ setSearch }) => {

    const [isFixed, setIsFixed] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = () => {
        if (!localStorage.getItem("type") || localStorage.getItem("type") == "") {
            swal({
                title: "Error !!",
                text: "Please Login Again",
                icon: 'error',
            }).then(
                () => {
                    navigate('/');// Redirect to the investor registration page
                }
            )


        }
        if (localStorage.getItem("type") == "investor" || localStorage.getItem("type") == "Investor") {
            navigate("/investor/Profile");
        } else {
            navigate("/startup/Profile");
        }
    }

    return (
        <>
            <header className={isFixed ? "header-fixed fixed" : "header-fixed"}>
                <div className="header-limiter">
                    <h1><a href="#">Venture<span>IT</span></a></h1>
                    <div style={{
                        width: "500px"
                    }}>
                        <form onSubmit={(e) => e.preventDefault()} >
                            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)
                            } />
                        </form>
                    </div>

                    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        {/* <a href="#">{localStorage.getItem("name")}</a> */}
                        <button onClick={handleSubmit} style={{ background: "lightgray", borderRadius: "50%", width: "40px", height: "40px", border: "none", display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
                            {localStorage.getItem("email") ? localStorage.getItem("email").charAt(0).toLocaleUpperCase() : "M"}
                        </button>

                        <button onClick={handleLogout} type="button" style={{ background: "#292c2f", marginTop: "0px", marginRight: "5px", margin: "10px 10px 0px" }} >Logout</button>



                    </nav>
                </div>
            </header>
            <div className="header-fixed-placeholder"></div>
        </>
    );
}

export default Header;
