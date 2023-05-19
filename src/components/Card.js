import React from 'react';
import './Card.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from "recharts";

export const Card = ({ data }) => {

    console.log(data);
    return (
        data === undefined || data === null ? (<div><span>No more Recommendations Found !! Please try Later</span></div>) : (
            <div>

                <article class="cssui-usercard">
                    <div class="cssui-usercard__body">
                        <header class="cssui-usercard__header">

                            <div class="cssui-usercard__header-info">
                                <h3 class="cssui-usercard__name"> <span class="cssui-usercard__name-label">{data ? data.name : ''}
                                </span></h3>
                                <span class="cssui-usercard__post">{data.domain}</span>
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
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Start Year</span>
                                                    <span class="cssui-stats__value">{data.startyear}</span>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-location"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Team Count</span>
                                                    <span class="cssui-stats__value">{data.teamcount}</span>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-calendar"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name"> Estimated Valuation</span>
                                                    <span class="cssui-stats__value">{data.valuation}$</span>
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

                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-calendar"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name"> Funding Required</span>
                                                    <span class="cssui-stats__value">{data.fundingrequired}$</span>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-man-woman"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Company Description</span>
                                                    {/* <span class="cssui-stats__value">{data.link}</span> */}
                                                    <a href={data.link} className="cssui-stats__value">{data.name} is a {data.domain} Company</a>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* second */}

                                    <div class="cssui-slider__slide">
                                        <h4 class="cssui-usercard__title">Funding and Revenue Profile</h4>
                                        <div class="cssui-usercard__stats">
                                            <BarChart
                                                width={300}
                                                height={150}
                                                data={data.fields}
                                                margin={{
                                                    top: 0,
                                                    right: 20,
                                                    left: 20,
                                                    bottom: 0
                                                }}
                                            >
                                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                                <XAxis dataKey="round" name="Funding Round" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar name="Funding raised" dataKey="amount" fill="#8884d8" />
                                                {/* <Bar dataKey="amount" fill="#82ca9d" /> */}
                                            </BarChart>
                                        </div>
                                        <div class="cssui-usercard__stats">
                                            <BarChart
                                                width={300}
                                                height={150}
                                                data={data.companyFields}
                                                margin={{
                                                    top: 5,
                                                    right: 20,
                                                    left: 20,
                                                    bottom: 0,
                                                }}
                                            >

                                                <XAxis dataKey="year" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <ReferenceLine y={0} stroke="#000" />
                                                <Bar name="Revenue" dataKey="sales" fill="#8884d8" />
                                                <Bar name="Profit/Loss" dataKey="profitLoss" fill="#82ca9d" />
                                            </BarChart>
                                        </div>
                                    </div>
                                    {/* 
          third */}


                                    <div class="cssui-slider__slide">
                                        <h4 class="cssui-usercard__title">Contact Details</h4>
                                        <div class="cssui-usercard__stats">
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-email"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">E-mail</span>
                                                    <a href="#0" class="cssui-stats__value">{data.email}</a>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <i class="cssui-icon icon-phone"></i>
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Phone</span>
                                                    <a href="tel:+19000000000" class="cssui-stats__value">{data.mobile}</a>
                                                </div>
                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">Founders</span>

                                                    <a href="tel:+19000000000" class="cssui-stats__value">{data.founders[0].name}</a>
                                                    <a href={data.founders[0].linkedin} class="cssui-stats__value">{data.founders[0].linkedin}</a>
                                                </div >

                                            </div>
                                            <div class="cssui-stats cssui-usercard__stats-item">
                                                <div class="cssui-stats__info cssui-usercard__stats-info">
                                                    <span class="cssui-stats__name cssui-usercard__stats-name">{data.founders.length > 1 ? "Co - Founder" : ""}</span>

                                                    <a href="" class="cssui-stats__value">{data.founders.length > 1 ? data.founders[1].name : ""}</a>
                                                    <a href={data.founders.length > 1 ? data.founders[1].linkedin : ""} class="cssui-stats__value">{data.founders.length > 1 ? data.founders[1].linkedin : ""}</a>
                                                </div >

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

export default Card;