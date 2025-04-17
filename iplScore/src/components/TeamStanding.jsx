import { useState, useEffect } from "react"
import { getPointsTable } from "../services/api"
import { LoadingSpinner } from "./ui/Loader"
export default function TeamStanding() {

    const [pointsTable, setpointsTable] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fetchPointsTable = async () => {
            try {
                const data = await getPointsTable();
                setpointsTable(data)
            } catch (error) {
                console.error("API ERROR:", error.response?.data || error.message || error);
                throw error;
            } finally {
                setloading(false)
            }
        }
        fetchPointsTable();
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner size="lg" />
            </div>
        );
    }

    if (error) {
        return (<div className="text-center text-red-600">{error}</div>)
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl text-bold mb-6">Points Table</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">Team</th>
                            <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">P</th>
                            <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">W</th>
                            <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">L</th>
                            <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">Points</th>
                            <th className="px-4 py-3 text-center text-sm text-semibold text-gray-600">NRR</th>
                        </tr>
                    </thead>


                    <tbody className="divide-y divide-gray-100">
                        {pointsTable.map((item,index)=>(
                            <tr key={index} className={`${index % 2=== 0 ? 'bg-white': 'bg-gray-100'} hover:bg-gray-300 transition-color`}>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-3 justify-center">
                                        <img src={item.flag} alt={item.team} className="w-8 h-8 rounded-full object-contain" />
                                        <span className="text-gray-700">{item.team}</span>
                                    </div>
                                </td>


                                <td className="px-4 py-3 text-center text-gray-600">{item.played}</td>
                                <td className="px-4 py-3 text-center text-gray-600">{item.won}</td>
                                <td className="px-4 py-3 text-center text-gray-600">{item.loss}</td>
                                <td className="px-4 py-3 text-center text-gray-600">{item.points}</td>
                                <td className="px-4 py-3 text-center text-gray-600">{item.nrr}</td>
                            </tr>
                            
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    )

}

