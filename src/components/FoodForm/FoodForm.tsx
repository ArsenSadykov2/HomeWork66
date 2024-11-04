import { useState } from "react";
import { IFood, IFoodMutation } from "../../types";
import * as React from "react";

interface Props {
  addNewFood: (newFood: IFood) => void;
}

const FoodForm: React.FC<Props> = ({ addNewFood }) => {
  const [newFood, setNewFood] = useState<IFoodMutation>({
    name: "",
    description: "",
    calories: 0,
  });

  const changeFood = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setNewFood((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (
      newFood.name.trim().length === 0 &&
      newFood.description.trim().length === 0
    ) {
      alert("Заполните все поля");
    } else {
      addNewFood({
        id: String(new Date()),
        ...newFood,
        calories: Number(newFood.calories),
      });

      setNewFood({
        name: "",
        description: "",
        calories: 0,
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h3>Add Meal</h3>

      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          value={newFood.name}
          onChange={changeFood}
          id="name"
          name="name"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Description</label>
        <textarea
          value={newFood.description}
          onChange={changeFood}
          name="description"
          id="description"
          className="form-control"
          required
        ></textarea>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="calories">Calories</label>
        <input
          type="text"
          value={newFood.calories}
          onChange={changeFood}
          id="calories"
          name="calories"
          min={1}
          className="form-control"
          required
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default FoodForm;
