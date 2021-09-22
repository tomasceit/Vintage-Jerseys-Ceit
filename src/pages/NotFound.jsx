import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="myContainer text-center">
            <h1 >La pagina solicitada no existe</h1>
            <Link to='/'><button className="btn btn-danger">Volvé a la Home</button></Link>
        </div>
    )
}

export default NotFound
