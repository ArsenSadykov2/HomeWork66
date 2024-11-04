import Header from "../../components/Header/Header.tsx";
import FoodForm from "../../components/FoodForm/FoodForm.tsx";
import Foods from "../../components/Foods/Foods.tsx";
import { useState } from "react";
import { IFood } from "../../types";

const Page = () => {
  const [foods, setFoods] = useState<IFood[]>([
    { id: "1", name: "Breakfast", description: "Eggs, toast", calories: 600 },
    { id: "2", name: "Snack", description: "2 apples", calories: 100 },
    { id: "3", name: "Lunch", description: "Soup, salad", calories: 300 },
  ]);

  const addNewFood = (newFood: IFood) => {
    setFoods((prevState) => [...prevState, newFood]);
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <div className="mb-2">
            <FoodForm addNewFood={addNewFood} />
          </div>
          <div className="mb-2">
            <Foods foods={foods} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
