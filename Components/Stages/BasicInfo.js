import React from 'react';
import Input from '../Input';
import CustomDatePicker from '../UI/DatePicker';
import Header from '../UI/Header';
import Label from '../UI/Label';

const BasicInfo = ({ setInput, basicInfo }) => {
  return (
    <>
      <Header
        title='Basic Information'
        description='Enter your personal details here'
      />

      <div className='mt-8'>
        <div className='grid gap-8 md:gap-4 md:grid-cols-2 mb-8'>
          <div>
            <Label title='Firstname' lFor='firstname' />

            <Input
              type='text'
              id='firstname'
              name='firstname'
              placeholder='Jonathan'
              required
              onChange={(e) => setInput('firstname', e.target.value)}
              value={basicInfo.firstname}
            />
          </div>

          <div>
            <Label title='Lastname' lFor='lastname' />

            <Input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='Mcroy'
              required
              onChange={(e) => setInput('lastname', e.target.value)}
              value={basicInfo.lastname}
            />
          </div>
        </div>

        <div className='grid gap-8 md:gap-4 md:grid-cols-2 mb-8'>
          <div>
            <Label title='Email' lFor='email' />

            <Input
              type='email'
              id='email'
              name='email'
              placeholder='Jonathan@email.com'
              required
              onChange={(e) => setInput('email', e.target.value)}
              value={basicInfo.email}
            />
          </div>

          <div>
            <Label title='Phone Number' lFor='phone_number' />

            <Input
              type='tel'
              id='phonenumber'
              name='phonenumber'
              placeholder='2348135468268'
              required
              onChange={(e) => setInput('phonenumber', e.target.value)}
              value={basicInfo.phonenumber}
            />
          </div>
        </div>

        <div>
          <Label title='Date of Birth' lFor='dateofbirth' />

          {/* <Input
            type='date'
            id='dateofbirth'
            name='dateofbirth'
            placeholder=''
            required
            onChange={(e) => setInput('dateofbirth', e.target.value)}
            value={basicInfo.dateofbirth}
          /> */}
          <CustomDatePicker
            value={basicInfo.dateofbirth}
            setDate={setInput}
            dataType='dateofbirth'
          />
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
