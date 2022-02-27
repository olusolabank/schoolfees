import React from 'react';
import { allBanks } from '../../data';
import Input from '../Input';
import Header from '../UI/Header';
import Label from '../UI/Label';

const SchoolInformation = ({ setInput, schoolInfo }) => {
  console.log(schoolInfo);
  const setValue = (label, value) => {
    setInput(label, value, 'school');
  };

  return (
    <>
      <Header
        title={'School Information'}
        description='Please provide school information'
      />

      <div className='mt-8 space-y-8'>
        <div>
          <Label title='School name' lFor='schoolname' />

          <Input
            type='text'
            id='schoolname'
            name='schoolname'
            placeholder='Happiness Secondary School'
            required
            onChange={(e) => setValue('schoolname', e.target.value)}
            value={schoolInfo.schoolname}
          />
        </div>

        <div>
          <Label title='School address' lFor='schooladdress' />

          <textarea
            id='schooladdress'
            name='schooladdress'
            required
            rows='5'
            placeholder='Number 8 Happiness Avenue'
            className='w-full my-auto py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            onChange={(e) => setValue('schooladdress', e.target.value)}
            value={schoolInfo.schooladdress}
          />
        </div>

        {/* School contact person and contact number */}
        <div className='grid gap-8 md:gap-4 md:grid-cols-2 mb-8'>
          <div>
            <Label title='School Contact Person' lFor='schoolcontactperson' />

            <Input
              type='text'
              id='schoolcontactperson'
              name='schoolcontactperson'
              placeholder='Temilade Olaniyan'
              required
              onChange={(e) => setValue('schoolcontactperson', e.target.value)}
              value={schoolInfo.schoolcontactperson}
            />
          </div>

          <div>
            <Label title='School Contact Number' lFor='schoolcontactnumber' />

            <Input
              type='text'
              id='schoolcontactnumber'
              name='schoolcontactnumber'
              placeholder='08154368292'
              required
              onChange={(e) => setValue('schoolcontactnumber', e.target.value)}
              value={schoolInfo.schoolcontactnumber}
            />
          </div>
        </div>

        {/* School Account number and bank name */}
        <div className='grid gap-8 md:gap-4 md:grid-cols-2 mb-8'>
          {/* salary account number */}
          <div>
            <Label title='School Account Number' lFor='schoolaccountnumber' />

            <Input
              type='text'
              id='schoolaccountnumber'
              name='schoolaccountnumber'
              placeholder='023453678'
              required
              onChange={(e) => setValue('schoolaccountnumber', e.target.value)}
              value={schoolInfo.schoolaccountnumber}
            />
          </div>

          {/* Bank Name */}
          <div>
            <Label title='Bank Name' lFor='schoolbankname' />

            <Input
              type='text'
              id='schoolbankname'
              name='schoolbankname'
              placeholder='Access Bank'
              required
              onChange={(e) => setValue('schoolbankname', e.target.value)}
              value={schoolInfo.schoolbankname}
              list='schoolbanknameId'
            />

            <datalist id='schoolbanknameId'>
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
      </div>
    </>
  );
};

export default SchoolInformation;
