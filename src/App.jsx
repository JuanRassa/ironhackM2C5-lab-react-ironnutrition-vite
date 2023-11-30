import { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import './App.css';
import { Divider } from 'antd';

function App() {
  const [foodsData, setFoodsData] = useState(foodsJson);
  const [showFoodList, setShowFoodList] = useState(foodsData);

  const deleteFood = foodId => {
    setShowFoodList(prevState => prevState.filter(food => food.id !== foodId));
  };

  const addFood = newFood => {
    setShowFoodList(prevState => [newFood, ...prevState]);
    setFoodsData(prevState => [newFood, ...prevState]);
  };

  const filteredQuery = searchInput => {
    const filteredFoods = foodsData.filter(food => {
      return food.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setShowFoodList(filteredFoods);
  };

  return (
    <div className='App'>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addFood={addFood} />
      <SearchBar filteredQuery={filteredQuery}></SearchBar>
      <Divider>Food List</Divider>
      <div className='row' style={{ width: '100%', justifyContent: 'center' }}>
        {/* <Row style={{ width: '100%', justifyContent: 'center' }}> */}
        {showFoodList.map(food => {
          return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
        })}
        {/* </Row> */}
      </div>
    </div>
  );
}

export default App;
