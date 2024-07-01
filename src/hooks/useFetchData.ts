import { useEffect, useState } from "react"
import { useAtom } from "jotai";
import { employeesAtom } from "../services/atoms";
import API from "../services/api";
import { AxiosResponse } from "axios";

const useFectchData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useAtom(employeesAtom);
    const [error, setError] = useState<any>(null);


    useEffect(() => {
        setIsLoading(true);
        API
        .getEmployee()
        .then((res: AxiosResponse) => {
            setData(res.data.employees);
            
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false))
    }, [setData])
   
    return {
        isLoading,
        data,
        error
    };
}

export default useFectchData;