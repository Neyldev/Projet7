
import React from 'react';
// import Components
import Banner from '@/Components/Banner';
import Card from '@/Components/Card';

// import img en local
import HomeBanner from '@/Assets/Img/HomeBanner.png'; ''

// Importation du fichier JSON
import data from '@/Assets/Api/Logement.json';; // Chemin du fichier JSON

const Home = () => {
    return (
        <div>
            <Banner imgSrc={HomeBanner} content="Chez vous, partout et ailleurs" />

            <section className='CardList'>
                {data.map(item => (
                    <Card
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </section>
        </div>
    );
};

export default Home;
