import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useFetch = (url, dependencies) => {

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        // axios.create({
        //     responseType: 'json',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        //         "Access-Control-Allow-Origin": "*",
        //     }
        // })
        axios.get(url).then((res) => {
            setIsLoading(false);
            setResponse(res);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        });
    }, dependencies)

    return [isLoading, response, error];
}

function Example() {

    let url = 'https://api.douban.com/v2/movie/in_theaters';
    const [isLoading, response, error] = useFetch(url, []);

    return (
        <div>
            {isLoading ? <div>loading...</div> :
                (error ? <div> There is an error happened </div> : <div> Success, {response} </div>)}
        </div>
    )
}

export default Example;
