import axios from 'axios';

export default async function getSchedule (req){
    return await axios.post('http://localhost:8080/getSchedule/1', req);
}