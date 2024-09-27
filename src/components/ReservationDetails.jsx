"use client";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
];

const ReservationDetails = () => {
  const [seats, setSeats] = useState(6);
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [selectedTime, setSelectedTime] = useState(null);
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleSeatsChange = (event, newValue) => {
    setSeats(newValue);
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time === selectedTime ? null : time);
  };


  if (!isClient) {
    return null; 
  }

  return (
    <section className="h-[calc(100vh-140px)] overflow-hidden relative">
      <div className="h-full overflow-auto px-4 scrollbar-hidden">
        <div className="bg-[#FAFAFA] p-4 rounded-2xl">
          <h3 className="font-semibold text-[#848484] mb-3">
            Select number of seats
          </h3>
          <div className="flex items-center flex-col">
            <div className="flex justify-between w-full font-semibold text-[#848484]">
              <span className="mr-2">1</span>
              <span className="ml-2">12</span>
            </div>

            <Box sx={{ width: "100%", mt: 1 }}>
              <Slider
                value={seats}
                onChange={handleSeatsChange}
                step={1}
                min={1}
                max={12}
                valueLabelDisplay="auto"
                sx={{
                  color: "#227B82",
                  height: 10,
                  "& .MuiSlider-thumb": {
                    color: "#FFFFFF",
                    height: 20,
                    width: 20,
                    "&:before": {
                      boxShadow: "none",
                    },
                  },
                  "& .MuiSlider-rail": {
                    color: "#D3D3D3",
                    opacity: 1,
                    height: 10,
                  },
                  "& .MuiSlider-track": {
                    height: 10,
                  },
                }}
              />
            </Box>
          </div>
        </div>

        <div className="bg-[#FAFAFA] p-4 rounded-2xl mt-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: "100%" }}>
              <DateCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  width: "100%", 
                  borderRadius: "8px",
                  backgroundColor: "#FAFAFA",
                }}
                slotProps={{
                  day: {
                    sx: (day) => ({
                      "&.Mui-selected": {
                        backgroundColor: "#227B8212",  
                        color: "#227B82",              
                        "&:hover": {
                          backgroundColor: "#227B8212", 
                        },
                      },
                      "&.Mui-selected:focus": {
                        backgroundColor: "#227B8212", 
                        outline: "none",              
                      },
                      "&:focus": {
                        outline: "none",              
                      },
                    }),
                  },
                }}
              />
            </Box>
          </LocalizationProvider>
        </div>

        <div className="bg-[#FAFAFA] p-4 rounded-2xl mt-4 mb-24">
          <h3 className="font-semibold text-[#848484] mb-3">
            Select a Time Slot
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <div
                key={time}
                onClick={() => handleTimeSlotClick(time)}
                className={`flex flex-col items-center cursor-pointer  p-3 transition-colors duration-200 
                  ${
                    selectedTime === time
                      ? "bg-[#227B8212] text-[#227B82] rounded-xl"
                      : "bg-transparent text-[#848484]"
                  }
                `}
              >
                <span className="text-xl">{time.split(" ")[0]}</span>
                <span className="text-xs mt-2">{time.split(" ")[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="absolute bottom-4  left-0 right-0 mx-auto bg-[#227B82] text-white py-2 px-4 rounded-lg w-full">
        Confirm
      </button>

      {/* Hide scrollbar for Chrome, Safari and Opera */}
      <style jsx>{`
        .scrollbar-hidden {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default ReservationDetails;
