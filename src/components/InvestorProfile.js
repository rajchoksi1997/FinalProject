import React, { useState, useEffect } from 'react';
import '../RegistrationInvestor.css';
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import Header from './Header';
const InvestorProfile = () => {



    const [activeStep, setActiveStep] = useState(1);
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [link, setLink] = useState("");
    // const [fields, setFields] = useState([{ companyName: "", domain: "", amount: "" }]);
    const [fields, setFields] = useState([]);
    const navigate = useNavigate();
    const handleAdField = () => {
        setFields([...fields, { companyName: "", domain: "", amount: "" }]);
    };
    const validateForm = () => {
        const values = [
            country,
            state,
            selectedDomains,
            name,
            email,
            mobile,
            address,
            link,

            ...fields.map(field => field.companyName),
            ...fields.map(field => field.domain),
            ...fields.map(field => field.amount),
        ];

        return values.every(value => Boolean(value)) && selectedDomains.length > 0 && fields.length > 0;
    }

    // const handleFieldChange = (e, index) => {
    //     console.log(e.target.val)
    //     const { name, value } = e.target;
    //     const newFields = [...fields];
    //     newFields[index] = { ...newFields[index], [name]: value };
    //     setFields(newFields);
    // };

    const handleFieldChange = (e, index) => {
        console.log(index, e.target)
        const { name, value } = e.target;
        const updatedFields = [...fields];
        updatedFields[index] = { ...updatedFields[index], [name]: value };
        setFields(updatedFields);
    };



    const linkChangeListner = (event) => {
        setLink(event.target.value);
    };

    const emailChangeListner = (event) => {
        setEmail(event.target.value);
    };

    const nameChangeListner = (event) => {
        setName(event.target.value);
    };

    const mobileChangeListener = (event) => {
        setMobile(event.target.value);
    };

    const addressChangeListener = (event) => {
        setAddress(event.target.value);
    }




    const handleNextStep = (e) => {
        e.preventDefault();
        setActiveStep(prevStep => prevStep + 1);
        if (activeStep != 3) {
            setButtonClicked(false);
        }
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setActiveStep(prevStep => prevStep - 1);
        if (activeStep != 3) {
            setButtonClicked(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            country,
            state,
            selectedDomains,
            name,
            email,
            mobile,
            address,
            link,
            fields,
        };
        // console.log(formData);

        // if (!buttonClicked) {
        //     return;
        // }
        console.log(formData);
        if (!validateForm()) {
            // If the form is not valid, display an error message
            swal({
                title: "Error !!",
                text: 'Please fill all mandatory fields',
                icon: 'error',
            })

            return;
        }


        try {
            const response = await axios.put("https://raj-spring.kaushalkr.com/investors", formData);
            // navigate('/investor/landingPage');

            swal({
                title: 'Success!',
                text: 'Updated Successfully',
                icon: 'success',
            }).then(() => {
                navigate('/investor/landingPage');// Redirect to the investor registration page
            });


        } catch (error) {
            swal({
                title: "Error !!",
                text: 'Please fill all mandatory fields',
                icon: 'error',
            })
            console.error(error);
        }
    };
    const [count, setCount] = useState(1);

    const handleAddField = () => {
        setCount(count + 1);
    };


    const handleDomainClick = (option) => {
        const selectedDomain = domainOptions.find((domain) => domain.id === option);
        setSelectedDomains([...selectedDomains, selectedDomain]);
    };

    const handleRemoveDomain = (id) => {
        const filteredDomains = selectedDomains.filter((domain) => domain.id !== id);
        setSelectedDomains(filteredDomains);
    };


    const domainOptions = [
        { id: "0", domain: "select option" },
        { id: "1", domain: "Production" },
        { id: "2", domain: "Technology" },
        { id: "3", domain: "Trade" },
        { id: "4", domain: "Finance" },
        { id: "5", domain: "Marketing" },
        { id: "6", domain: "Agriculture" },
        { id: "7", domain: "Investment" },
        { id: "8", domain: "Food industry" },
        { id: "9", domain: "Advertising" },
        { id: "10", domain: "Construction" },
        { id: "11", domain: "Financial services" },
        { id: "12", domain: "Retail" },
        { id: "13", domain: "Stock market" },
        { id: "14", domain: "Economics" },
        { id: "15", domain: "Distribution" },
        { id: "16", domain: "Market research" },
        { id: "17", domain: "Education" },
        { id: "18", domain: "Transport" },
        { id: "19", domain: "Foodservice" },
        { id: "20", domain: "Mining" },
        { id: "21", domain: "Insurance" },
        { id: "22", domain: "Computers & IT" },
        { id: "23", domain: "Conglomerate" },
        { id: "24", domain: "Robotics" },
        { id: "25", domain: "Real Estate" },
        { id: "26", domain: "E-commerce" },
        { id: "27", domain: "Software" },
        { id: "28", domain: "Holding company" },
        { id: "29", domain: "Public administration" },
        { id: "30", domain: "Waste management" },
        { id: "31", domain: "Health care" },
        { id: "32", domain: "Security" },
        { id: "33", domain: "Metal fabrication" },
        { id: "34", domain: "Research" },
        { id: "35", domain: "Data science" },
        { id: "36", domain: "International trade" },
        { id: "37", domain: "Management consulting" },
        { id: "38", domain: "Energy" },
        { id: "39", domain: "Small business" },
        { id: "40", domain: "Telecommunications" },
        { id: "41", domain: "Commercial bank" },
        { id: "42", domain: "Energy industry" },
        { id: "43", domain: "Infrastructure" },
        { id: "44", domain: "Biotechnology" },
        { id: "45", domain: "Hospitality" },
        { id: "46", domain: "Consulting firm" },
        { id: "47", domain: "Human Resources" },
        { id: "48", domain: "Rail transport" },
        { id: "49", domain: "Aerospace" },
    ];


    const [investor, setInvestor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);

    // Create a function to set the "buttonClicked" state to true
    const handleButtonClick = () => {
        if (activeStep == 3) {
            setButtonClicked(true);
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            if (!localStorage.getItem("email") || localStorage.getItem("email") == undefined || localStorage.getItem("email") == "") {
                swal({
                    title: 'Error !!',
                    text: 'Please Login again',
                    icon: 'error',
                }).then(() => {
                    navigate('/');// Redirect to the investor registration page
                });
            }
            try {

                const response = await axios.get('https://raj-spring.kaushalkr.com/investors/getbyemail', {
                    params: {
                        email: localStorage.getItem("email"),
                    },
                });
                setInvestor(response.data);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (investor) {
            setCountry(investor.country);
            setState(investor.state);
            setFields(investor.fields);
            setSelectedDomains(investor.selectedDomains);
            setAddress(investor.address);
            setEmail(investor.email);
            setMobile(investor.mobile);
            setName(investor.name);
            setLink(investor.link);



        }
    }, [investor]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (!investor) {
        return <div>Error fetching investor data</div>;
    }



    return (

        <div className="formbold-main-wrapper">
            <Header />

            <div className="formbold-form-wrapper" style={{ marginTop: "150px" }}>
                <form  >
                    <div className="formbold-steps">
                        <ul>
                            <li className={`formbold-step-menu1 ${activeStep === 1 && 'active'}`}>
                                <span>1</span>
                                Company Information
                            </li>
                            <li className={`formbold-step-menu2 ${activeStep === 2 && 'active'}`}>
                                <span>2</span>
                                Invesment details
                            </li>
                            <li className={`formbold-step-menu3 ${activeStep === 3 && 'active'}`}>
                                <span>3</span>
                                Preferences
                            </li>
                        </ul>
                    </div>

                    <div className={`formbold-form-step-1 ${activeStep === 1 && 'active'}`}>
                        <div className="formbold-input-flex">
                            <div>
                                <label for="Company Name" className="formbold-form-label"> Company Name<span style={{ color: 'red' }}>*</span> </label>
                                <input
                                    type="text"
                                    name="Company Name"
                                    placeholder="Apple.inc"
                                    id="Company Name"
                                    className="formbold-form-input"
                                    onChange={nameChangeListner}
                                    value={name}
                                />
                            </div>

                            <div>
                                <label for="email" className="formbold-form-label"> Email Address </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@mail.com"
                                    id="email"
                                    className="formbold-form-input"
                                    // onChange={emailChangeListner}
                                    value={email}
                                    style={{ backgroundColor: '#ddd', color: '#666' }}
                                />
                            </div>


                        </div>

                        <div>
                            <label htmlFor="companyURL" className="formbold-form-label"> Company URL<span style={{ color: 'red' }}>*</span>  </label>
                            <input
                                type="url"
                                name="companyURL"
                                placeholder="https://www.example.com"
                                id="companyURL"
                                className="formbold-form-input"
                                onChange={linkChangeListner}
                                value={link}
                            />
                        </div>
                        {/* <label for="Name" className="formbold-form-label"> Company Location </label> */}
                        <div className="formbold-input-flex">
                            <div>
                                <label for="Name" className="formbold-form-label"> Country<span style={{ color: 'red' }}>*</span>  </label>
                                <CountryDropdown
                                    className="formbold-form-input"
                                    value={country}
                                    onChange={(val) => setCountry(val)}
                                />

                            </div>

                            <div>
                                <label for="Name" className="formbold-form-label"> State<span style={{ color: 'red' }}>*</span>  </label>
                                <RegionDropdown
                                    className="formbold-form-input"
                                    country={country}
                                    value={state}
                                    onChange={(val) => setState(val)}

                                />
                            </div>

                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <label for="address" className="formbold-form-label"> Address<span style={{ color: 'red' }}>*</span>  </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
                                    className="formbold-form-input"
                                    onChange={addressChangeListener}
                                    value={investor?.address || ''}

                                />
                            </div>
                            <div>
                                <label for="contact-number" className="formbold-form-label"> Contact Number<span style={{ color: 'red' }}>*</span>  </label>
                                <input
                                    type="tel"
                                    name="contact-number"
                                    id="contact-number"
                                    placeholder="123-456-7890"
                                    className="formbold-form-input"
                                    onChange={mobileChangeListener}
                                    value={investor?.mobile || ''}
                                />

                            </div>

                        </div>

                    </div>

                    <div className={`formbold-form-step-2   ${activeStep === 2 && 'active'}`} >
                        <div>
                            {fields.map((field, index) => (
                                <div className="formbold-input-flex" key={index}>
                                    <div>
                                        <label htmlFor={`companyName-${index}`} className="formbold-form-label">
                                            Company Name<span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            id={`companyName-${index}`}
                                            placeholder="Apple.inc"
                                            className="formbold-form-input"
                                            value={field.companyName}
                                            onChange={(e) => handleFieldChange(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`domain-${index}`} className="formbold-form-label">
                                            Company Domain<span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <select
                                            className="formbold-form-input"
                                            name="domain"
                                            id={`domain-${index}`}
                                            onChange={(e) => handleFieldChange(e, index)}
                                        >
                                            {domainOptions.map((option) => (
                                                <option
                                                    key={option.id}
                                                    value={option.domain}
                                                    selected={field.domain === option.domain}
                                                >
                                                    {option.domain}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div>
                                        <label htmlFor={`amount-${index}`} className="formbold-form-label">
                                            Investment Amount(USD)<span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="amount"
                                            id={`amount-${index}`}
                                            placeholder="10000"
                                            className="formbold-form-input"
                                            style={{ width: "70%", fontSize: "14px", marginLeft: "10px" }}
                                            value={field.amount}
                                            onChange={(e) => handleFieldChange(e, index)}
                                        />
                                    </div>
                                </div>
                            ))}
                            <button type="button" onClick={handleAdField}>+</button>
                        </div>
                    </div>

                    <div className={`formbold-form-step-3 ${activeStep === 3 && 'active'}`}>
                        <div >
                            {/* <p style={{ marginBottom: "10px", padding: "5px", }}>
                                Select Interested Domains<span style={{ color: 'red' }}>*</span>
                            </p> */}

                            <div >

                                <label htmlFor="domain" className="domain_selected">Select Interested Domains<span style={{ color: 'red' }}>*</span></label>
                                <select className="formbold-form-input" style={{

                                    alignItems: "left",
                                    justifyContent: "flex-start",
                                    marginBottom: "30px",
                                    padding: "5px",


                                }} id="domain" onChange={(e) => handleDomainClick(e.target.value)}>
                                    {domainOptions.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.domain}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <p>Selected domains:</p>
                                <div >
                                    {selectedDomains.map((domain) => (
                                        <button
                                            key={domain.id}
                                            onClick={() => handleRemoveDomain(domain.id)}
                                            style={{

                                                backgroundColor: "#536387",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "10px 16px",
                                                margin: "0px 130px 10px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            {domain.domain}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="formbold-form-btn-wrapper">

                        {activeStep > 1 && (
                            <button className="formbold-btn" onClick={handlePrevStep}>
                                Back
                            </button>
                        )}

                        {activeStep < 3 ? (
                            <button className="formbold-btn" onClick={handleNextStep}>
                                Next Step
                            </button>
                        ) : (
                            <button className="formbold-btn" type="submit" onClick={handleSubmit}>
                                Save
                            </button>
                        )}
                    </div>
                </form>
            </div >
        </div >


    );
};

export default InvestorProfile;
