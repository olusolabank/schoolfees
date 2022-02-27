import React from 'react';
import Input from '../Input';
import Header from '../UI/Header';
import Label from '../UI/Label';

const EmployerInformation = ({ setInput, employerInfo }) => {
  const setValue = (label, value) => {
    setInput(label, value, 'employer');
  };
  return (
    <>
      <Header
        title={'Employer Information'}
        description='Please provide employer information'
      />

      <div className='mt-8 space-y-8'>
        <div>
          <Label title='Employer name' lFor='employername' />

          <Input
            type='text'
            id='employername'
            name='employername'
            placeholder='Employer name'
            required
            onChange={(e) => setValue('employername', e.target.value)}
            value={employerInfo.employername}
          />
        </div>

        <div>
          <Label title='Employer address' lFor='employeraddress' />

          <textarea
            id='employeraddress'
            name='employeraddress'
            required
            rows='5'
            placeholder='Number 8 Happiness Avenue'
            className='w-full my-auto py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            onChange={(e) => setValue('employeraddress', e.target.value)}
            value={employerInfo.employeraddress}
          />
        </div>
      </div>
    </>
  );
};

export default EmployerInformation;
