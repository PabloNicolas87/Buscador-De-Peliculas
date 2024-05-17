import { useState, createContext } from "react";
import { useFetch } from "../hooks/useFetch";
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [ query, setQuery ] = useState("superman");
    const { isLoading, error, data } = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value= {{ setQuery, isLoading, error, data }}>
            { children }
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};