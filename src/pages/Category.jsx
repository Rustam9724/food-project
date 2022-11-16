import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const [meals, setMeals] = useState([]);
    const { name } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals);
        })
    }, [name])

    return (
        <>
            <button onClick={() => navigate('/')} className="btn #9e9e9e grey">Go back</button>
            {!meals.length ? <Preloader /> :<MealList meals={meals}/>}
        </>
    )
}

export { Category };