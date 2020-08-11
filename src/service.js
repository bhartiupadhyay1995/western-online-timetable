import axios from 'axios';

export default async function getSchedule (req, pageNumber){
    if(!pageNumber) pageNumber = 1
    return await axios.post(`http://localhost:8080/timetable/getSchedule/${pageNumber}`, req);
}