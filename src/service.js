import axios from 'axios';

export default async function getSchedule (){
    return await axios.post('http://localhost:8080/getSchedule/2/4', {});
}