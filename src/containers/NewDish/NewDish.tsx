import FoodForm from '../../components/FoodForm/FoodForm.tsx';
import { IFood } from '../../types';
import * as React from 'react';

interface Props {
  addNewFood: (newFood: IFood) => void;
}

const NewDish: React.FC<Props> = ({addNewFood}) => {
  return (
    <>
      <div className="mb-2">
        <FoodForm addNewFood={addNewFood}/>
      </div>
    </>
  );
};

export default NewDish;