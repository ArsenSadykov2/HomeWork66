import { IFood } from "../../types";
import * as React from "react";

interface Props {
  food: IFood;
}
const FoodItems: React.FC<Props> = ({ food }) => {
  return (
    <div className="card mb-3 row justify-content-between">
      <div className="col-4">
        <h4 className="card-title">{food.name}</h4>
        <p className="card-text">{food.description}</p>
        <p className="card-text">{food.calories} clrs</p>
      </div>
      <div className="col-4">
        <button>Редактировать</button>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default FoodItems;
