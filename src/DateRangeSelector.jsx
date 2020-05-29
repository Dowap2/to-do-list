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
    props.onChangeYM(date.format('YYYY년 MM월'))
    if(date.format('dddd') == 'Monday'){
      props.onChangeD(date.format('DD일 월요일'))
    }
    else if(date.format('dddd') == 'Tuesday'){
      props.onChangeD(date.format('DD일 화요일'))
    }
    else if(date.format('dddd') == 'Wednesday'){
      props.onChangeD(date.format('DD일 슈요일'))
    }
    else if(date.format('dddd') == 'Thursday'){
      props.onChangeD(date.format('DD일 목요일'))
    }
    else if(date.format('dddd') == 'Friday'){
      props.onChangeD(date.format('DD일 금요일'))
    }
    else if(date.format('dddd') == 'Saturday'){
      props.onChangeD(date.format('DD일 토요일'))
    }
    else{
      props.onChangeD(date.format('DD일 일요일'))
    }
  }, [date])
  return (
    <div>
      <div className="date_box">
        <SingleDatePicker
          onDateChange={date => setDate(date)}
          onFocusChange={({ focused }) => setFocused(focused)}
          focused={focused}
          date={date}
        />
      </div>
    </div>
  );
}