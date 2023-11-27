import { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [showFoodList, setShowFoodList] = useState(foodsData);
  console.log(foodsData);

  const deleteFood = foodId => {
    const filteredFoods = foodsData.filter(food => food.id !== foodId);
    setShowFoodList(filteredFoods);
  };

  const addFood = newFood => {
    setFoodsData(prevState => [newFood, ...prevState]);
    setShowFoodList(prevState => [newFood, ...prevState]);
  };

  return (
    <div className='App'>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      {showFoodList.map(food => {
        return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
