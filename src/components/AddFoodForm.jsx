/*import React from 'react';
import { Input } from 'antd';



  return (
    <div>
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <Input type="text" name="name" value={name} onChange={handleName} />
        </div>

        <div>
          <label htmlFor="image">image</label>
          <Input
            type="text"
            name="image"
            value={image}
            onChange={handleImage}
          />
        </div>

        <div>
          <label htmlFor="calories">calories</label>
          <Input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCalories}
          />
        </div>

        <div>
          <label htmlFor="servings">servings</label>
          <Input
            type="number"
            name="servings"
            checked={servings}
            onChange={handleServings}
          />
        </div>

        <div>
          <br />
          <button type="submit">Create Food</button>
        </div>
      </form>
    </div>
  );
}

export default FoodCard;
