"use client";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, MapPinIcon, Search, SearchIcon, UsersIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function Hero() {
  const [date, setDate] = useState("");
  return (
    <div className="bg-light-blue py-8 md:py-16 px-4 md:px-6 rounded-3xl mx-2 md:mx-6 my-4 md:my-8 relative overflow-hidden">
      <video
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />

      <div className="relative z-10 ">
        <div className="flex flex-col items-center justify-center my-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 ">
            Explorez le monde entier
            <br />
            et profitez de sa beauté
          </h1>
          <p className="text-white mb-8 md:text-xl hidden md:block">
            Trouvez et profiter de vos expériences à travers le monde ✈️
          </p>
        </div>

        <div className="bg-white p-2  md:p-4 rounded-xl flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 max-w-full">
          <div className="flex items-center flex-1 min-w-[200px]">
            <MapPinIcon className="text-[#14b8a6] mr-2" />
            <Input
              placeholder="Où souhaiterez-vous aller?"
              className="border-none"
            />
          </div>
          <div className="flex items-center flex-1 min-w-[200px]">
            <CalendarIcon className="text-[#14b8a6] mr-2" />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className={cn(
                    "w-full justify-start   text-left font-normal",
                    !date && "text-white"
                  )}
                >
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "dd MMM yyyy", { locale: fr })} -{" "}
                        {format(date.to, "dd MMM yyyy", { locale: fr })}
                      </>
                    ) : (
                      format(date.from, "dd MMM yyyy", { locale: fr })
                    )
                  ) : (
                    <span className="text-gray-700">Quand?</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center flex-1 min-w-[200px]">
            <UsersIcon className="text-[#14b8a6] mr-2" />
            <Input
              placeholder="Combien de personnes?"
              className="border-none"
            />
          </div>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full md:w-full md:mt-2">
            <SearchIcon className="mr-2 h-6 w-6" />
            Rechercher les destinations les plus géniales
          </Button>
        </div>
      </div>
    </div>
  );
}
