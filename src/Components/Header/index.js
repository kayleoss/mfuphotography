import { Link } from "react-router-dom";

const Header = (props) => (
    <nav className={"navbar navbar-light " + props.fixedClass}>
        <div className="container-fluid">
        <Link className="navbar-brand arizona-text p-2" to="/">Molly Fu Photography</Link>
        <div className="d-flex">
            <a className="nav-link p-2" href="/#features">Featured</a>
            <a className="nav-link p-2" href="/#categories">Categories</a>
        </div>
        </div>
    </nav>
)

export default Header;