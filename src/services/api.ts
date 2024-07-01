import axios, { AxiosResponse } from 'axios';

const API = {
    getEmployee: (): Promise<AxiosResponse<any, any>> => {
        return axios.get('api/employees');
    }
}

export default API;