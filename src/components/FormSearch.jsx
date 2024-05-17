import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("");
    const { setQuery } = useContext(DataContext);

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(title);
    }

    return (
        <div className="form-search">
            <h2>Movie Finder</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Title Movie" onChange={ e => setTitle(e.target.value) }/>
                <input type="submit" value="Search" />
            </form>            
        </div>
    );
}

export default FormSearch;