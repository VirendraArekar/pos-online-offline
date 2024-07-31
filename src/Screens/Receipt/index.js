import React from 'react';
import Navbar from '../../Components/Navbar';
import Divider from '../../Components/Divider';
import { FiTag } from "react-icons/fi";
import { VscPercentage } from "react-icons/vsc";
import { IoPrintOutline } from "react-icons/io5";
import useDocumentTitle from '../../Hooks/useDocumentTitle'

export default function Receipt() {
  useDocumentTitle(`POS Receipt`)
  const printIt = () =>{     
    let printContents = document.getElementById('print-div').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
   document.body.innerHTML = originalContents; 
  }
  return (
    <div className='m-0 p-0'>
      <Navbar screen="receipts"/>
      <div className='container-fluid p-0 m-0 py-5' >
        <div className='row p-0 m-0 pt-3'>
          <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0">
            <div className='text-green px-3 py-3 text-medium wt-500'>
              Sunday, 02 August 2020
            </div>
            <Divider />
            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211113</div>
                    <span className='text-light-grey'>10:00 AM</span>
                    </span>
                    <span>
                    <div className='text-green wt-600 text-medium-large'>₹20.99</div>
                    <span className='text-light-grey'>Not Sync</span>
                    </span>
                </div>
            </div>
            <Divider /> 
            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211112</div>
                    <span className='text-light-grey'>09:45 AM</span>
                    </span>
                    <span>
                    <div className='text-green wt-600 text-medium-large'>₹60.00</div>
                    <span className='text-light-grey'>Not Sync</span>
                    </span>
                </div>
            </div>
            <Divider /> 
            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211111</div>
                    <span className='text-light-grey'>09:30 AM</span>
                    </span>
                    <span>
                    <div className='text-green wt-600 text-medium-large'>₹200.00</div>
                    <span className='text-light-grey'></span>
                    </span>
                </div>
            </div>
            <Divider /> 
            <div className='text-green px-3 py-4 text-medium wt-500'>
              Monday, 01 August 2020
            </div>
            <Divider />

            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211113</div>
                    <span className='text-light-grey'>10:00 AM <span className='ms-2 text-red'>Refund(#TRX0101211115)</span></span>
                    </span>
                    <span>
                    <div className='text-red wt-600 text-medium-large'>₹20.99</div>
                    <span className='text-light-grey'></span>
                    </span>
                </div>
            </div>
            <Divider /> 
            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211112</div>
                    <span className='text-light-grey'>09:45 AM</span>
                    </span>
                    <span>
                    <div className='text-green wt-600 text-medium-large'>₹60.00</div>
                    <span className='text-light-grey'></span>
                    </span>
                </div>
            </div>
            <Divider /> 
            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211111</div>
                    <span className='text-light-grey'>09:30 AM</span>
                    </span>
                    <span>
                    <div className='text-green wt-600 text-medium-large'>₹200.00</div>
                    <span className='text-light-grey'></span>
                    </span>
                </div>
            </div>
            <Divider /> 
            <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                <div className="d-flex justify-content-between text-medium">
                    <span>
                    <div className='text-grey wt-600 text-medium-large'>#TRX0101211111</div>
                    <span className='text-light-grey'>09:30 AM</span>
                    </span>
                    <span>
                    <div className='text-green wt-600 text-medium-large'>₹200.00</div>
                    <span className='text-light-grey'></span>
                    </span>
                </div>
            </div>
            <Divider /> 
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0">
            <div className='row m-0 p-0 border-start'>
              <div className='offset-3 col-6 offset-3'>
                <div className='w-100 my-4 border' id="print-div">
                  <div className='text-center py-4 pb-3'>
                      <div className='text-light-grey text-large wt-400'>Total</div>
                      <div className='text-green text-extra-large wt-500'>₹658.00</div>
                  </div>
                  <Divider /> 
                  <div className='p-3 py-2 pb-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-600 text-medium-large'>Order</div>
                        <div className='text-grey wt-600 text-medium-large'>#TRX0101211113</div>
                    </div>
                  </div>
                  <div className='p-3 py-2 pb-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>Cashier</div>
                        <div className='text-grey wt-400 text-medium-large'>Thomas Shelby</div>
                    </div>
                  </div>
                  <div className='p-3 py-2 pb-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>POS</div>
                        <div className='text-grey wt-400 text-medium-large'>POS1</div>
                    </div>
                  </div>
                  <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>Date & Time</div>
                        <div className='text-grey wt-400 text-medium-large'>19 June 2022, 05:25 pm</div>
                    </div>
                  </div>
                  <Divider /> 
                  <div className='p-3 py-2 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-green wt-600 text-medium-large'>Dine In</div>
                        <div className='text-grey wt-400 text-medium-large'></div>
                    </div>
                  </div>
                  <Divider /> 
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-600 text-medium-large'>Biriyani (Chicken/HYD/Full)</div>
                        <div className='text-grey wt-600 text-medium-large'><FiTag size={18} color='#4CAF50' className='mx-1'/>400.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>2 x 200.00</div>
                        <div className='text-grey wt-600 text-medium-large'></div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'>+ Sprite (Medium)</div>
                        <div className='text-grey wt-400 text-medium-large'>25.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'>+ Chicken Lolipop</div>
                        <div className='text-grey wt-400 text-medium-large'>75.00</div>
                    </div>
                  </div>

                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'><FiTag color='#4CAF50' size={18}/>  Discount: <span className='text-light-grey'>5%</span></div>
                        <div className='text-light-grey wt-400 text-medium-large'>-20.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10%</div>
                        <div className='text-light-grey wt-400 text-medium-large'>-40.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'><VscPercentage color='#4CAF50' size={18}/>  Tax: <span className='text-light-grey'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CGST (5%)</span></div>
                        <div className='text-light-grey wt-400 text-medium-large'>20.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGST (2%)</div>
                        <div className='text-light-grey wt-400 text-medium-large'>8.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium'>Any Comments related to this product</div>
                        <div className='text-grey wt-400 text-medium-large'></div>
                    </div>
                  </div>

                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-600 text-medium-large'>Paneer Tikka (Dry)</div>
                        <div className='text-grey wt-600 text-medium-large'>130.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>1 x 130.00</div>
                        <div className='text-grey wt-600 text-medium-large'></div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'>+ Extra Spice</div>
                        <div className='text-grey wt-400 text-medium-large'>30.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'><VscPercentage color='#4CAF50' size={18}/>  Tax: <span className='text-light-grey'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CGST (5%)</span></div>
                        <div className='text-light-grey wt-400 text-medium-large'>7.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SGST (2%)</div>
                        <div className='text-light-grey wt-400 text-medium-large'>3.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium'>Any Comments related to this product</div>
                        <div className='text-grey wt-400 text-medium-large'></div>
                    </div>
                  </div>


                  <Divider />

                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-600 text-medium-large'>Total Amount</div>
                        <div className='text-grey wt-600 text-medium-large'>₹680.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>Total Discount</div>
                        <div className='text-light-grey wt-400 text-medium-large'>-60.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>Total Tax (Included in price)</div>
                        <div className='text-light-grey wt-400 text-medium-large'>38.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-600 text-large'>Billed Amount</div>
                        <div className='text-green wt-600 text-large'>₹658.00</div>
                    </div>
                  </div>
                  <Divider />
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-grey wt-400 text-medium-large'>Payment:<span className='text-light-grey'> PayTm</span></div>
                        <div className='text-light-grey wt-400 text-medium-large'>219.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cash</div>
                        <div className='text-light-grey wt-400 text-medium-large'>219.00</div>
                    </div>
                  </div>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Card</div>
                        <div className='text-light-grey wt-400 text-medium-large'>220.00</div>
                    </div>
                  </div>
                  <Divider/>
                  <div className='p-3 py-1 justify-content-center align-content-center align-items-center'>
                    <div className="d-flex justify-content-between text-medium">
                        <div className='text-light-grey wt-400 text-medium-large'>Change Balance</div>
                        <div className='text-light-grey wt-400 text-medium-large'>42.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
                  <button className='btn btn-outline-success' onClick={printIt}>
                    <IoPrintOutline size={22} color={'#4CAF50'} /> PRINT
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
