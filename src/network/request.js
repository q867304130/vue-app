import axios from 'axios'

export function axiosTest(option){
    const axios1 = axios.create({
       baseURL:'http://123.207.32.32:8000' ,
       timeout:3000
    })

    return axios1(option)
}