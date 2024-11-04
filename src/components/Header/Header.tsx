
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <nav className="navbar bd-primary p-2 bg-primary text-white">
        <div className="container-fluid row p-2">
          <span className="col-4 fs-2">Total calories:</span>
          <li className="col-4 ">
            <NavLink to="newDish" className="btn btn-dark col-2 w-25">Add new Meal</NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Header;
