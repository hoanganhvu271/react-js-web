import { useState, useEffect } from "react"
import axios from "axios";
const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        try {
            async function fetchData() {
                let res = await axios.get(url)
                let data = (res && res.data) ? res.data : []
                // console.log(data)
                // if (true) {

                // }
                setData(data)
                setIsLoading(false)
                setIsError(true)

            }

            fetchData();
        }
        catch (e) {
            setIsLoading(false)
            setIsError(true)
        }
    }, [data])
    // console.log('checkData:', data, isLoading, isError);
    return (
        { data, isLoading, isError }
    )
}

export default useFetch