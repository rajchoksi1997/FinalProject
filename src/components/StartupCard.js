import React, { PureComponent, useState } from 'react';
import './Card.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const StartupCard = ({ data }) => {

    console.log(data);
    const [index, setIndex] = useState(0);



    const CustomTooltip = ({ active, payload, label, data }) => {
        if (active && payload && payload.length) {
            console.log("payload", payload[0]);
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                    {/* <p className="intro">{getIntroOfPage(label)}</p> */}
                    <p className="desc">Domain: {payload[0].payload.domain}</p>

                </div>
            );

        }

        return null;
    };
    console.log(data);

    return (
        data == undefined || data == null ? (<div></div>) : (
            <div>

                <article class="cssui-usercard">
                    <div class="cssui-usercard__body">
                        <header class="cssui-usercard__header">

                            <div class="cssui-usercard__header-info">
                                <h3 class="cssui-usercard__name"> <span class="cssui-usercard__name-label">{data.name}</span></h3>
                                <span class="cssui-usercard__post"></span>
                            </div>
                        </header>
                        <div class="cssui-usercard__content">
                            <div class="cssui-slider">
                                <input id="slide1" type="radio" class="cssui-slider__switch cssui-usercard__switch" name="slider-controls" checked autofocus />
                                <label for="slide1" class="cssui-slider__control cssui-usercard__control"></label>
                                <input id="slide2" type="radio" class="cssui-slider__switch cssui-usercard__switch" name="slider-controls" />
                                <label for="slide2" class="cssui-slider__control cssui-usercard__control"></label>
                                <input id="slide3" type="radio" class="cssui-slider__switch cssui-usercard__switch" name="slider-controls" />
                                <label for="slide3" class="cssui-slider__control cssui-usercard__control"></label>


                                <div class="cssui-slider__slides">

                                    <div class="cssui-slider__slide">
                                        <h4 class="cssui-usercard__title">{data.state},{data.country} </h4>

                                        <div class="cssui-usercard__stats">
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-earth"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">E-mail</span>
                                                    <a href="#0" class="cssui-stats__value">{data.email}</a>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-location"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Phone</span>
                                                    <a href="tel:+19000000000" class="cssui-stats__value">{data.mobile}</a>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-calendar"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name"> Address</span>
                                                    <span class="cssui-stats__value">{data.address}</span>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-man-woman"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Company Link</span>
                                                    {/* <span class="cssui-stats__value">{data.link}</span> */}
                                                    <a href={data.link} className="cssui-stats__value">{data.link}</a>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* second */}

                                    <div class="cssui-slider__slide">
                                        <h4 class="cssui-usercard__title">Investment Profile</h4>
                                        <div class="cssui-usercard__stats">
                                            {/* <ResponsiveContainer width="100%" height="100%"> */}
                                            <BarChart
                                                width={400}
                                                height={300}
                                                data={data.fields}
                                                margin={{
                                                    top: 5,
                                                    right: 20,
                                                    left: 20,
                                                    bottom: 5,
                                                }}
                                            >

                                                <XAxis dataKey="companyName" />
                                                <YAxis />
                                                <Tooltip content={<CustomTooltip data={data.fields} />} />
                                                <Legend />
                                                <Bar dataKey="amount" barSize={20} fill="#8884d8" />
                                            </BarChart>
                                            {/* </ResponsiveContainer> */}

                                        </div>
                                    </div>
                                    {/* 
          third */}


                                    <div class="cssui-slider__slide">
                                        <h4 class="cssui-usercard__title">Preferred Domains</h4>
                                        <div class="cssui-usercard__stats_1" >

                                            <div className="cssui-stats cssui-usercard__stats-item">
                                                <i className="cssui-icon icon-domain"></i>
                                                <div className="cssui-stats__info cssui-usercard__stats-info">

                                                    <div className="cssui-stats__value">
                                                        {data.selectedDomains.map((domain) => (
                                                            <button key={domain.id}>{domain.domain}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div >
                        </div>
                    </div>

                    <footer class="cssui-usercard__footer">
                        <a href="#0" class="cssui-social cssui-usercard__social">
                            <i class="cssui-icon icon-twitter"></i>
                            <span class="cssui-social__name">twitter</span>
                        </a>
                        <a href="#0" class="cssui-social cssui-usercard__social">
                            <i class="cssui-icon icon-linkedin"></i>
                            <span class="cssui-social__name">linkedin</span>
                        </a>
                        <a href="#0" class="cssui-social cssui-usercard__social">
                            <i class="cssui-icon icon-codepen"></i>
                            <span class="cssui-social__name">codepen</span>
                        </a>
                    </footer>
                </article >

            </div>

        )

    );



};

export default StartupCard;