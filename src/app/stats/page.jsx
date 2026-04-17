"use client";

import { Square, SquareActivity } from "lucide-react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 400, fill: "#0088Fg" },
    { name: "Group B", value: 300, fill: "#00C45F" },
    { name: "Group C", value: 300, fill: "#FFBB11" },

];

export default function PieChartWithPaddingAngle() {
    return (
        <div className="bg-gray-100 p-15 ">
            <h2 className="lg:text-4xl text-2xl font-bold mb-6">Friendship Analytics</h2>


            <div className="bg-base-200 container mx-auto w-[60%] p-8  rounded-2xl ">

                <h3 className="font-bold">By Interaction Type</h3>
                <div style={{ width: "100%", maxWidth: 400, height: 300 }} className="items-center mx-auto justify-center ">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                innerRadius="60%"
                                outerRadius="80%"
                                paddingAngle={5}
                                cornerRadius={10}
                            />
                        </PieChart>

                    </ResponsiveContainer>



                    <div className="flex gap-7 text-center mx-auto ">
                        <div className="flex items-center gap-1">
                            <span className="bg-black w-2 h-2 rounded-full"> </span>
                            <small>Call</small>
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="bg-green-400 w-2 h-2 rounded-full"> </span>
                             <small className="text-green-400">Text</small>
                        </div>
                       
                       <div className="flex items-center gap-1">
                            <span className="bg-yellow-500 w-2 h-2 rounded-full"> </span>
                              <small className="text-yellow-500">  Video</small>
                        </div>
                       
                     
                    </div>
                </div>
            </div>
        </div>
    );
}