import { useState,useEffect } from "react"
import {getPointsTable} from "../services/api"
import {LoadingSpinner} from "./ui/Loader"
export default function TeamStanding(){

    const [pointsTable, setpointsTable] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
      const fetchPointsTable = async()=>{
        try {
            const data = await getPointsTable();
            setpointsTable(data)
        } catch (error) {
            seterror("Unable to load data")
        }finally{
            setloading(false)
        }
      }
      fetchPointsTable();
    }, [])

    if(loading){
        return(
        <div className="flext items-center justify-center min-h-screen">
            <LoadingSpinner size="lg"/>
        </div>
        );
    }

    if(error){
        return (<div className="text-center text-red-600">{error}</div>)
    }

    return ( 
    <div className="bg-white rounded-xl shadow-md p-6">

        <h3 className="text-2xl text-bold mb-6">Points Table</h3>

    </div>
    )

}

