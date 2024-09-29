// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// import LogementService from "@/_Services/Logement.service";
// import Tag from '@/Components/Tag';
// import Rating from '@/Components/Rating.Jsx';
// import Equipement from '@/Components/Equipement.Jsx';
// import Dropdown from '@/Components/Dropdown.Jsx';
// import Carrousel from '@/Components/Carrousel';




// const Logement = () => {

//     const [logement, setlogement] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     let { id } = useParams();
//     let navigate = useNavigate();

//     useEffect(() => {
//         getInfo();
//     }, [id])

//     const getInfo = async () => {
//         await LogementService.GetOneLogement(id)
//             .then((logement) => {
//                 if (logement) {
//                     setlogement(logement)
//                     setIsLoading(false)
//                 } else {
//                     navigate("/404")
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }


//     console.log(logement)



//     if (isLoading) return (<h3>Chargement...</h3>)

//     return (
//         <div className='Logement'>


//             <Carrousel images={logement.pictures} />

//             <div className='LogementTitleHost'>
//                 <div className='LogementTitle'>
//                     <h1>{logement.title}</h1>
//                     <p>{logement.location}</p>
//                 </div>

//                 <div className='LogementHost'>
//                     <p>{logement.host.name}</p>
//                     <img src={logement.host.picture} alt="Host name picture" />
//                 </div>
//             </div>

//             <div className='LogementTagRating'>
//                 <Tag tags={logement.tags} />
//                 <Rating rating={logement.rating} />
//             </div>

//             <ul className='détails'>
//                 <Dropdown
//                     title="Description"
//                     content={logement.description}
//                     liste={false}
//                 />
//                 <Dropdown
//                     title="Équipements"
//                     content={logement.equipments}
//                     liste={true}
//                 />


//             </ul>


//         </div>
//     );
// };

// export default Logement;





/////////////////////////////////////////////////////////////////////////////////


// Nom Prénom de L'host qui doit etre superposé

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LogementService from "@/_Services/Logement.service";
import Tag from '@/Components/Tag';
import Rating from '@/Components/Rating.Jsx';
import Equipement from '@/Components/Equipement.Jsx';
import Dropdown from '@/Components/Dropdown.Jsx';
import Carrousel from '@/Components/Carrousel';




const Logement = () => {

    const [logement, setlogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getInfo();

    }, [id])

    const getInfo = async () => {
        await LogementService.GetOneLogement(id)
            .then((logement) => {
                if (logement) {
                    setlogement(logement)
                    setIsLoading(false)
                    SplitName(logement);
                } else {
                    navigate("/404")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const SplitName = (logement) => {
        const nameArray = logement.host.name.split(' ');
        setfirstName(nameArray[0]);
        setlastName(nameArray[1]);
    }



    if (isLoading) return (<h3>Chargement...</h3>)

    return (
        <div className='Logement'>

            <Carrousel images={logement.pictures} />

            <div className='LogementInfo'>

                <div className='LogementTitle'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>

                <div className='LogementHost'>
                    <div className='boxhostname'>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                    </div>
                    <div className='boxhostimg'>
                        <img className='avatar' src={logement.host.picture} alt="Host name picture" />
                    </div>
                </div>

                <Tag tags={logement.tags} />
                <Rating rating={logement.rating} />

            </div>

            <ul className='détails'>
                <Dropdown
                    title="Description"
                    content={logement.description}
                    liste={false}
                />
                <Dropdown
                    title="Équipements"
                    content={logement.equipments}
                    liste={true}
                />


            </ul>


        </div>
    );
};

export default Logement;

