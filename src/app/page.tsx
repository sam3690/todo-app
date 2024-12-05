import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <div className="flex flex-row items-center justify-between min-w-[512px] p-14 pt-10 m-56 rounded-2xl bg-[#1D1825]">
      <Input className="text-white placeholder:text-gray-600 mr-3 rounded-lg border-[#9E78CF]" placeholder="Add a new task." />
      <Button className="bg-[#9E78CF] p-3"><FaPlus style={{color: 'white', fontSize: '30px',}} /></Button>
    </div>  
    </main>
  );
}
