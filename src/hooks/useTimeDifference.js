import { useState, useEffect } from "react";

const useTimeDifference = (startDate, startTime) => {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const calculateTime = () => {
      if (startDate && startTime) {
        // Adjust the date format to "dd/m/yyyy"
        const adjustedStartDate = startDate.split("/").join("/");

        // Convert the adjusted start date and time to a JavaScript Date object
        const startDateTime = new Date(adjustedStartDate + " " + startTime);

        // Get the current date and time
        const currentDateTime = new Date();

        // Check if startDateTime is in the future
        if (startDateTime > currentDateTime) {
          // Calculate the difference in milliseconds between the two dates
          const differenceMs = startDateTime - currentDateTime;

          // Convert the difference to positive value
          const positiveDifferenceMs = Math.abs(differenceMs);

          // Calculate the days, hours, and minutes
          const days = Math.floor(positiveDifferenceMs / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (positiveDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (positiveDifferenceMs % (1000 * 60 * 60)) / (1000 * 60)
          );

          // Set the time difference as an object
          setTimeDifference({ days, hours, minutes });
        } else {
          // Set the time difference to null if startDateTime is in the past
          setTimeDifference(null);
        }
      } else {
        // Set the time difference to null if startDateTime is in the past
        setTimeDifference(null);
      }
    };

    calculateTime();
  }, [startDate, startTime]);

  return timeDifference;
};

export default useTimeDifference;
