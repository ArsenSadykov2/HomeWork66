import * as React from 'react';

interface Props {
  changeLocation: (page: string) => void;
}
const Header: React.FC<Props> = ({changeLocation}) => {

  return (
    <div>
      <nav className="navbar bd-primary p-2 bg-primary text-white">
        <div className="container-fluid row ">
          <span className="col-4 fs-2">Total calories:</span>
          <a href="#" onClick={() => changeLocation('newDish')} className="btn btn-dark col-2 ">Add new Meal</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
