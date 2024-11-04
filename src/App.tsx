import "./App.css";
// import {Route, Routes} from "react-router-dom";
import { useState } from 'react';
import { IFood } from './types';
import Header from './components/Header/Header.tsx';
import Home from './containers/Home/Home.tsx';
import NewDish from './containers/NewDish/NewDish.tsx';

const App = () => {
  const [location, setLocation] = useState('home');
  const [foods, setFoods] = useState<IFood[]>([
    { id: "1", name: "Breakfast", description: "Eggs, toast", calories: 600 },
    { id: "2", name: "Snack", description: "2 apples", calories: 100 },
    { id: "3", name: "Lunch", description: "Soup, salad", calories: 300 },
  ]);

  const addNewFood = (newFood: IFood) => {
    setFoods((prevState) => [newFood, ...prevState]);
  };



  const changeLocation = (page: string) => setLocation(page);


  let content = null;

  if(location === "home"){
    content = (
      <Home foods={foods} />
    );
  } else if(location === "newDish"){
    content = (
      <NewDish addNewFood={addNewFood}/>
    )
  }
  return (
    <>
      <header>
        <Header changeLocation={changeLocation}/>
      </header>
      <main>
        <div className="container">
          {content}
        </div>
      </main>

    </>
  );
};

export default App;
