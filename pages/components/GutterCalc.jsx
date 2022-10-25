import React, { useState } from 'react';

const GutterCalc = () => {
  const [linear, setLinear] = useState(0);
  const [costLinear, setCostLinear] = useState(3);
  const [rightEnd, setRightEnd] = useState(0);
  const [costRight, setCostRight] = useState(1.75);
  const [leftEnd, setLeftEnd] = useState(0);
  const [costLeft, setCostLeft] = useState(1.75);
  const [insideCorner, setInsideCorner] = useState(0);
  const [costInner, setCostInner] = useState(4.25);
  const [outsideCorner, setOutsideCorner] = useState(0);
  const [costOuter, setCostOuter] = useState(4.5);
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
        linear * costLinear +
        rightEnd * costRight +
        leftEnd * costLeft +
        insideCorner * costInner +
        outsideCorner * costOuter;
      setTotal(total.toFixed(1));
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <div className='min-h-screen md:pt-6 pb-8 px-2 md:px-0 bg-gradient-to-r from-sky-500 to-indigo-500'>
      <header className='max-w-lg mx-auto'>
        <h1 className='text-4xl font-bold text-white text-center'>
          Gutter Calculator
        </h1>
      </header>

      <div className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>
        <div className='mt-4'>
          <form onSubmit={calcTotal}>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Linear Feet
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={linear}
                  onChange={(e) => setLinear(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Cost Per Linear Foot
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={costLinear}
                  onChange={(e) => setCostLinear(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Right Endcaps
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={rightEnd}
                  onChange={(event) =>
                    setRightEnd(event.target.value)
                  }
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Cost Per Right Endcap
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={costRight}
                  onChange={(e) => setCostRight(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Left Endcaps
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={leftEnd}
                  onChange={(e) => setLeftEnd(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Cost Per Left Endcap
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={costLeft}
                  onChange={(e) => setCostLeft(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Inner Corners
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={insideCorner}
                  onChange={(e) => setInsideCorner(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Cost Per Inner Corner
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={costInner}
                  onChange={(e) => setCostInner(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Outer Corners
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={outsideCorner}
                  onChange={(e) => setOutsideCorner(e.target.value)}
                />
              </div>
              <div className='w-full md:w-1/2 px-3 mb-6'>
                <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                  Cost Per Outer Corner
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  value={costOuter}
                  onChange={(e) => setCostOuter(e.target.value)}
                />
              </div>
              <div className='w-full'>
                <button
                  className='w-full bg-sky-600 hover:bg-indigo-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div>
            <h3 className='text-center pt-4'>Total: ${total}</h3>
          </div>
        </div>
      </div>

      <footer className='max-w-lg mx-auto flex justify-center text-white'>
        <a href='https://jacobbenson.dev' className='hover:underline'>
          Contact
        </a>
      </footer>
    </div>
  );
};

export default GutterCalc;
