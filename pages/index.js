import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import BasicInfo from '../Components/Stages/BasicInfo';
import CreditInformation from '../Components/Stages/CreditInformation';
import EmployerInformation from '../Components/Stages/EmployerInformation';
import LoanInformation from '../Components/Stages/LoanInformation';
import SchoolInformation from '../Components/Stages/SchoolInformation';
import Button from '../Components/UI/Button';
import Success from '../Components/UI/Success';

export default function LoanApplication() {
  const [stage1, setStage1] = useState(true);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);
  const [stage4, setStage4] = useState(false);
  const [stage5, setStage5] = useState(false);

  const [basicInfo, setBasicInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    dateofbirth: '',
  });

  const [creditInfo, setCreditInfo] = useState({
    bvn: '',
    monthlyincome: '',
    salaryaccountnumber: '',
    bankname: '',
    payday: '',
    officeaddress: '',
  });

  const [loanInfo, setLoanInfo] = useState({
    schoolfeeamount: '',
    numberofinstallments: '',
  });

  const [schoolInfo, setSchoolInfo] = useState({
    schoolname: '',
    schooladdress: '',
    schoolcontactperson: '',
    schoolcontactnumber: '',
    schoolaccountnumber: '',
    schoolbankname: '',
  });

  const [employerInfo, setEmployerInfo] = useState({
    employername: '',
    employeraddress: '',
    employercontactnumber: '',
  });

  const [buttonState, setButtonState] = useState('');
  const [status, setStatus] = useState('idle');

  //  ======================= State Handler =======================
  const basicInfoHandler = (label, value) => {
    setBasicInfo({
      ...basicInfo,
      [label]: value,
    });
  };

  const creditInfoHandler = (label, value) => {
    setCreditInfo({
      ...creditInfo,
      [label]: value,
    });
  };

  const loanInfoHandler = (label, value) => {
    setLoanInfo({
      ...loanInfo,
      [label]: value,
    });
  };

  const generalHandler = (label, value, type) => {
    if (type === 'employer') {
      setEmployerInfo({
        ...employerInfo,
        [label]: value,
      });
    }

    if (type === 'school') {
      setSchoolInfo({
        ...schoolInfo,
        [label]: value,
      });
    }
  };

  // =====================================================================

  //======================= Moving to stage handler =======================
  const moveToStageOne = () => {
    setStage1(true);
    setStage2(false);
    setStage3(false);
    setStage4(false);
    setStage5(false);
  };

  const moveToStageTwo = () => {
    setStage1(false);
    setStage2(true);
    setStage3(false);
    setStage4(false);
    setStage5(false);
  };

  const moveToStageThree = () => {
    setStage1(false);
    setStage2(false);
    setStage3(true);
    setStage4(false);
    setStage5(false);
  };

  const moveToStageFour = () => {
    setStage1(false);
    setStage2(false);
    setStage3(false);
    setStage4(true);
    setStage5(false);
  };

  const moveToStageFive = () => {
    setStage1(false);
    setStage2(false);
    setStage3(false);
    setStage4(false);
    setStage5(true);
  };
  //  =====================================================================

  //================ Next and previous handler =======================
  const handleNext = () => {
    if (stage1) {
      moveToStageTwo();
    }

    if (stage2) {
      moveToStageThree();
    }

    if (stage3) {
      moveToStageFour();
    }

    if (stage4) {
      moveToStageFive();
    }
  };

  const handlePrev = () => {
    if (stage5) {
      moveToStageFour();
    }

    if (stage4) {
      moveToStageThree();
    }

    if (stage3) {
      moveToStageTwo();
    }

    if (stage2) {
      moveToStageOne();
    }
  };
  // ===================================================================

  const onSubmit = async (e) => {
    e.preventDefault();

    if (buttonState === 'next') {
      handleNext();
    }

    if (buttonState === 'prev') {
      handlePrev();
    }

    if (buttonState === 'submit') {
      setStatus('loading');

      try {
        await fetch(`https://formsubmit.co/ajax/applications@paylaterhub.ng`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...basicInfo,
            ...schoolInfo,
            ...creditInfo,
            ...employerInfo,
            ...loanInfo,
            _subject: `School Fees Application from ${basicInfo.firstname} ${basicInfo.lastname} (${basicInfo.email})`,
            dateofbirth: basicInfo.dateofbirth.toLocaleDateString(),
          }),
        });

        setStatus('success');
      } catch (error) {
        setStatus('error');

        return null;
      }
    }
  };

  return (
    <>
      <Head>
        <title>School Fees</title>
      </Head>

      <Navbar />

      <main className='px-5 md:px-16 flex flex-col md:mt-6 mb-16'>
        <div className='md:w-6/12 m-auto'>
          {status !== 'success' ? (
            <form onSubmit={onSubmit}>
              {stage1 && (
                <BasicInfo setInput={basicInfoHandler} basicInfo={basicInfo} />
              )}
              {stage2 && (
                <SchoolInformation
                  setInput={generalHandler}
                  schoolInfo={schoolInfo}
                />
              )}
              {stage3 && (
                <CreditInformation
                  setInput={creditInfoHandler}
                  creditInfo={creditInfo}
                />
              )}
              {stage4 && (
                <EmployerInformation
                  setInput={generalHandler}
                  employerInfo={employerInfo}
                />
              )}
              {stage5 && (
                <LoanInformation
                  setInput={loanInfoHandler}
                  loanInfo={loanInfo}
                />
              )}

              <div className='flex mt-8'>
                <div>
                  <Button
                    title='Previous'
                    type='submit'
                    variant='outline'
                    isDisabled={stage1}
                    onClick={() => setButtonState('prev')}
                  />
                </div>

                <div className='ml-auto'>
                  <Button
                    title={stage5 ? 'Submit' : 'Next'}
                    type='submit'
                    isLoading={status === 'loading'}
                    isDisabled={!basicInfo.dateofbirth}
                    onClick={() => {
                      if (stage5) {
                        setButtonState('submit');
                      } else {
                        setButtonState('next');
                      }
                    }}
                  />
                </div>
              </div>
            </form>
          ) : (
            <Success />
          )}
        </div>
      </main>
    </>
  );
}
