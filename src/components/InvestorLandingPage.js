import React, { useEffect, useState, useRef, useMemo } from "react";
import Card from "./Card";
import Header from "./Header";

import axios from 'axios';
import TinderCard from 'react-tinder-card'



export const InvestorLandingPage = () => {
    const [search, setSearch] = useState("");
    const [filterstartupdata, setFilterstartupdata] = useState([]);
    const [startupdata, setStartupdata] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/startups")
            .then((response) => {
                setStartupdata(response.data);


            })
            .catch((error) => {
                console.error("Error fetching startup data: ", error);
            });
    }, []);


    useEffect(() => {
        if (search.length > 2) {
            let arr = startupdata.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.domain.toLowerCase().includes(search.toLowerCase()) ||
                    item.country.toLowerCase().includes(search.toLowerCase()) ||
                    item.state.toLowerCase().includes(search.toLowerCase())
                    ;
            });

            setFilterstartupdata(arr);
        } else {
            setFilterstartupdata(startupdata);
        }



    }, [search, startupdata])
    console.log(filterstartupdata);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const handleNextClick = () => {
        setSelectedItemIndex((prevIndex) => (prevIndex + 1) % filterstartupdata.length);
    };

    const handlePrevClick = () => {
        setSelectedItemIndex((prevIndex) =>
            prevIndex === 0 ? filterstartupdata.length - 1 : prevIndex - 1
        );
    };


    return (<div>
        <Header setSearch={setSearch} />
        {/* <Header /> */}

        <TinderCard >
            <Card data={filterstartupdata[selectedItemIndex]} />
        </TinderCard>


        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={handlePrevClick} style={{ width: '200px' }}>Previous</button>
            <button onClick={handleNextClick} style={{ width: '200px' }}>Next</button>
        </div>
    </div>);

}
export default InvestorLandingPage;