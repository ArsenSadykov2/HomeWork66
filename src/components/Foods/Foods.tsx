import * as React from "react";
import { IFood } from "../../types";
import FoodItems from "./FoodItems.tsx";

interface Props {
  foods: IFood[];
}
const Foods: React.FC<Props> = ({ foods }) => {
  return (
    foods && (
      <>
        {foods.map((food) => (
          <FoodItems key={food.id} food={food} />
        ))}
      </>
    )
  );
};

export default Foods;
