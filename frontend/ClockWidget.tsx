import * as dayjs from "dayjs";
import * as React from "react";
import { useEffect } from "react";

export default function ClockWidget() {
  const [clock, setClock] = React.useState(dayjs().format("HH:mm:ss"));
  const [date, setDate] = React.useState(dayjs().format("DD.MM.YYYY dddd"));

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setClock(dayjs().format("HH:mm:ss"));
    }, 1000);
    const dateTimer = setInterval(() => {
      setDate(dayjs().format("DD.MM.YYYY dddd"));
    }, 1000);
    return () => {
      clearInterval(clockTimer);
      clearInterval(dateTimer);
    };
  });

  return (
    <div className="row clock-widget-container">
      <div className="col-12">
        <div className="glassify clock-widget">
          <div className="clock-widget-element">{clock}</div>
          <div className="clock-widget-element">{date}</div>
        </div>
      </div>
    </div>
  );
}
