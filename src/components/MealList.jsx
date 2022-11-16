import { Meal } from '../components/Meal';

function MealList({meals}) {
    return (
        <div className="list">
            {meals.map(meal => {
                return <Meal key={meal.idMeal} {...meal}/>
            })}
        </div>
    )
}

export { MealList };