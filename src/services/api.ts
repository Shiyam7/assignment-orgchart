import axios, { AxiosResponse } from 'axios';
import { Employee } from '../utils';

const API = {
    getEmployee: (): Promise<AxiosResponse<any, any>> => {
        return axios.get('api/employees');
    },
    updateManger: (employeeId: Number, newManager: Employee): Promise<AxiosResponse<any, any>> => {
        return axios.put(`api/employees/${employeeId}`, newManager);
    }
}

export default API;