import { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import './App.css';

function App() {
  const [foodsData] = useState(foodsJson);
  console.log(foodsData);
  return (
    <div className='App'>
      <h1>LAB | React IronNutrition</h1>
      {foodsData.map(food => {
        return <FoodBox key={food.id} food={food} />;
      })}
    </div>
  );
}

export default App;
