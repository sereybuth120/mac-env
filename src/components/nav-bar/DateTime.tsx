import { useState, useEffect } from "react";

import "./navbar.css";

type DateType = Date;
function DateTime() {
  const [dateTime, setDateTime] = useState<DateType>();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);

    return function cleanUp() {
      clearInterval(timer);
    };
  }, []);

  const formatDate = dateTime
    ?.toLocaleString([], {
      day: "numeric",
      weekday: "short",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/,/g, " ");

  return <div>{formatDate || "..."}</div>;
}

export default DateTime;
