import React from 'react';

import Dropdown from '@/Components/Dropdown';
import Banner from '@/Components/Banner';

import AboutBanner from '@/Assets/Img/AboutBanner.png';

import AboutList from "@/Assets/Api/about.json";


const About = () => {

    return (
        <section className="About">

            <Banner imgSrc={AboutBanner} content="" />

            <ul>
                {
                    AboutList.map((dropdown) =>
                        <Dropdown
                            key={dropdown.id}
                            title={dropdown.title}
                            content={dropdown.content}
                            liste={false}
                        />
                    )
                }
            </ul>
        </section>
    );
};

export default About;
