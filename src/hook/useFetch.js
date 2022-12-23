import { useEffect, useState } from "react"
import axios from "axios"


export default function useFetch(url,body=null){

    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    // useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true);
                    var response;
                    if(body){
                         response = await axios.post(url,body);
                    }else{
                        response = await axios.get(url);
                    }
                    setData(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    // }, [url])

    return { data, error, loading }

}