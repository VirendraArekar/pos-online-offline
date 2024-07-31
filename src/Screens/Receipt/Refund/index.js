import Navbar from '../../../Components/Navbar';
import {TbArrowBigRight} from "react-icons/tb";
import './style.scss';
import React, {useState} from "react";
import Divider from '../../../Components/Divider';
import Button  from '../../../Components/Button';
import ModalNavbar from "../../../Components/ModalNavbar";
import PosModal from "../../../Components/PosModal";
import Input from "../../../Components/Input";
import { BsCashStack } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";

export default function Refund() {
    const [open, setOpen] = useState(false)
    return (<>
        <Navbar screen={'refund'}/>
        <div className="container">
            <div className={'row p-5 equal-height-row'}>
                <div className={'col-5 equal-height-col'}>
                    <div className="card" style={{width: '30rem', height: '35rem'}}>
                        <div className="card-body p-0">
                            <h5 className="card-title text-grey wt-600 text-large py-4 pb-2 px-4">
                                Receipt #TRX0101211113
                            </h5>
                            <div
                                className=' py-2 mx-4 justify-content-center align-content-center align-items-center'>
                                <div className="d-flex justify-content-between text-medium">
                                    <span className={'align-middle'}>
                                        <input type="checkbox"
                                               style={{height: 18, width: 18}} className={'align-self-center'}/>
                                        <div className={'d-inline-block px-3'}>
                                            <div className='text-grey wt-600 text-medium-large'>Briyani  x 2</div>
                                            <div className='text-light-grey text-small'>Chicken/HYD/Full</div>
                                            <div className='text-light-grey text-small'>Drink (Medium)</div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className='text-grey wt-600 text-medium-large'>₹550.00</div>
                                    </span>
                                </div>

                            </div>
                            <Divider/>

                            <div
                                className=' py-2 mx-4 justify-content-center align-content-center align-items-center'>
                                <div className="d-flex justify-content-between text-medium">
                                    <span className={'align-middle'}>
                                        <input type="checkbox"
                                               style={{height: 18, width: 18}} className={'align-self-center'}/>
                                        <div className={'d-inline-block px-3'}>
                                            <div className='text-grey wt-600 text-medium-large'>Panner Tikka x 1</div>
                                            <div className='text-light-grey text-small'>Dry</div>
                                            <div className='text-light-grey text-small'>Extra Spicy</div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className='text-grey wt-600 text-medium-large'>₹150.00</div>
                                    </span>
                                </div>

                            </div>
                            <Divider/>

                            <div
                                className=' py-2 mx-4 justify-content-center align-content-center align-items-center'>
                                <div className="d-flex justify-content-between text-medium">
                                    <span className={'align-middle'}>
                                        <div className={'d-inline-block px-4 ms-1'}>
                                            <div className='text-grey wt-600 text-medium-large'>Discounts</div>
                                            <div className='text-light-grey text-small'>Tax (Included)</div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className='text-grey wt-600 text-medium-large'>₹150.00</div>
                                    </span>
                                </div>

                            </div>
                            <Divider/>
                            <div
                                className=' py-2 mx-4 justify-content-center align-content-center align-items-center'>
                                <div className="d-flex justify-content-between text-medium">
                                    <span className={'align-middle'}>
                                        <div className={'d-inline-block px-4 ms-1'}>
                                            <div className='text-grey wt-600 text-medium-large'>Total</div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className='text-green wt-600 text-medium-large'>₹660.00</div>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={'col-2 text-center equal-height-col align-middle relative'}>
                    <div style={{height: '35rem'}}>
                        <span className={'vertical-center cursor-pointer'}><TbArrowBigRight size={38}/></span>
                    </div>

                </div>
                <div className={'col-5 equal-height-col'}>
                    <div className="card position-relative" style={{width: '30rem', height: '35rem'}}>
                        <div className="card-body p-0">
                            <h5 className="card-title text-grey wt-600 text-large py-4  pb-0 mb-0 px-4">
                                Refund Receipt
                            </h5>
                            <span className={'text-light-grey px-4'}>Tap item to cancel receipt</span>

                            <Divider className={'my-4 mb-0'}/>
                            <div
                                className=' py-2 mx-4 justify-content-center align-content-center align-items-center'>
                                <div className="d-flex justify-content-between text-medium">
                                    <span className={'align-middle'}>
                                        <input type="checkbox"
                                               style={{height: 18, width: 18}} className={'align-self-center'}/>
                                        <div className={'d-inline-block px-3'}>
                                            <div className='text-grey wt-600 text-medium-large'>Panner Tikka x 1</div>
                                            <div className='text-light-grey text-small'>Dry</div>
                                            <div className='text-light-grey text-small'>Extra Spicy</div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className='text-grey wt-600 text-medium-large'>₹150.00</div>
                                    </span>
                                </div>

                            </div>
                            <Divider />

                            <div
                                className=' py-2 mx-4 justify-content-center align-content-center align-items-center'>
                                <div className="d-flex justify-content-between text-medium">
                                    <span className={'align-middle'}>
                                        <div className={'d-inline-block px-4 ms-1'}>
                                            <div className='text-grey wt-600 text-medium-large'>Total</div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className='text-green wt-600 text-medium-large'>₹150.00</div>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <Button name={"Refund ₹150.00"} className={"btn-green mx-3 my-3 py-4"} onClick={() => setOpen(true)}/>
                    </div>
                </div>
            </div>
        </div>
        <PosModal name={'refund'} onChange={(val) => setOpen(val)} show={open}>
            <ModalNavbar name="refund pay" title={"Refund ₹150.00"} />
                <div className={'text-center py-5 pb-4'}>
                    <span className={'text-light-grey'}>Refund Amount</span>
                    <h5 className="card-title text-green wt-600 text-large-xs  py-2 px-4">
                        ₹150.00
                    </h5>
                </div>
            <div className={'mx-auto pb-2'} style={{width : '50%', marginBottom : 90}}>
                <Input name={'cash'} placeholder={'Cash Received'} value={'₹150.00'} disabled={true}/>
                <Button name={"Cash"} className={"btn-green  my-3 py-3 mt-4 w-100 align-middle"}>
                  <BsCashStack size={20}/>
                </Button>
                <Button name={"Card"} className={"btn-green  my-3 py-3 w-100"}>
                    <IoCardOutline size={20} />
                </Button>
                <Button name={"Sunup"} className={"btn-green  my-3 py-3 w-100"}>
                    <IoCardOutline size={20} />
                </Button>
            </div>
        </PosModal>
    </>)
}