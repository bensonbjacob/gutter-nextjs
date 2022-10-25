import React, { useState } from 'react';

const GutterCalc = () => {
  const [linear, setLinear] = useState(0);
  const [rightEnd, setRightEnd] = useState(0);
  const [leftEnd, setLeftEnd] = useState(0);
  const [insideCorner, setInsideCorner] = useState(0);
  const [outsideCorner, setOutsideCorner] = useState(0);
  const [total, setTotal] = useState(0);

  let calcTotal = (event) => {
    //prevent submitting
    event.preventDefault();

    if (linear === 0 || rightEnd === 0 || leftEnd === 0) {
      alert(
        'Please enter a linear with measurement and number of endcaps.'
      );
    } else {
      let total =
        linear * 2.5 +
        rightEnd * 1 +
        leftEnd * 1 +
        insideCorner * 2 +
        outsideCorner * 2;
      setTotal(total.toFixed(1));
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <div className='min-h-screen md:pt-6 pb-8 px-2 md:px-0'>
      <header className='max-w-lg mx-auto'>
        <h1 className='text-4xl font-bold text-center'>
          Gutter Calculator
        </h1>
      </header>

      <div className='max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
        <div className='mt-4'>
          <form className='flex flex-col' onSubmit={calcTotal}>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Linear Feet
              </label>
              <input
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
                value={linear}
                onChange={(e) => setLinear(e.target.value)}
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Right Endcaps
              </label>
              <input
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
                value={rightEnd}
                onChange={(event) => setRightEnd(event.target.value)}
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Left Endcaps
              </label>
              <input
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
                value={leftEnd}
                onChange={(e) => setLeftEnd(e.target.value)}
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Inside Corners
              </label>
              <input
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
                value={insideCorner}
                onChange={(e) => setInsideCorner(e.target.value)}
              />
            </div>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>
                Outside Corners
              </label>
              <input
                className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
                value={outsideCorner}
                onChange={(e) => setOutsideCorner(e.target.value)}
              />
            </div>
            <div>
              <button
                className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
          <div>
            <h3 className='text-center pt-4'>Total: ${total}</h3>
          </div>
        </div>
      </div>

      <footer className='max-w-lg mx-auto flex justify-center'>
        <a href='https://jacobbenson.dev' className='hover:underline'>
          Contact
        </a>
      </footer>
    </div>
  );
};

export default GutterCalc;
