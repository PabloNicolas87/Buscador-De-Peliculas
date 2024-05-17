import PropTypes from 'prop-types';
import DefaultImage from '/NoImage.png';
import { Link } from 'react-router-dom';

const ItemMovie = ({ id, title, type, year, poster }) => {
    const image = poster === "N/A" ? DefaultImage : poster;

    return (
        <Link to = {`/movies/${id}`} style={{ textDecoration: "inherit", color: "inherit"}}>
            <article>
                <div className="item-movie" style= {{ backgroundImage: `url(${image})`}}>
                    <div className="info">
                        <h4>{ title }</h4>
                        <p className="row-info"><span>{ type }</span><span>{ year }</span></p>
                    </div>
                </div>
            </article>
        </Link>
    );
};

ItemMovie.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default ItemMovie;
