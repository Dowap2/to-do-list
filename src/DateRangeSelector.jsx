import React, { useState } from "react";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import "moment/locale/ko"

export function DateRangeSelector(props){
  let [date, setDate] = useState();
  let [focused , setFocused] = useState();
  moment.locale('ko');

  return(
    <div>
      <DayPickerRangeController
          startDate={date}
          onDateChange={(date) => setDate(date)}
          focusedInput={focused}
          onFocusChange={({focused}) => setFocused(true)}
          initialVisibleMonth={() => moment().add(0, "M")}
      />
      <button onClick={e=> console.log(focused)}></button>
    </div>
  )
}

export default DateRangeSelector;