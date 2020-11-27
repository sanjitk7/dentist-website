import React from 'react';
import '../sumbitform/sumbitform.scss'
function Submitform() {
  return (
    <div>
      <div className='bottomblues'>
        <div className='bottomblues__bottomblue'>
          <div>
            <div className='bottomblues__bottomblue__schedule'>Schedule a visit</div>
            <div>
              <form>
                <div >
                  <div className='bottomblues__bottomblue__inputfield1'>
                    <input

                      className='input'
                      placeholder='Name'
                      type="text"

                    />
                    <input
                      className='input1'
                      placeholder='Phone'
                      type="text"
                    />
                  </div>
                </div>
                <div className='bottomblues__bottomblue__inputfield2'>
                  <div> <input
                    className='input'
                    placeholder='Date'
                    type="text"
                  />
                    <input
                      className='input1'
                      placeholder='Service Required'
                      type="text"
                    /></div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='submitbutton '

                  >Submit
                  </button>
                  <button
                    type='submit'
                    className='callusbutton'
                  >
                    CallUs
                    </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitform;






