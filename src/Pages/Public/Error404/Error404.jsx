import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="Error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="Home">Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default Error404;