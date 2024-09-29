
import React from 'react';
// import Components
import Banner from '@/Components/Banner';
import Card from '@/Components/Card';

// import img en local
import HomeBanner from '@/Assets/Img/HomeBanner.png';

// Importation du fichier JSON
import LogementService from '@/_Services/Logement.service';

const Home = () => {
    return (
        <section>
            <Banner imgSrc={HomeBanner} content="Chez vous, partout et ailleurs" />

            <ul className='CardList'>
                {
                    LogementService.GetAllLogement().map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            cover={item.cover}
                        />
                    ))
                }
            </ul>
        </section>
    );
};

export default Home;
