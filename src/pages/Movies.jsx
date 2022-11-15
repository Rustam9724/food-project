import { useParams, useLocation } from 'react-router-dom';

function Movie() {
    const {title} = useParams();
    // const value1 = useNavigate();
    // const value1 = useMatch();
    const value2 = useLocation();
    // console.log(value1);
    console.log(value2);

    return <h1>Some movie {title}</h1>
}

export { Movie };