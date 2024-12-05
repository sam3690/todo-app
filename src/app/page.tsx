import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { Label } from "@/components/ui/label"

import { Terminal } from "lucide-react";
import TaskCard from "@/components/TaskCard";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between sm:max-w-[512px] md:max-w-[400px] max-w-[300px] p-14 pt-10 m-56 rounded-2xl bg-[#1D1825]">
    <div className="flex flex-row items-center justify-between ">
      <Input className="text-white placeholder:text-gray-600 mr-3 rounded-lg border-[#9E78CF]" placeholder="Add a new task." />
      <Button className="bg-[#9E78CF] p-3"><FaPlus style={{color: 'white', fontSize: '30px',}} /></Button>
    </div> 
    <br />
      <div className="flex flex-col items-start justify-start max-w-lg p-6">
          <Label htmlFor="label" className="justify-start text-white">Tasks to do - </Label>
          <TaskCard />
      </div>  
    </main>
  );
}
