

const Header = () => {
  return (
    <div>
      <nav className="navbar bd-primary p-2 bg-primary text-white">
        <div className="container-fluid row ">
          <span className="col-4 fs-2">Total calories:</span>
          <button className="btn btn-dark col-4 ">Add new Meal</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;