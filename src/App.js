import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import SearchBar from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  function handleSearch(event) {
    let filteredFood = foodList.filter((element) => {
      return element.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFoodList(filteredFood);
  }

  const handleDeleteFood = (name) => {
    const deletedFood = foodList.filter((item) => {
      return item.name !== name;
    });
    setFoodList(deletedFood);
  };

  return (
    <div className="header">
      <header>Food List</header>
      <SearchBar handleSearch={handleSearch} />
      <div className="App">
        <>
          {foodList.map((food) => {
            return (
              <>
                <FoodBox
                  food={{
                    name: food.name,
                    calories: food.calories,
                    image: food.image,
                    servings: food.servings,
                  }}
                  onDelete={handleDeleteFood}
                />
              </>
            );
          })}
        </>
      </div>
    </div>
  );
}

export default App;
