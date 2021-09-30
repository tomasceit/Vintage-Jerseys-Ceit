import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="myContainer text-center">
            <h2>ERROR 404</h2>
            <h2>La página solicitada no existe</h2>
            <Link to='/'><button className="btn btn-danger mt-3">Volvé a la Home</button></Link>
        </div>
    )
}

export default NotFound
