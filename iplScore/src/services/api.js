import axios from "axios"
const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = [
    'x-rapidapi-key': '27162da661msh286a0eb5c63ec20p116f6ajsnb730fdcb1a20',
    'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
]

export default getPointsTable = async = () =>{ 
    const options = {
        method : "GET",
        url : `${API_URL}/series/336/pointsTable`,
        headers : HEADERS
    }

    try {
        const response = await axios.request(options);
        console.log("data" , response.data);
        return response.data.data.A.map(team=>({
            team:team.teams,
            played:team.p,
            won:team.W,
            lost:team.L,
            points:team.pts,
            nrr:team.NRR,
            flag:team.flag
        }))
        
    } catch (error) {
        console.error("There was an error");
        throw error;
        
    }
}