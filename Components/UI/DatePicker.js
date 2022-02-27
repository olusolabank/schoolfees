import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ setDate, dataType, value }) => {
  return (
    <DatePicker
      className='w-full my-auto py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
      onChange={(date) => setDate(dataType, date)}
      selected={value}
      showMonthDropdown
      showYearDropdown
      dropdownMode='select'
    />
  );
};

export default CustomDatePicker;
