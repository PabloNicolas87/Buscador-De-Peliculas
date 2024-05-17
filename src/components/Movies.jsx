import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";
import FormSearch from "./FormSearch";

const Movies = () => {
    const { query, isLoading, data, error } = useContext(DataContext);

    return (
        <div className="movies-container">
            <FormSearch />
            <div className="movies-content">
                {!query && <p>Please enter a movie title to search.</p>}
                {query && isLoading && <div className="loading"></div>}
                {query && !isLoading && error && <p>La Película No Existe</p>}
                {query && !isLoading && !error && data && data.Search && data.Search.length > 0 && (
                    data.Search.map(item => (
                        <ItemMovie 
                            key={item.imdbID}
                            id={item.imdbID}
                            title={item.Title}
                            type={item.Type}
                            year={item.Year}
                            poster={item.Poster}
                        />
                    ))
                )}
                {query && !isLoading && !error && (!data || !data.Search || data.Search.length === 0) && <p>No movies found.</p>}
            </div>
        </div>
    );
}

export default Movies;
