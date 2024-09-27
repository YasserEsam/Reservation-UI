import React from "react";
import SectionTabs from "./SectionTabs";
import ReservationDetails from "./ReservationDetails";
import TableMap from "./TableMap";

const sectionsData = [
  { id: 1, section_name: "1" },
  { id: 2, section_name: "2" },
  { id: 3, section_name: "3" },
];

const ReservationSystem = () => {
  return (
    <main className="container mx-auto p-4 px-4 md:px-8 lg:px-20 grid grid-cols-12 gap-8">
      <section className="col-span-12 lg:col-span-8  bg-[#FAFAFA] p-4 rounded-2xl flex flex-col items-center">
        <SectionTabs sections={sectionsData} />
        <TableMap />
      </section>
      <section className="col-span-12 lg:col-span-4">
        <ReservationDetails />
      </section>
    </main>
  );
};

export default ReservationSystem;
