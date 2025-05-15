import { useEffect, useState } from 'react'
import axios from "axios";

export function useFetch(limit=5){
    const [data,setData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading,setLoading] = useState(false);
 
    const fetchData = async ()=>{
        setLoading(true);
       const res = await axios.get(`https://dummyjson.com/products?limit=5&skip=${skip}`)
        setData(prev =>[...prev, ...res.data.products])
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[skip])

    const loadMore = () =>{
        setSkip(prev => prev + 5);
    }

    return {data, loadMore,loading}
}