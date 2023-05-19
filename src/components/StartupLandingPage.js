import React, { useEffect, useState, useRef, useMemo } from "react";

import Header from "./Header";
import StartupCard from "./StartupCard";
import axios from 'axios';
import TinderCard from 'react-tinder-card'

export const StartupLandingPage = () => {
    const [investordata, setInvestorData] = useState([]);
    const [search, setSearch] = useState("");
    const [filterinvestordata, setFilterInvestorData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/investors")
            .then((response) => {
                setInvestorData(response.data);


            })
            .catch((error) => {
                console.error("Error fetching startup data: ", error);
            });
    }, []);
    useEffect(() => {
        if (search.length > 2) {
            let arr = investordata.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.country.toLowerCase().includes(search.toLowerCase()) ||
                    item.state.toLowerCase().includes(search.toLowerCase())
                    ;
            });

            setFilterInvestorData(arr);
        } else {
            setFilterInvestorData(investordata);
        }



    }, [search, investordata])
    console.log(filterinvestordata);

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const handleNextClick = () => {
        setSelectedItemIndex((prevIndex) => (prevIndex + 1) % filterinvestordata.length);
    };

    const handlePrevClick = () => {
        setSelectedItemIndex((prevIndex) =>
            prevIndex === 0 ? filterinvestordata.length - 1 : prevIndex - 1
        );
    };
    return (<div>
        <Header setSearch={setSearch} />


        <TinderCard >
            <StartupCard data={filterinvestordata[selectedItemIndex]} />
        </TinderCard>


        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={handlePrevClick} style={{ width: '200px' }}>Previous</button>
            <button onClick={handleNextClick} style={{ width: '200px' }}>Next</button>
        </div>
    </div>);

}
export default StartupLandingPage;