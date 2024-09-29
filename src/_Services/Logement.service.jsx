import listelogement from '@/Assets/Api/Logement.json';

const GetAllLogement = () => {
    return listelogement;
}


const GetOneLogement = async (id) => {
    const onelogement = await listelogement.find(logement => logement.id === id);
    return onelogement;
}

export const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService