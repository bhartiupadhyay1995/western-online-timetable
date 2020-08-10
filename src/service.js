import axios from 'axios';

export default async function getSchedule (req){
    return await axios.post('http://localhost:8080/timetable/getSchedule/1', req);
}