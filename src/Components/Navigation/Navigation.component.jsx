


import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../Assets/crown.svg";
import { sections } from "../../Directorydata";
import './Navigation.style.scss';

export const Navigation = function () {
  return (
    <>
    <div className="navigation">

     <Link className='nav-logo-container' to='/' > <CrownLogo /> </Link>

    <div className="nav-links-container">

      {sections.map(({title, imageUrl, id, linkUrl}) =>
       <Link key={id} className="nav-link" to={`/${title}`}> {title} </Link>
      )}

     <Link className="nav-link" to='/shop' > Shop </Link>
     <Link className="nav-link"  to='/signin' > SignIn </Link>

     {/* <Link className="nav-link" to='/shop'> SHOP </Link>
     <Link className="nav-link" to='/shop'> HATS </Link>
     <Link className="nav-link" to='/shop'> JACKET </Link>
     <Link className="nav-link" to='/shop'> SNEAKERS </Link>
     <Link className="nav-link" to='/shop'> WOMEN </Link>
     <Link className="nav-link" to='/shop'> MEN </Link> */}

    </div>

    </div>

    <Outlet />
    </>
  );
};
