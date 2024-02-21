import {categories} from '../photodata.js';
import { Link } from "react-router-dom";

const Categories = () => {
    return(
        <div className="container-fluid mt-md-5 pt-5" id="categories">
            <h2 className="text-center arizona-text my-5 py-md-5">Browse by category</h2>
            <ul className="row list-unstyled mb-0">
            {categories.map(category => {
                return (
                <li className="col-sm-4 p-lg-5 m-0 flex-col-c category-shadow" key={category.name.toLowerCase()} style={{backgroundImage: `url(` + require(`../../assets/` + category.src) + `)` }}>
                    <Link to={'/category/' + category.name.toLowerCase() + "#" } className="text-dark link-underline-opacity-0 text-decoration-none">
                    <h3 className="text-light arizona-text m-5 p-lg-5 text-center">{category.name}</h3>
                    </Link>
                </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Categories;