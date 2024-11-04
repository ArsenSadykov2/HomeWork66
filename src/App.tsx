import "./App.css";
// import {Route, Routes} from "react-router-dom";
import { useState } from 'react';
import { IFood } from './types';
import Header from './components/Header/Header.tsx';
import Home from './containers/Home/Home.tsx';
import NewDish from './containers/NewDish/NewDish.tsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [foods, setFoods] = useState<IFood[]>([
    { id: "1", name: "Breakfast", description: "Eggs, toast", calories: 600 },
    { id: "2", name: "Snack", description: "2 apples", calories: 100 },
    { id: "3", name: "Lunch", description: "Soup, salad", calories: 300 },
  ]);

  const addNewFood = (newFood: IFood) => {
    setFoods((prevState) => [newFood, ...prevState]);
  };


  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home foods={foods} />}></Route>
            <Route path="/newDish" element={<NewDish addNewFood={addNewFood}/>}></Route>
            <Route path="*" element={<h1>Not Found</h1>}/>
          </Routes>
        </div>
      </main>

    </>
  );
};

export default App;
