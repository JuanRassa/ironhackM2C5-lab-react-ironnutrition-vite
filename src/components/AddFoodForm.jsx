import { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // console.log('<()> INFO: ', [name, image, calories, servings]);
  const handleUserInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'image':
        setImage(e.target.value);
        break;
      case 'calories':
        setCalories(Number(e.target.value));
        break;
      case 'servings':
        setServings(Number(e.target.value));
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const id = Math.random();
    const newFood = { id, name, image, calories, servings };
    addFood(newFood);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <Divider>Add Food Entry</Divider>
        <div className='inputWrapper'>
          <label htmlFor='name'>Name:</label>
          <Input type='text' name='name' id='name' value={name} onChange={handleUserInput} />
        </div>

        <div className='inputWrapper'>
          <label htmlFor=''>Image URL:</label>
          <Input type='text' name='image' id='image' value={image} onChange={handleUserInput} />
        </div>

        <div className='inputWrapper'>
          <label htmlFor='calories'>Calories:</label>
          <Input type='number' name='calories' id='calories' value={calories} onChange={handleUserInput} />
        </div>

        <div className='inputWrapper'>
          <label htmlFor='servings'>Servings:</label>
          <Input type='number' name='servings' id='servings' value={servings} onChange={handleUserInput} />
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
