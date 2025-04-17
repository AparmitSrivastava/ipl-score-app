"use client"
import {motion} from "framer-motion"
import  {Users,Trophy,Calendar,TrendingUp} from "lucide-react"


export default function Statssection(){
    const stats = [
        {icon:Users , title:"Total Matches" , value:"74"},
        {icon:Trophy , title:"Team" , value:"10"},
        {icon:Calendar , title:"Tournament Duration" , value:"51"},
        {icon:TrendingUp , title:"Highest" , value:"246/7"},
    ]
    return (
        <div className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}>    
                    IPL 2025 Stats and Highlights
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item,index)=>(
                        <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                        initial={{opacity:0 , y:20}}
                        animate={{opacity:1 , y:20}}
                        transition={{delay:index*0.1 , duration:0.5}}>
                            IPL 2025 Stats and Highlights
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )

}