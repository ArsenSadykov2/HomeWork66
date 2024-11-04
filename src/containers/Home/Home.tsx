import { IFood } from '../../types';

interface Props {
  foods: IFood[];
}
import Foods from '../../components/Foods/Foods.tsx';
import * as React from 'react';

const Home: React.FC<Props> = ({foods}) => {
  return (
    <>
      <div className="mb-2">
        <Foods foods={foods}/>
      </div>
    </>
  );
};

export default Home;