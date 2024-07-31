import React from 'react';
import Navbar from '../../Components/Navbar';
import { orders } from '../../Data/dummy';
import {ORDER_TABLE_COLORS} from '../../utils/constant';
import './style.css'

export default function Order() {
  const orderColors = (ind) => {
    let no_of_colors = ORDER_TABLE_COLORS.length;
    let index = ind;
    if(ind > no_of_colors){
      index = Math.floor(ind % no_of_colors)
    }
    return ORDER_TABLE_COLORS[index];
  }
  return (
    <div className='w-100 p-0 m-0'>
     <Navbar screen={'orders'} />
     <div className='container-fluid p-4 px-5'> 
        <div className='row'>
          {
            orders.map((item, key) => {
              return(
                <div className='col-sm-6 col-md-4 col-lg-3 px-2'>
                    <div className='my-3  border rounded box'>
                        <div className="p-3 rounded-top" style={{backgroundColor : orderColors(key)}}>
                           <h5 style={{fontSize : 20, fontWeight : '700'}}>Table {item?.table}</h5>
                           <h6 className='mt-2' style={{fontSize : 16 , fontWeight : '600'}}>{item?.time},{item?.customer}</h6>
                        </div>
                        <div className='px-3 pt-2'>
                          {
                            item?.voided &&
                            <p className='font-italic' style={{fontStyle : 'italic',fontSize :18, color : '#F86C41'}}>Voided(1)</p>
                          }
                        </div>
                        {
                          item?.voided &&
                            <div className="divider bg-light"></div>
                        }
                        <div className='px-3'>
                           {
                            item?.order.map((ord, key) => {
                              return(
                                <>
                                 <div className='py-3' style={{fontSize : 18, fontWeight : '500', color : ord?.status ? '#2E2E2E' : '#F86C41'}}>
                                   {
                                      ord?.status ?
                                      <>
                                        {ord?.qty} X {ord?.item}
                                      </>
                                      :
                                        <del>{ord?.qty} X {ord?.item}</del>

                                   }
                                 </div>
                                </>
                              )
                            })
                           }
                        </div>
                    </div>
                </div>
              )
            })
          }
        </div>
     </div>
    </div>
  )
}
