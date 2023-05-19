import React, { useState, useEffect } from "react";
import '../RegistrationInvestor.css';
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const StartupProfile = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [selectedDomains, setSelectedDomains] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [link, setLink] = useState("");
    //const [fields, setFields] = useState([]);
    const [fields, setFields] = useState([{ companyName: "", round: "", amount: "" }]);
    // const [founders, setFounders] = useState([]);
    const [founders, setFounders] = useState([{ name: "", linkedin: "" }]);
    const [valuation, setValuation] = useState("");
    const [teamcount, setTeamcount] = useState("");
    const [startyear, setStartyear] = useState("");
    const [domain, setDomain] = useState("");
    const [description, setDescription] = useState("");
    const [fundingrequired, setFundingrequired] = useState("");


    const navigate = useNavigate();
    const [companyFields, setCompanyFields] = useState([{ year: "", sales: "", profitLoss: "" }]);
    // const [companyFields, setCompanyFields] = useState([]);

    const handlecompanyFieldChange = (event, index) => {
        const { name, value } = event.target;
        const newFields = [...companyFields];
        newFields[index][name] = value;
        setCompanyFields(newFields);
        // const values = [...companyFields];
        // values[index][event.target.name] = event.target.value;
        // setCompanyFields(values);
    };

    const handleAddcompanyFields = () => {
        setCompanyFields([...companyFields, { year: "", sales: "", profitLoss: "" }]);
    };


    const handleAddFounder = () => {
        setFounders([...founders, { name: "", linkedin: "" }]);
    };

    const handleFounderChange = (event, index) => {
        const { name, value } = event.target;
        const newFounders = [...founders];
        newFounders[index][name.split('-')[0]] = value;
        setFounders(newFounders);
    };
    const handleAdField = () => {
        setFields([...fields, { companyName: "", round: "", amount: "" }]);
    };

    const handleFieldChange = (e, index) => {
        const { name, value } = e.target;
        const newFields = [...fields];
        newFields[index][name] = value;
        setFields(newFields);
    };
    const desctiptionChangeListener = (event) => {
        setDescription(event.target.value);
    }

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
    const teamcountChangeListener = (event) => {
        setTeamcount(event.target.value);
    }

    const valuationChangeListener = (event) => {
        setValuation(event.target.value);
    }
    const startYearChangeListner = (event) => {
        setStartyear(event.target.value);
    }
    const fundingChangeListener = (event) => {
        setFundingrequired(event.target.value);

    }

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    };






    const handleNextStep = (e) => {
        e.preventDefault();
        setActiveStep(prevStep => prevStep + 1);
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setActiveStep(prevStep => prevStep - 1);
    };
    const isFormValid = () => {
        // Check if all required fields are filled
        if (!country || !state || !name || !email || !mobile || !address || !link) {
            return false;
        }

        // Check if at least one field is filled in the fields array
        if (fields.length === 0 || fields.every((field) => !field.companyName)) {
            return false;
        }

        // Check if at least one founder is added
        if (founders.length == 0 || founders.every((founder) => !founder.name)) {
            return false;
        }
        if (companyFields.length == 0 || companyFields.every((companyField) => !companyField.year)) {
            return false;
        }
        // Check if valuation, teamcount, startyear, domain, and fundingrequired are filled (optional)
        // ...

        return true;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            country,
            state,
            name,
            email,
            mobile,
            address,
            link,
            fields,
            founders,
            valuation,
            teamcount,
            startyear,
            domain,
            fundingrequired,
            companyFields,
            description

        };
        console.log(formData);
        if (!isFormValid()) {
            swal({
                title: "Error !!",
                text: 'Please fill all mandatory fields',
                icon: 'error',
            })
            return;
        }

        try {
            const response = await axios.put('https://raj-spring.kaushalkr.com/startups', formData);

            console.log(response);
            swal({
                title: 'Success!',
                text: 'pdated Successfully',
                icon: 'success',
            }).then(() => {
                navigate('/startup/landingPage');// Redirect to the investor registration page
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
    const [startup, setStartup] = useState(null);
    const [loading, setLoading] = useState(true);

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

                const response = await axios.get('https://raj-spring.kaushalkr.com/startups/getbyemail', {
                    params: {
                        email: localStorage.getItem("email"),
                        // email: "raj@sjsu.edu"
                    },
                });
                setStartup(response.data);
                console.log(startup);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log(startup);


    useEffect(() => {
        if (startup) {
            setCountry(startup.country);
            setState(startup.state);
            setFields(startup.fields);
            setDescription(startup.description);
            setAddress(startup.address);
            setEmail(startup.email);
            setMobile(startup.mobile);
            setName(startup.name);
            setLink(startup.link);
            setFounders(startup.founders);
            setCompanyFields(startup.companyFields);
            setTeamcount(startup.teamcount);
            setValuation(startup.valuation);
            setFundingrequired(startup.fundingrequired);
            setDomain(startup.domain);
            setStartyear(startup.startyear);




        }
    }, [startup]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!startup) {
        return <div>Error fetching startup data</div>;
    }
    return (
        <div className="formbold-main-wrapper">

            <div className="formbold-form-wrapper">
                <form >
                    <div className="formbold-steps">
                        <ul>
                            <li className={`formbold-step-menu1 ${activeStep === 1 && 'active'}`}>
                                <span>1</span>
                                Company Information
                            </li>
                            <li className={`formbold-step-menu2 ${activeStep === 2 && 'active'}`}>
                                <span>2</span>
                                Previous Invesments
                            </li>
                            <li className={`formbold-step-menu3 ${activeStep === 3 && 'active'}`}>
                                <span>3</span>
                                Company Insights
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
                                    required={true}
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
                                    value={email}
                                    style={{ backgroundColor: '#ddd', color: '#666' }}

                                />
                            </div>


                        </div>

                        {founders.map((founder, index) => (
                            <div className="formbold-input-flex" key={index}>
                                <div>
                                    <label htmlFor={`founderName-${index}`} className="formbold-form-label">
                                        Founder's Name<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id={`founderName-${index}`}
                                        placeholder="Abc"
                                        className="formbold-form-input"
                                        value={founder.name}
                                        onChange={(event) => handleFounderChange(event, index)}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`linkedin-${index}`} className="formbold-form-label">
                                        LinkedIn/Profile URL<span style={{ color: 'red' }}>*</span>
                                    </label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        id={`linkedin-${index}`}
                                        placeholder="https://www.linkedin.com/in/abc"
                                        className="formbold-form-input"
                                        value={founder.linkedin}
                                        onChange={(event) => handleFounderChange(event, index)}
                                        required={true}
                                    />
                                </div>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddFounder}>
                            +
                        </button>






                        <div className="formbold-input-flex">
                            <div>
                                <label htmlFor="companyURL" className="formbold-form-label"> Company URL<span style={{ color: 'red' }}>*</span> </label>
                                <input
                                    type="url"
                                    name="companyURL"
                                    placeholder="https://www.example.com"
                                    id="companyURL"
                                    className="formbold-form-input"
                                    onChange={linkChangeListner}
                                    required={true}
                                    value={link}
                                />
                            </div>
                            <div>
                                <label htmlFor="startyear" className="formbold-form-label"> Start Year<span style={{ color: 'red' }}>*</span> </label>
                                <select name="startYear" id="startYear" className="formbold-form-input" onChange={startYearChangeListner} >
                                    <option value={startyear}>Select Start Year</option>
                                    {[...Array(24)].map((_, i) => (
                                        <option key={i} value={2000 + i}>
                                            {2000 + i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>



                        <div className="formbold-input-flex">
                            <div>
                                <label for="teamcount" className="formbold-form-label"> Team Count<span style={{ color: 'red' }}>*</span> </label>
                                <input
                                    type="number"
                                    name="teamcount"
                                    id="teamcount"
                                    placeholder="0"
                                    className="formbold-form-input"
                                    onChange={teamcountChangeListener}
                                    value={teamcount}

                                />
                            </div>

                            <div>
                                <label for="valuation" className="formbold-form-label"> Estimated Valuation </label>
                                <input
                                    type="number"
                                    name="valuation"
                                    id="valuation"
                                    placeholder="0"
                                    className="formbold-form-input"
                                    onChange={valuationChangeListener}
                                    value={valuation}

                                />
                            </div>

                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <label for="domain" className="formbold-form-label"> Company Domain<span style={{ color: 'red' }}>*</span></label>
                                <select
                                    name="domain"
                                    id="domain"
                                    className="formbold-form-input"
                                    value={domain}
                                    onChange={handleDomainChange}
                                >
                                    {domainOptions.map((option) => (
                                        <option key={option.id} value={option.domain}>
                                            {option.domain}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label for="fundingrequired" className="formbold-form-label"> Funding Required </label>
                                <input
                                    type="number"
                                    name="fundingrequired"
                                    id="fundingrequired"
                                    placeholder="0"
                                    className="formbold-form-input"
                                    onChange={fundingChangeListener}
                                    value={fundingrequired}

                                />
                            </div>
                        </div>
                        {/* <label for="Name" className="formbold-form-label"> Company Location </label> */}
                        <div className="formbold-input-flex">
                            <div>
                                <label for="Name" className="formbold-form-label"> Country<span style={{ color: 'red' }}>*</span> </label>
                                <CountryDropdown
                                    className="formbold-form-input"
                                    value={country}
                                    onChange={(val) => setCountry(val)}
                                />

                            </div>

                            <div>
                                <label for="Name" className="formbold-form-label"> State<span style={{ color: 'red' }}>*</span> </label>
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
                                <label for="address" className="formbold-form-label"> Address<span style={{ color: 'red' }}>*</span> </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Flat 4, 24 Castle Street, Perth, PH1 3JY"
                                    className="formbold-form-input"
                                    onChange={addressChangeListener}
                                    value={address}

                                />
                            </div>
                            <div>
                                <label for="contact-number" className="formbold-form-label"> Contact Number<span style={{ color: 'red' }}>*</span> </label>
                                <input
                                    type="tel"
                                    name="contact-number"
                                    id="contact-number"
                                    placeholder="123-456-7890"
                                    className="formbold-form-input"
                                    onChange={mobileChangeListener}
                                    value={mobile}
                                />

                            </div>

                        </div>

                        <div>

                            <div>
                                <label for="message" className="formbold-form-label"> Company Description </label>
                                <textarea
                                    rows="6"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="formbold-form-input"
                                    onChange={desctiptionChangeListener}
                                    value={description}
                                ></textarea>
                            </div>

                        </div>
                    </div>

                    <div className={`formbold-form-step-2   ${activeStep === 2 && 'active'}`} >
                        <div>
                            {fields.map((field, index) => (
                                <div className="formbold-input-flex" key={index}>
                                    <div>
                                        <label htmlFor={`companyName-${index}`} className="formbold-form-label">
                                            Investor Name
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
                                        <label htmlFor={`round-${index}`} className="formbold-form-label">
                                            Funding Round
                                        </label>
                                        <input
                                            type="number"
                                            name="round"
                                            id={`round-${index}`}
                                            placeholder="1"
                                            className="formbold-form-input"
                                            style={{ width: "70%", fontSize: "14px", marginLeft: "10px" }}
                                            value={field.round}
                                            onChange={(e) => handleFieldChange(e, index)}
                                        />

                                    </div>
                                    <div>
                                        <label htmlFor={`amount-${index}`} className="formbold-form-label">
                                            Investment Amount(USD)
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
                        <div>
                            {companyFields.map((companyFields, index) => (
                                <div className="formbold-input-flex" key={index}>
                                    <div>
                                        <label htmlFor={`year-${index}`} className="formbold-form-label">
                                            Year
                                        </label>
                                        <select
                                            name="year"
                                            id={`year-${index}`}
                                            className="formbold-form-input"
                                            value={companyFields.year}
                                            onChange={(e) => handlecompanyFieldChange(e, index)}
                                        >
                                            <option value="">Select Year</option>
                                            {[...Array(24)].map((_, i) => (
                                                <option key={i} value={2000 + i}>
                                                    {2000 + i}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor={`sales-${index}`} className="formbold-form-label">
                                            Revenue
                                        </label>
                                        <input
                                            type="number"
                                            name="sales"
                                            id={`sales-${index}`}
                                            placeholder="10000"
                                            className="formbold-form-input"
                                            style={{ width: "70%", fontSize: "14px", marginLeft: "10px" }}
                                            value={companyFields.sales}
                                            onChange={(e) => handlecompanyFieldChange(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`profitLoss-${index}`} className="formbold-form-label">
                                            Profit/Loss
                                        </label>
                                        <input
                                            type="number"
                                            name="profitLoss"
                                            id={`profitLoss-${index}`}
                                            placeholder="10000"
                                            className="formbold-form-input"
                                            style={{ width: "70%", fontSize: "14px", marginLeft: "10px" }}
                                            value={companyFields.profitLoss}
                                            onChange={(e) => handlecompanyFieldChange(e, index)}
                                        />
                                    </div>
                                </div>
                            ))}
                            <button type="button" onClick={handleAddcompanyFields}>+</button>
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
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div >
        </div >


    );
};
export default StartupProfile;