import axios from "axios";
import { useEffect, useState } from "react";



export default function useHttpData<T>(url: string){
    const [data, setData] = useState <T[]>([]);
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    
    setLoading(true);
    axios
    .get<{meals: T []}>(url, {signal})
    .then(({data}) => setData(data.meals))
    .finally(()=> setLoading(false))
    return () => controller.abort()
  }, []);
  return { loading, data}
}