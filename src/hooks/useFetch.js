import { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://www.omdbapi.com/?apikey=85a513b&s=';  // Corrected endpoint

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchMovie = (url) => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response === "True") {
                    setData(respuestaJson);
                    setError(false);
                } else {
                    setError(true);
                    setData(null);
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(true);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);
    }, [params]);

    return { isLoading, error, data };
};
