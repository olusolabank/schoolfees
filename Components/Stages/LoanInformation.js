import React from 'react';
import Input from '../Input';
import Header from '../UI/Header';
import Label from '../UI/Label';
import Select from 'react-select';

const LoanInformation = ({ setInput, loanInfo }) => {
  return (
    <>
      <Header
        title={'Loan Information'}
        description='Please provide additional information'
      />

      <div className='mt-8 space-y-8'>
        {/* School Fee amount */}
        <div>
          <Label title='School Fee Amount' lFor='schoolfeeamount' />

          <Input
            type='number'
            id='schoolfeeamount'
            name='schoolfeeamount'
            placeholder=''
            required
            onChange={(e) => setInput('schoolfeeamount', e.target.value)}
            value={loanInfo.schoolfeeamount}
          />
        </div>

        {/* installments */}
        <div className='mb-8'>
          <Label title='Number of Installments' lFor='numberofinstallments' />

          <select
            className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            id='numberofinstallments'
            name='numberofinstallments'
            onChange={(e) => setInput('numberofinstallments', e.target.value)}
            value={loanInfo.numberofinstallments}
            required
          >
            <option>Select Number of Installments</option>

            <option value='3 Months'>3 Months</option>
            <option value='4 Months'>4 Months</option>
            <option value='5 Months'>5 Months</option>
            <option value='6 Months'>6 Months</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default LoanInformation;
