import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL;
const HEADERS = {
  'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  'x-rapidapi-host': import.meta.env.VITE_API_HOST
};


export const getPointsTable = async () => {
    const options = {
        method: "GET",
        url: `${API_URL}/series/336/pointsTable`,
        headers: HEADERS
    }

    try {
        const response = await axios.request(options);
        console.log("data", response.data);
        return response.data.data.A.map(team => ({
            team: team.teams,
            played: team.P,
            won: team.W,
            loss: team.L,
            points: team.Pts,
            nrr: team.NRR,
            flag: team.flag
        }))

    } catch (error) {
        console.error("There was an error");
        throw error;

    }
}