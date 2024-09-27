"use client";
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

const ReservationDetails = () => {
  const [seats, setSeats] = useState(6);

  const handleSeatsChange = (event, newValue) => {
    setSeats(newValue);
  };

  return (
    <section>
      <div className="bg-[#FAFAFA] p-4 rounded-2xl">
        <h3 className="font-semibold text-[#848484] mb-3">
          Select number of seats
        </h3>
        <div className="flex items-center flex-col">
          <div className="flex justify-between w-full font-semibold text-[#848484]">
            <span className="mr-2">1</span>
            <span className="ml-2">12</span>
          </div>

          <Box sx={{ width: '100%', mt: 1 }}>
            <Slider
              value={seats}
              onChange={handleSeatsChange}
              step={1}
              min={1}
              max={12}
              valueLabelDisplay="auto"
              sx={{
                color: '#227B82',
                height: 10,
                '& .MuiSlider-thumb': {
                  color: '#FFFFFF',
                  height: 20,
                  width: 20,
                  '&:before': {
                    boxShadow: 'none',
                  },
                },
                '& .MuiSlider-rail': {
                  color: '#D3D3D3',
                  opacity: 1,
                  height: 10,
                },
                '& .MuiSlider-track': {
                  height: 10,
                },
              }}
            />
          </Box>
        </div>
      </div>


      <div>
        
      </div>

    </section>
  );
};

export default ReservationDetails;
