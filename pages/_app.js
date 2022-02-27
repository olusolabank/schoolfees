import '../styles/global.css';
import Head from 'next/head';
import GradCap from '../Components/UI/GradCap';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='border-8 min-h-screen border-blue-500 flex flex-col'>
        <div className='md:mx-0 pl-8 md:pl-16 pt-16 flex flex-col md:flex-row justify-center'>
          <div className='w-48 my-auto'>
            <img src='/logo.png' />
          </div>

          <div className='flex mt-4 md:my-auto md:ml-4'>
            <div className='bg-blue-500 w-14 h-14 p-1 flex rounded-full my-auto'>
              <GradCap className={'text-white w-8 h-8 m-auto'} />
            </div>

            <p className='my-auto font-semibold text-blue-500 uppercase ml-2 text-md'>
              Paylater School Fees
            </p>
          </div>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
