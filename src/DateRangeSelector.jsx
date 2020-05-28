import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export function DatePicker(props) {
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    props.onChange(date.format('YYYYMMDD'))
  }, [date])
  return (
    <div>
      <SingleDatePicker
        onDateChange={date => setDate(date)}
        onFocusChange={({ focused }) => setFocused(focused)}
        focused={focused}
        date={date}
      />
      <div>
        <button onClick={e => console.log(date.format('YYYYMMDD'))}>date</button>
      </div>
    </div>
  );
}