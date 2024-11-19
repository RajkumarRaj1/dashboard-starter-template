import { useEffect } from "react";
import DataTable from "../../Components/DataTable";
import { useState } from "react";

export default function ShowBookings() {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/booking/", {
      headers: {
        token: sessionStorage.getItem("_tk"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result && result.data) {
          setBookings(result.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div>ShowBookings</div>
      <DataTable
        headers={[
          { label: "BOOKING ID ", id: "_id" },
          { label: "START TIME", id: "bookingStartTime" },
          { label: "END TIME", id: "bookingEndTime" },
          { label: "SERVICE TYPE", id: "business" },
          { label: "BOOKED DATE", id: "createdAt" },
        ]}
        data={bookings}
      />
    </div>
  );
}
