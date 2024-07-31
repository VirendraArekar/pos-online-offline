import React, {useState} from 'react';
import Navbar from '../../Components/Navbar';
import Divider from '../../Components/Divider';
import { FiKey, FiInfo , FiLock, FiPrinter, FiGlobe,FiMessageSquare, FiStar, FiShare2 } from "react-icons/fi";
import { BsWhatsapp, BsCameraVideo  } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { PiShieldStarBold } from "react-icons/pi";
import { IoCloudDoneOutline } from "react-icons/io5";
import { PiNotePencil } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";
import Toggle from '../../Components/Toggle';
import Button from '../../Components/Button';
import './style.css'

export default function Setting() {
  const [activeItem, setActiveItem] = useState(0);
  const [useCamera, setUseCamera] = useState(false);
  

  const settingItems = [
    {
      name : 'Change Password',
      icon : 'FiKey'
    },
    {
      name : 'Store Information',
      icon : 'FiInfo'
    },
    {
      name : 'App Lock',
      icon : 'FiLock'
    },
    {
      name : 'Printer',
      icon : 'FiPrinter'
    },
    {
      name : 'Language',
      icon : 'FiGlobe'
    },
    {
      name : 'Subscription',
      icon : 'CiMobile1'
    },
    {
      name : 'Feedback',
      icon : 'FiMessageSquare'
    },
    {
      name : 'Rate Us',
      icon : 'FiStar'
    },
    {
      name : 'Share',
      icon : 'FiShare2'
    },
    {
      name : 'Whatsapp',
      icon : 'BsWhatsapp'
    },
    {
      name : 'Help Videos',
      icon : 'BsCameraVideo'
    }
  ]

  const renderIconCom = (setting, idx) => {
      switch(idx){
        case 0 :
          return  <><span className="me-4"><FiKey  size={24} /></span>{setting?.name}</>;
        case 1 :
          return  <><span className="me-4"><FiInfo  size={24} /></span>{setting?.name}</>;
        case 2 :
          return  <><span className="me-4"><FiLock  size={24} /></span>{setting?.name}</>;
        case 3 :
          return  <><span className="me-4"><FiPrinter  size={24} /></span>{setting?.name}</>;
        case 4 :
          return  <><span className="me-4"><FiGlobe  size={24} /></span>{setting?.name}</>;
        case 5 :
          return  <><span className="me-4"><CiMobile1  size={24} /></span>{setting?.name}</>;
        case 6 :
          return  <><span className="me-4"><FiMessageSquare  size={24} /></span>{setting?.name}</>;
        case 7 :
          return  <><span className="me-4"><FiStar  size={24} /></span>{setting?.name}</>;
        case 8 :
          return  <><span className="me-4"><FiShare2  size={24} /></span>{setting?.name}</>;
        case 9 :
          return  <>
          <span className="me-2 d-flex justify-content-between">
            <span className='me-4'><BsWhatsapp  size={24} /><span className='ms-4'>{setting?.name}</span></span>
            <span style={{color : '#9FA4B2'}}>8483988XXX</span>
          </span>
          </>;
        case 10 :
          return  <><span className="me-4"><BsCameraVideo  size={24} /></span>{setting?.name}</>;
        default :
          return  <><span className="me-4"><FiKey  size={24} /></span>{setting?.name}</>;
      }
         
  }

  return (
    <>
     <Navbar screen={'setting'} />
     <div className="container-fluid p-0 m-0">
       <div className="row m-0 p-0 w-100">
          <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0 text-secondary" style={{fontSize : 16}}>

              {
                settingItems.map((setting, key) => {
                  return(
                    <>
                      <div key={key} className="px-3 py-3" style={{color : activeItem === key ? '#4CAF50': '#4F4F4F', backgroundColor : activeItem === key ? '#F0F9F0': '', cursor : 'pointer'}} onClick={() => setActiveItem(key)}>
                       
                         {renderIconCom(setting, key)}
                        
                         
                      </div>
                      <Divider />
                    </>
                  )
                })
              }
              <>
              <div className="px-3 py-3 fw-bold" style={{color : '#DE3E3E', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer'}} onClick={() => setActiveItem(10)}>
                <span className="me-2 d-flex justify-content-between">
                  <span className='me-4'><RiLogoutBoxRLine  size={24} /><span className='ms-4'>Logout</span></span>
                  <span style={{color : '#9FA4B2' , fontWeight : 'normal'}}>viru.developer@gmail.com</span>
                </span>
              </div>
              </>
              <Divider />
              <>
              <div className="px-3 py-3" style={{color : '#707173', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer', fontSize : 12}} onClick={() => setActiveItem(10)}>
                <span className="me-4" style={{fontSize : 14}}>Our Promise</span>
                <span className="me-2 mt-3 d-flex justify-content-between">
                  <span className='me-4'><PiShieldStarBold  size={20} color='#4CAF50' className='rounded-circle' style={{border : '1px solid #a5d7a7', padding : 2, backgroundColor : '##a5d7a7'}}/><span className='ms-2'>100% Safe and Secure</span></span>
                  <span className='me-4'><IoCloudDoneOutline  size={20} color='#4CAF50' className='rounded-circle' style={{border : '1px solid #a5d7a7', padding : 2 , backgroundColor : '##a5d7a7'}}/><span className='ms-2'>Auto Data Backup</span></span>
                </span>
                </div>
              </>
           
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0 border-start">
             <div className="d-flex justify-content-between p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4CAF50'}}>
                <span>Store Detail</span>
                <span>
                  Edit <PiNotePencil size={20} className='ms-2'/>
                </span>
             </div>
             <Divider />
             <div className=" p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4F4F4F'}}>
                <span>Store Name</span> <br></br>
                <span style={{color : '#BCBCBC', fontWeight : 'normal'}}>
                  184, Narayana Reddy Pet, AP 524314, 879465XXXX
                </span>
             </div>

             {/* collapse */}
             <>
                <div className="px-4 py-3 fw-bold" style={{color : '#4F4F4F', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer', fontSize :16}} onClick={() => setActiveItem(10)} data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1">
                  <span className="me-2 d-flex justify-content-between">
                    <span className='me-4'>General Setting</span>
                    <span > <FaChevronDown size={18} /></span>
                  </span>
                </div>
           
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body border-0">
                    <div className="d-flex justify-content-between p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>Use camera to scan barcodes</span>
                        <span>
                         <Toggle value={useCamera} onChange={(val) => setUseCamera(val)} name={'camera-access'}/>
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>Home screen items layout</span>
                        <span>
                          <select className="form-select" aria-label="Default select example" style={{width : 150}}>
                            <option selected>Grid</option>
                            <option value="1">List</option>
                          </select>
                        </span>
                    </div>

                    <div className="d-flex justify-content-around p-3 px-5 mx-5 fw-bold" style={{fontSize : 12, color : '#4F4F4F'}}>
                        <span className='text-center'>
                          <img src={require('../../Data/images/grid.png')} alt="grid-view"/><br></br>
                          Grid View
                        </span>
                        <span className='text-center'>
                          <img src={require('../../Data/images/list.png')} alt="list-view"/><br></br>
                          List View
                        </span>
                    </div>

                    <Button onClick={() => {}} name="Save" className="w-100 btn-outline-success py-3 mx-2"/>

                  </div>
                </div>




                <div className="px-4 py-3 fw-bold" style={{color : '#4F4F4F', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer', fontSize :16}} onClick={() => setActiveItem(10)} data-bs-toggle="collapse" data-bs-target=".second-collapse" aria-expanded="false" aria-controls="multiCollapseExample2">
                  <span className="me-2 d-flex justify-content-between">
                    <span className='me-4'>Report</span>
                    <span > <FaChevronDown size={18} /></span>
                  </span>
                </div>
           
                <div className="collapse second-collapse" id="multiCollapseExample2">
                  <div className="card card-body border-0">
                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4CAF50'}}>
                        <span>Share Message</span>
                        <span>
                         
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>
                        Sharing Medium <br></br>
                        <span style={{fontSize : 12}}>Send message from phone sms or whatsapp</span>
                        </span>
                        <span>
                          <select className="form-select small-select" aria-label="Default select example" style={{width : 150}}>
                            <option selected>Grid</option>
                            <option value="1">List</option>
                          </select>
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>
                        Share For <br></br>
                        <span style={{fontSize : 12}}>Send message to user</span>
                        </span>
                        <span>
                          <select className="form-select medium-select" aria-label="Default select example" style={{width : 250}}>
                            <option selected>Customer and Farmer</option>
                            <option value="1">List</option>
                          </select>
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4CAF50'}}>
                        <span>Share Report</span>
                        <span>
                         
                        </span>
                    </div>


                    
                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>
                        Sharing Medium Customer<br></br>
                        <span style={{fontSize : 12}}>Share report via</span>
                        </span>
                        <span>
                          <select className="form-select small-select" aria-label="Default select example" style={{width : 150}}>
                            <option selected>Off</option>
                            <option value="1">On</option>
                          </select>
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>
                        Sharing Medium Farmer <br></br>
                        <span style={{fontSize : 12}}>Share report via</span>
                        </span>
                        <span>
                          <select className="form-select medium-select" aria-label="Default select example" style={{width : 250}}>
                            <option selected>Email and Whatsapp</option>
                            <option value="1">List</option>
                          </select>
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>
                            Send Profile Lost Report(For Me) <br></br>
                            <span style={{fontSize : 12}}>The profile nad lost report will be send by end of every month</span>
                        </span>
                        <span>
                         <Toggle value={useCamera} onChange={(val) => setUseCamera(val)} name={'camera-access'}/>
                        </span>
                    </div>

                    <div className="d-flex justify-content-between p-3 px-4 fw-medium" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>
                            Send Collection Report(For Me) <br></br>
                            <span style={{fontSize : 12}}>The milk collection report will be send by end of every month</span>
                        </span>
                        <span>
                         <Toggle value={useCamera} onChange={(val) => setUseCamera(val)} name={'camera-access'}/>
                        </span>
                    </div>

                    <div className="d-flex justify-content-around p-3 px-5 mx-5 fw-bold" style={{fontSize : 12, color : '#4F4F4F'}}>
                        <span className='text-center'>
                          <img src={require('../../Data/images/grid.png')} alt="grid-view"/><br></br>
                          Grid View
                        </span>
                        <span className='text-center'>
                          <img src={require('../../Data/images/list.png')} alt="list-view"/><br></br>
                          List View
                        </span>
                    </div>

                    <Button onClick={() => {}} name="Save" className="w-100 btn-outline-success py-3 mx-2"/>

                  </div>
                </div>




                {/* invoice setting */}

                <div className="px-4 py-3 fw-bold" style={{color : '#4F4F4F', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer', fontSize :16}} onClick={() => setActiveItem(10)} data-bs-toggle="collapse" data-bs-target=".theree-collapse" aria-expanded="false" aria-controls="multiCollapseExample3">
                  <span className="me-2 d-flex justify-content-between">
                    <span className='me-4'>Invoice Settings</span>
                    <span > <FaChevronDown size={18} /></span>
                  </span>
                </div>
           
                <div className="collapse theree-collapse" id="multiCollapseExample3">
                  <div className="card card-body border-0">
                    <div className="d-flex justify-content-between p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>Use camera to scan barcodes</span>
                        <span>
                         <Toggle value={useCamera} onChange={(val) => setUseCamera(val)} name={'camera-access'}/>
                        </span>
                    </div>
                    <Button onClick={() => {}} name="Save" className="w-100 btn-outline-success py-3 mx-2"/>

                  </div>
                </div>



                {/* Customer App */}

                <div className="px-4 py-3 fw-bold" style={{color : '#4F4F4F', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer', fontSize :16}} onClick={() => setActiveItem(10)} data-bs-toggle="collapse" data-bs-target=".four-collapse" aria-expanded="false" aria-controls="multiCollapseExample4">
                  <span className="me-2 d-flex justify-content-between">
                    <span className='me-4'>Customer App</span>
                    <span > <FaChevronDown size={18} /></span>
                  </span>
                </div>
           
                <div className="collapse four-collapse" id="multiCollapseExample4">
                  <div className="card card-body border-0">
                    <div className="d-flex justify-content-between p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>Use camera to scan barcodes</span>
                        <span>
                         <Toggle value={useCamera} onChange={(val) => setUseCamera(val)} name={'camera-access'}/>
                        </span>
                    </div>
                    <Button onClick={() => {}} name="Save" className="w-100 btn-outline-success py-3 mx-2"/>

                  </div>
                </div>



                <div className="px-4 py-3 fw-bold" style={{color : '#4F4F4F', backgroundColor : activeItem === 10 ? '#F0F9F0': '', cursor : 'pointer', fontSize :16}} onClick={() => setActiveItem(10)} data-bs-toggle="collapse" data-bs-target=".five-collapse" aria-expanded="false" aria-controls="multiCollapseExample5">
                  <span className="me-2 d-flex justify-content-between">
                    <span className='me-4'>Others</span>
                    <span > <FaChevronDown size={18} /></span>
                  </span>
                </div>
           
                <div className="collapse five-collapse" id="multiCollapseExample5">
                  <div className="card card-body border-0">
                    <div className="d-flex justify-content-between p-3 px-4 fw-bold" style={{fontSize : 16, color : '#4F4F4F'}}>
                        <span>Use camera to scan barcodes</span>
                        <span>
                         <Toggle value={useCamera} onChange={(val) => setUseCamera(val)} name={'camera-access'}/>
                        </span>
                    </div>
                    <Button onClick={() => {}} name="Save" className="w-100 btn-outline-success py-3 mx-2"/>

                  </div>
                </div>


             </>
          </div>
       </div>
       
     </div>
    </>
  )
}
