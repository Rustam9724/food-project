import { Link } from 'react-router-dom';

function Meal(props) {
    const { strMeal, strMealThumb, idMeal } = props;

    return (
        <div className="list">
            <div className="card">
                <div className="card-image">
                    <img src={strMealThumb} alt={strMeal}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{strMeal}</span>
                </div>
                <div className="card-action">
                    <Link to={`/meal/${idMeal}`} className="btn #9e9e9e grey">
                        Watch recipe
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Meal };