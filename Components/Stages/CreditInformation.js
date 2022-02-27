import React from 'react';
import { allBanks } from '../../data';
import Input from '../Input';
import Header from '../UI/Header';
import Label from '../UI/Label';

const CreditInformation = ({ setInput, creditInfo }) => {
  // const onetoThirtyOne = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  // ];

  const paydayRanges = [24, 25, 26, 27];

  return (
    <>
      <Header
        title='Credit Information'
        description='In this session will be asking some few question to review your credit score and help us understand your personal needs and find a better way to serve you.'
      />

      <div className='mt-8'>
        <div className='mb-8'>
          <Label title='BVN' lFor='bvn' />

          <Input
            type='text'
            id='bvn'
            name='bvn'
            placeholder='26483919484'
            required
            onChange={(e) => setInput('bvn', e.target.value)}
            value={creditInfo.bvn}
          />
        </div>

        <div className='mb-8'>
          <Label title='Monthly Income (Naira)' lFor='monthlyincome' />

          <Input
            type='text'
            id='monthlyincome'
            name='monthlyincome'
            placeholder='500,000'
            required
            onChange={(e) => setInput('monthlyincome', e.target.value)}
            value={creditInfo.monthlyincome}
          />
        </div>

        <div className='grid gap-8 md:gap-4 md:grid-cols-2 mb-8'>
          {/* salary account number */}
          <div>
            <Label title='Salary Account Number' lFor='salaryaccountnumber' />

            <Input
              type='text'
              id='salaryaccountnumber'
              name='salaryaccountnumber'
              placeholder='023453678'
              required
              onChange={(e) => setInput('salaryaccountnumber', e.target.value)}
              value={creditInfo.salaryaccountnumber}
            />
          </div>

          {/* Bank Name */}
          <div>
            <Label title='Bank Name' lFor='bankname' />

            <Input
              type='text'
              id='bankname'
              name='bankname'
              placeholder='Access Bank'
              required
              onChange={(e) => setInput('bankname', e.target.value)}
              value={creditInfo.bankname}
              list='banknameId'
            />

            <datalist id='banknameId'>
              {allBanks?.map((value) => {
                return (
                  <option key={value.id} value={value.name}>
                    {value.name}
                  </option>
                );
              })}
            </datalist>
          </div>
        </div>

        {/* Pay day */}
        <div className='mb-8'>
          <Label title='Pay Day' lFor='payday' />

          <select
            className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            id='payday'
            name='payday'
            onChange={(e) => setInput('payday', e.target.value)}
            value={creditInfo.payday}
          >
            <option>Select Pay day</option>
            {paydayRanges?.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>

        {/* office address */}
        <div>
          <Label title='Office Address' lFor='officeaddress' />

          <textarea
            id='officeaddress'
            name='officeaddress'
            required
            rows='5'
            placeholder='Number 8 Oluseyi Avenue'
            className='w-full my-auto py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            onChange={(e) => setInput('officeaddress', e.target.value)}
            value={creditInfo.officeaddress}
          />
        </div>
      </div>
    </>
  );
};

export default CreditInformation;
