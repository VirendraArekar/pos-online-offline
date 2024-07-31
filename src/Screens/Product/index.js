import React, {useEffect, useState} from 'react';
import Navbar from '../../Components/Navbar';
import {bills, customerList, products} from '../../Data/dummy';
import './style.css';
import Divider from '../../Components/Divider';
import {FaCheck, FaChevronDown, FaChevronRight, FaEllipsisVertical, FaRegSquareFull} from "react-icons/fa6";
import {BsCalendar2Event, BsChatSquareText, BsGrid, BsHexagon, BsUpcScan} from "react-icons/bs";
import PosModal from '../../Components/PosModal';
import ModalNavbar from '../../Components/ModalNavbar';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import Radio from '../../Components/Radio';
import Toggle from '../../Components/Toggle';
import {FaRegCircle} from "react-icons/fa";
import {TiStarburstOutline} from "react-icons/ti";
import {FiPhone, FiTrash} from "react-icons/fi";
import {MdMailOutline, MdOutlineLocationOn} from "react-icons/md";
import {RiCoinLine, RiShoppingCartLine} from "react-icons/ri";
import useDocumentTitle from '../../Hooks/useDocumentTitle';
import TextArea from '../../Components/TextArea';
// import { getCategories } from '../../Services/dbService';

export default function Product() {
    const [bottomMenus, setBottomMenus] = useState(['Fruits', 'Vegitables', 'Bakes', 'Snacks', 'Milk', 'Oats', 'Milk', 'Oats'])
    const [activeMenu, setActiveMenu] = useState(null);
    const [customerModal, setCustomerModal] = useState(false);
    const [ticketModal, setTicketModal] = useState(false);
    const toggleButton = ['Name', 'Amount', 'Time', 'Employee'];
    const [activeToggleButton, setActiveToggleButton] = useState(0);
    const [productModel, setProductModal] = useState(false);
    const [productAction, setProductAction] = useState('');
    const colorPicker = ['#C4C4C4', '#E15241', '#D63864', '#F19D38', '#D0DB59', '#67AD5B', '#4994EC', '#8F31AA'];
    const [shape, setShape] = useState('square')
    const [selectedColor, setSelectedColor] = useState('#C4C4C4');
    const [customerProfileModal, setCustomerProfileModal] = useState(false);
    const [editCustomerModal, setEditCustomerModal] = useState(false);
    const [ticketAction, setTicketAction] = useState(null);
    const [editTicketModal, setEditTicketModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null)
    const [persons, setPersons] = useState([
        {
            label : 'Virendra',
            value : 'Virendra'
        },
        {
            label : 'Chetan',
            value : 'CHetan'
        },
        {
            label : 'Tejali',
            value : 'Tejali'
        },
        {
            label : 'Karan',
            value : 'Karan'
        },
        {
            label : 'Adnya',
            value : 'Adnya'
        }
    ]);
    const [assignBillModal, setAssignBillModal] = useState(false);

    const options = bills.map((bill) => {
        return {
            label : `${bill?.name} ${bill?.time} - ${bill?.amount} : User 1`,
            value : bill?.name
        }
    })

    useDocumentTitle(`POS Products`)

    useEffect(() => {

    }, [])

    const changeMenu = (inx) => {
        setActiveMenu(inx)
    }

    const randomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    const adjustMenu = () => {
        let menu = bottomMenus.slice(0, 2);
        bottomMenus.splice(bottomMenus.length - 1, 2);
        let finalArray = bottomMenus.concat(menu);
        setBottomMenus(finalArray)
    }

    return (<div className='container-fluid p-0 m-0'>
            <Navbar screen='products' onCustomerClick={(val) => setCustomerModal(val)}
                    onTicketClick={(val) => setTicketModal(val)} onProductClick={(action) => {
                setProductModal(true)
                setProductAction(action)
            }}/>
            <div className='container-fluid m-0 p-0' style={{}}>
                <div className='row m-0 p-0'>
                    <div className='col-sm-8 col-md-8 col-lg-8 m-0 p-0'
                         style={{height: window.innerHeight - 58, position: 'relative'}}>
                        <div className='row m-0 p-0'>
                            {products.map((product, key) => {
                                return (<div className='col-sm-4 col-md-2 col-lg-2 m-0 p-0'>
                                        <div className=' border m-3 box' style={{
                                            cursor: 'pointer',
                                            position: 'relative',
                                            height: '100px !important',
                                            widows: '114px !important'
                                        }}>
                                            <img src={require(`../../Data/images/${product?.image}`)}
                                                 alt={product?.name} className='w-100' style={{
                                                objectFit: 'cover',
                                                height: '100px !important',
                                                widows: '114px !important'
                                            }}/>

                                            <div className='text-start p-1 px-3 pb-2 text-light' style={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'grey',
                                                opacity: 0.4,
                                                height: '40%',
                                                fontSize: 14,
                                                fontWeight: '700'
                                            }}>
                                                <span>{product?.category}</span>
                                                {product?.varient !== 0 ? <>
                                                    <br></br>
                                                    <span>{product?.varient} varient</span>
                                                </> : <>
                                                    <br></br>
                                                    <span>{product?.price}</span>
                                                </>}


                                            </div>
                                        </div>

                                    </div>)
                            })

                            }
                            <div className=''
                                 style={{position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%'}}>
                                <div className='row'>
                                    <div className='col-sm-6 col-md-2 col-lg-2 text-center p-3' style={{
                                        color: activeMenu === null ? '#4CAF50' : '#9FA4B2',
                                        fontWeight: '700',
                                        borderTop: activeMenu === null ? '4px solid #4CAF50' : ''
                                    }} onClick={() => changeMenu(null)}>
                                        <BsGrid size={26} color={''}/>
                                    </div>
                                    {bottomMenus.slice(0, 5).map((menu, key) => {
                                        return (<div className='col-sm-6 col-md-2 col-lg-2 text-center p-3' key={key}
                                                     style={{
                                                         fontSize: 16,
                                                         cursor: 'pointer',
                                                         color: activeMenu === key ? '#4CAF50' : '#9FA4B2',
                                                         borderTop: activeMenu === key ? '4px solid #4CAF50' : ''
                                                     }} onClick={() => changeMenu(key)}>
                                                {menu}
                                            </div>)
                                    })}
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 0,
                                    color: '#9FA4B2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    cursor: 'pointer'
                                }} className='px-1 py-2' onClick={adjustMenu}>
                                    <FaChevronRight size={26}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 col-md-4 col-lg-4 m-0 p-0 border-start'
                         style={{height: window.innerHeight - 58, position: 'relative'}}>
                        <div className='p-3 justify-content-center align-content-center align-items-center'>
                            <div className="d-flex justify-content-between" style={{fontSize: 16}}>
                                <span>Dine in</span>
                                <span>
                       <FaChevronDown size={24}/>
                     </span>
                            </div>
                        </div>
                        <Divider/>

                        <div className='p-3 justify-content-center align-content-center align-items-center'>
                            <div className="d-flex justify-content-between" style={{fontSize: 16}}>
                     <span>
                      Bread X 2 
                      </span>
                                <span>
                       80.00
                     </span>
                            </div>
                            <div className="d-flex justify-content-between text-secondary" style={{fontSize: 12}}>

                                <div className='text-secondary'>
                                    <span style={{lineHeight: 1.7}}>Normal</span>
                                </div>

                                <span>
                     
                     </span>
                            </div>
                            <div className="d-flex justify-content-between text-secondary" style={{fontSize: 12}}>

                                <div className='text-secondary'>
                                    <span style={{lineHeight: 1.7}}>+ Soft Drink(Medium, Large)</span><br></br>
                                    <span style={{lineHeight: 1.7}}>Comment goes here</span>
                                </div>

                                <span>
                       105.00
                     </span>
                            </div>
                        </div>
                        <Divider/>
                        <div className='p-3 justify-content-center align-content-center align-items-center'>
                            <div className="d-flex justify-content-between" style={{fontSize: 16}}>
                     <span>
                      Discounts
                      </span>
                                <span>
                       50.00
                     </span>
                            </div>
                            <div className="d-flex justify-content-between" style={{fontSize: 16}}>
                     <span>
                      Tax <span className='text-secondary'>(Included)</span>
                      </span>
                                <span>
                       50.00
                     </span>
                            </div>
                        </div>
                        <Divider/>
                        <div className='p-3 justify-content-center align-content-center align-items-center'>
                            <div className="d-flex justify-content-between fw-bold" style={{fontSize: 16}}>
                     <span className=''>
                      Total
                      </span>
                                <span style={{color: '#4CAF50'}}>
                       150.00
                     </span>
                            </div>
                        </div>

                        <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%'}}>
                            <div
                                className='row my-3 mx-3 border-0 rounded text-center text-light justify-content-center align-content-center align-items-center '
                                style={{backgroundColor: "#4CAF50", fontSize: 16}}>
                                <div className='col p-2 align-self'>
                                    Open Bills
                                </div>
                                <div className='col p-2'>
                                    <span style={{fontSize: 12}}>Charges</span> <br></br>
                                    100.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PosModal name={'Add customer to bill'} onChange={(val) => setCustomerModal(val)} show={customerModal}>
                <ModalNavbar name="assign customer"/>
                <div style={{height: window.innerHeight - 90, position: 'relative'}}>
                    {customerList.map((cust, key) => {
                        return (<>
                                <div className="d-flex justify-content-between px-4 py-2"
                                     style={{fontSize: 16, color: '#4F4F4F', cursor: 'pointer'}} onClick={() => {
                                    setCustomerModal(false);
                                    setCustomerProfileModal(true);
                                }}>
                                    <div className=''>
                      <span style={{width: 30, height: 30, backgroundColor: randomColor(), padding: '8px 13px'}}
                            className='border-0 rounded-circle text-light align-middle'>
                        {cust?.name[0]?.toUpperCase?.()}
                      </span>
                                        <div className='mx-3 d-inline-block align-middle'>
                                            {cust?.name}
                                            <div style={{fontSize: 13, color: '#9FA4B2'}}>{cust?.email}</div>
                                        </div>
                                    </div>
                                    <span>
                      <FaEllipsisVertical size={20} color='#4F4F4F'/>
                    </span>
                                </div>
                                <Divider/>
                            </>)
                    })}
                    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0}} className='text-center py-4'>
                        <Button name="+ Add New Customer" onClick={() => {
                        }} className="btn-green px-4 py-3"/>
                    </div>
                </div>
            </PosModal>

        <PosModal name={'Assign Bill To'} onChange={(val) => setAssignBillModal(val)} show={assignBillModal}>
            <ModalNavbar name="assign customer to bill"/>

            <div className='px-4 py-3'>
                <Select options={persons} className={``} name={'Customers'} searchable={true} onChange={(value) => {
                    setSelectedTicket(value);
                }} value={selectedTicket}/>
            </div>
            <Divider/>
            <div style={{height: window.innerHeight - 90, position: 'relative'}}>
                {persons.map((person, key) => {
                    return (<>
                        <div className="d-flex justify-content-between px-4 py-3 align-middle"
                             style={{fontSize: 18, color: '#4F4F4F'}} key={key}>
                            <div className=''>
                                  <span style={{}} className='align-middle'>
                                      <input type="radio" name="radio" style={{width: 20, height: 20}} className={`my-1`}
                                             onChange={() => setTicketAction(ticketAction === null ? 'Edit' : null)}/>
                                  </span>
                                <div className='mx-3 d-inline-block align-middle'>
                                    {person?.label}
                                </div>
                            </div>
                            <span>

                    </span>
                        </div>
                        <Divider/>
                    </>)
                })}
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0}} className='text-center py-4'>
                    <Button name="+ Add New Customer" onClick={() => {
                    }} className="btn-green px-4 py-3"/>
                </div>
            </div>
        </PosModal>

        <PosModal name={'ticket'} onChange={(val) => setTicketModal(val)} show={ticketModal}>
            <ModalNavbar name="open ticket" action={ticketAction} onChange={(value) => setTicketAction(value)}
                         changeAction={(value) => {
                             if (value === 'edit') {
                                     setTicketModal(false);
                                     setEditTicketModal(true);
                                 }
                             }}/>
                <div style={{height: window.innerHeight - 90, position: 'relative'}}>
                    <div className='px-5 py-3'>
                        <div className='text-center border-rounded'>
                            {toggleButton.map((btn, key) => {
                                return (<div style={{
                                        backgroundColor: activeToggleButton === key ? '#4CAF50' : '#F3F3F3',
                                        fontSize: 14,
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        color: activeToggleButton === key ? '#ffffff' : ''
                                    }} className='d-inline-block py-2 px-4' key={key} onClick={() => {
                                        setActiveToggleButton(key)
                                    }}>
                                        {btn}
                                    </div>)
                            })}

                        </div>
                    </div>
                    <Divider/>

                    <div className='px-4 py-3 justify-content-center align-content-center align-items-center'>
                        <div className="d-flex justify-content-between" style={{fontSize: 17, color: '#4CAF50'}}>
                            <span>My Bills</span>
                            <span>
                    
                            </span>
                        </div>
                    </div>
                    <Divider/>
                    {bills.map((bill, key) => {
                        return (<>
                                <div className="d-flex justify-content-between px-4 py-3"
                                     style={{fontSize: 18, color: '#4F4F4F'}} key={key}>
                                    <div className=''>
                      <span style={{}} className='align-middle'>
                          <input type="radio" name="radio" style={{width: 24, height: 24}}
                                 onChange={() => setTicketAction(ticketAction === null ? 'Edit' : null)}/>
                      </span>
                                        <div className='mx-3 d-inline-block align-middle'>
                                            {bill?.name}-{bill?.time}
                                            <div style={{fontSize: 13, color: '#9FA4B2'}}>{bill?.duration}</div>
                                        </div>
                                    </div>
                                    <span>
                    ₹{bill?.amount}
                    </span>
                                </div>
                                <Divider/>
                            </>)
                    })}
                    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0}} className='text-center py-4'>

                    </div>
                </div>
            </PosModal>

            <PosModal name={'ticket'} onChange={(val) => setEditTicketModal(val)} show={editTicketModal}>
                <ModalNavbar name="edit ticket" action={ticketAction} onChange={(value) => setTicketAction(value)} onMoveClick={() => {
                    setEditTicketModal(false);
                    setAssignBillModal(true)
                }}/>
                <div style={{height: window.innerHeight - 90, position: 'relative'}}>
                    <div className='px-4 py-3'>
                        <Select options={options} className={``} name={'Bill'} searchable={true} onChange={(value) => {
                            setSelectedTicket(value);
                        }} value={selectedTicket}/>
                    </div>
                    <div className='px-4 py-3 pt-0 justify-content-center align-content-center align-items-center'>
                        <div className="d-flex justify-content-between" style={{fontSize: 17, color: '#4CAF50'}}>
                            <span>Select Bills To</span>
                            <span>

                            </span>
                        </div>
                    </div>
                    <Divider/>
                    {bills.map((bill, key) => {
                        let selected = selectedTicket?.value === bill?.name ? 'checked' : '';
                        return (<>
                                <div className="d-flex justify-content-between px-4 py-3"
                                     style={{fontSize: 18, color: '#4F4F4F'}} key={key}>
                                    <div className=''>
                                        {console.log('SELECTEWD -----',selected)}
                                      <span style={{}} className='align-middle'>
                                          <input type="checkbox" checked={selected} name="radio" style={{width: 24, height: 24}}
                                                 onChange={() => setTicketAction(ticketAction === null ? 'Edit' : null)}/>
                                      </span>
                                        <div className='mx-3 d-inline-block align-middle'>
                                            {bill?.name}-{bill?.time}
                                            <div style={{fontSize: 13, color: '#9FA4B2'}}>{bill?.duration}</div>
                                        </div>
                                    </div>
                                    <span>
                                    ₹{bill?.amount}
                                    </span>
                                </div>
                                <Divider/>
                            </>)
                    })}
                    <div style={{position: 'absolute', bottom: 0, left: 0, right: 0}} className='text-center py-4'>

                    </div>
                </div>
            </PosModal>

            <PosModal name={`${productAction} product`} onChange={(val) => setProductModal(val)} show={productModel}
                      size="xl">
                <ModalNavbar name="product" action="Add"/>
                <div className='row'>
                    <div className='offset-2 col-8 offset-2 border my-4 mb-3'>
                        <div className='row py-3'>
                            <div className='col-12 py-2'>
                                <Input value="Fruits" placeholder="Name" onChange={(text) => {
                                }} name="name"/>
                            </div>
                            <div className='col-12 py-2'>
                                <Select value="Vegitable" placeholder="Category" onChange={(text) => {
                                }} name="category" options={[{value: 'Vegitable', label: 'Vegitable'}]}/>
                            </div>
                            <div className='col-12 pt-4 pb-3'>
                                <span className='me-4' style={{fontWeight: 600}}>Sort By </span>
                                <Radio name="sortBy" cheched value="each" onChange={() => {
                                }} label="Each"/>

                                <Radio name="sortBy" value="weight" onChange={() => {
                                }} label="Weight"/>
                            </div>
                            <div className='col-6 py-2'>
                                <Input value="120.00" placeholder="Price" onChange={(text) => {
                                }} name="price"/>
                                <small className='text-secondary' style={{fontSize: 12}}>Leave this field blank to
                                    indicate price upoun sell</small>
                            </div>
                            <div className='col-6 py-2'>
                                <Input value="160.00" placeholder="Cost" onChange={(text) => {
                                }} name="cost"/>
                            </div>
                            <div className='col-6 py-2'>
                                <Input value="12000000" placeholder="SKU" onChange={(text) => {
                                }} name="sku"/>
                            </div>
                            <div className='col-6 py-2'>
                                <Input value="BCWH7943HBCV" placeholder="Bancode Number" onChange={(text) => {
                                }} name="barcode_number"/>
                            </div>
                        </div>
                    </div>

                    <div className='offset-2 col-8 offset-2 border mb-3 py-3'>
                        <label style={{fontWeight: 600}} className='text-green'>Inventory</label>
                        <div className='row py-3 align-items-center'>
                            <div className='col-3 py-2'>
                                <label style={{fontWeight: 500}} className='text-secondary'>Varient Name</label>
                            </div>
                            <div className='col-2 py-2'>
                                <label style={{fontWeight: 500}} className='text-secondary'>Price</label>
                            </div>
                            <div className='col-2 pt-2'>
                                <label style={{fontWeight: 500}} className='text-secondary'>Cost</label>
                            </div>
                            <div className='col-2 pt-2'>
                                <label style={{fontWeight: 500}} className='text-secondary'>SKU</label>
                            </div>
                            <div className='col-3 pt-2'>
                                <label style={{fontWeight: 500}} className='text-secondary'>Barcode</label>
                            </div>

                            <div className='col-3 py-2'>
                                <label style={{fontWeight: 500}} className=''>Organic</label>
                            </div>
                            <div className='col-2 py-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-3 pt-2'>
                                <Input value="S5D4V6DF1" placeholder="In Stock" onChange={(text) => {
                                }} name="stock" icon={<BsUpcScan size={22}/>}/>
                            </div>

                            <div className='col-3 py-2'>
                                <label style={{fontWeight: 500}} className=''>Hybrid</label>
                            </div>
                            <div className='col-2 py-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-3 pt-2'>
                                <Input value="S5D4V6DF1" placeholder="In Stock" onChange={(text) => {
                                }} name="stock" icon={<BsUpcScan size={22}/>}/>
                            </div>

                            <div className='col-3 py-2'>
                                <label style={{fontWeight: 500}} className=''>Imported</label>
                            </div>
                            <div className='col-2 py-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-3 pt-2'>
                                <Input value="S5D4V6DF1" placeholder="In Stock" onChange={(text) => {
                                }} name="stock" icon={<BsUpcScan size={22}/>}/>
                            </div>

                            <div className='col-3 py-2'>
                                <label style={{fontWeight: 500}} className=''>Organic-Imported</label>
                            </div>
                            <div className='col-2 py-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-3 pt-2'>
                                <Input value="S5D4V6DF1" placeholder="In Stock" onChange={(text) => {
                                }} name="stock" icon={<BsUpcScan size={22}/>}/>
                            </div>

                            <div className='col-3 py-2'>
                                <label style={{fontWeight: 500}} className=''>Hybrid-Imported</label>
                            </div>
                            <div className='col-2 py-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-2 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                            <div className='col-3 pt-2'>
                                <Input value="S5D4V6DF1" placeholder="In Stock" onChange={(text) => {
                                }} name="stock" icon={<BsUpcScan size={22}/>}/>
                            </div>

                            <div className='col-12'>
                                <Button name="Show All Varient" className="btn-outline-success w-100 my-3 py-2"/>
                            </div>
                        </div>
                    </div>

                    <div className='offset-2 col-8 offset-2 border mb-3 py-3'>
                        <label style={{fontWeight: 600}} className='text-green'>Varients</label>
                        <div className='row py-3 align-items-center'>
                            <div className='col-4 py-2'>
                                <label style={{fontWeight: 500}} className=''>Track Story</label>
                            </div>
                            <div className='col-2 py-2'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                            <div className='col-6 pt-2'>
                                <Input value="60" placeholder="In Stock" onChange={(text) => {
                                }} name="stock"/>
                            </div>
                        </div>
                    </div>

                    <div className='offset-2 col-8 offset-2 border mb-3 py-3'>
                        <label style={{fontWeight: 600}} className='text-green'>Adds On</label>
                        <div className='row py-3 align-items-center'>
                            <div className='col-4 py-3 align-items-center'>
                                <label style={{fontWeight: 500}} className=''>Cheeze</label>
                                <label style={{fontWeight: 500, fontSize: 12, display: 'block'}}
                                       className='text-secondary'>200GM,500GM,900GM</label>
                            </div>
                            <div className='col-2 py-3'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                            <div className='col-4 py-3 align-items-center'>
                                <label style={{fontWeight: 500}} className=''>Ketchup</label>
                                <label style={{fontWeight: 500, fontSize: 12, display: 'block'}}
                                       className='text-secondary'>Tomato,Chilli</label>
                            </div>
                            <div className='col-2 py-3'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                            <div className='col-4 py-3 align-items-center'>
                                <label style={{fontWeight: 500}} className=''>Soft Drink</label>
                                <label style={{fontWeight: 500, fontSize: 12, display: 'block'}}
                                       className='text-secondary'>Small,Medium,Large</label>
                            </div>
                            <div className='col-2 py-3'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                        </div>
                    </div>

                    <div className='offset-2 col-8 offset-2 border mb-3 py-3'>
                        <label style={{fontWeight: 600}} className='text-green'>Taxes</label>
                        <div className='row py-3 align-items-center'>
                            <div className='col-4 py-3 align-items-center'>
                                <label style={{fontWeight: 500}} className=''>18 Percentage, 18%</label>
                                <label style={{fontWeight: 500, fontSize: 12, display: 'block'}}
                                       className='text-secondary'>Not applicable for 5 dinner option</label>
                            </div>
                            <div className='col-2 py-3'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                            <div className='col-4 py-3 align-items-center'>
                                <label style={{fontWeight: 500}} className=''>5 Percentage, 5%</label>
                                {/* <label style={{fontWeight : 500, fontSize :12, display : 'block'}} className='text-secondary'>Tomato,Chilli</label> */}
                            </div>
                            <div className='col-2 py-3'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                            <div className='col-4 py-3 align-items-center'>
                                <label style={{fontWeight: 500}} className=''>12 Percentage, 12%</label>
                                {/* <label style={{fontWeight : 500, fontSize :12, display : 'block'}} className='text-secondary'>Small,Medium,Large</label> */}
                            </div>
                            <div className='col-2 py-3 float-right'>
                                <Toggle onChange={() => {
                                }} value="" name=""/>
                            </div>
                        </div>
                    </div>

                    <div className='offset-2 col-8 offset-2 border mb-3 py-3'>
                        <label style={{fontWeight: 600}} className='text-green'>Presentation POS</label>
                        <div className='row py-3 align-items-center'>
                            <div className='col-12 py-2'>
                                <Radio name="pos" checked value="each" onChange={() => {
                                }} label="Color and Shape"/>
                                <Radio name="pos" value="weight" onChange={() => {
                                }} label="Image"/>
                            </div>
                            <div className='col-12 py-2'>
                                {colorPicker.map((color, key) => {
                                    return (<div className='border mx-2 d-inline-block color-box' key={key}
                                                 style={{backgroundColor: color}}
                                                 onClick={() => setSelectedColor(color)}>
                                            {color === selectedColor &&
                                                <FaCheck style={{position: 'absolute', top: '20%', left: '25%'}}
                                                         size={26} color="#ffffff"/>}
                                        </div>)
                                })}
                            </div>
                            <div className='col-12 py-2 '>
                                <div style={{position: 'relative', display: 'inline-block', cursor: 'pointer'}}
                                     onClick={() => setShape('square')}>
                                    <FaRegSquareFull size={44} className='mx-2'/>
                                    {shape === 'square' &&
                                        <FaCheck style={{position: 'absolute', top: '20%', left: '30%'}} size={26}
                                                 color="grey"/>}
                                </div>
                                <div style={{position: 'relative', display: 'inline-block', cursor: 'pointer'}}
                                     onClick={() => setShape('circle')}>
                                    <FaRegCircle size={46} className='mx-2'/>
                                    {shape === 'circle' &&
                                        <FaCheck style={{position: 'absolute', top: '20%', left: '30%'}} size={26}
                                                 color="grey"/>}
                                </div>
                                <div style={{position: 'relative', display: 'inline-block', cursor: 'pointer'}}
                                     onClick={() => setShape('star')}>
                                    <TiStarburstOutline size={55} className='mx-2'/>
                                    {shape === 'star' &&
                                        <FaCheck style={{position: 'absolute', top: '25%', left: '32%'}} size={26}
                                                 color="grey"/>}
                                </div>
                                <div style={{position: 'relative', display: 'inline-block', cursor: 'pointer'}}
                                     onClick={() => setShape('hexa')}>
                                    <BsHexagon size={46} className='mx-2'/>
                                    {shape === 'hexa' &&
                                        <FaCheck style={{position: 'absolute', top: '20%', left: '30%'}} size={26}
                                                 color="grey"/>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='offset-2 col-8 offset-2 border mb-3 py-2 text-center text-danger align-items-center '
                        style={{cursor: 'pointer'}}>
          <span className='align-items-center'>
          <FiTrash size={24} className='mb-1'/>
          <span className='mx-2 ' style={{fontSize: 18}}>Delete Item</span>
          </span>
                    </div>
                </div>
            </PosModal>

            <PosModal name={'Customer Profile'} onChange={(val) => setCustomerProfileModal(val)}
                      show={customerProfileModal} size="md">
                <ModalNavbar name="customer profile"/>
                <div style={{position: 'relative'}}>
                    <div className=''>
                        <div className='row p-4 ps-4  pe-2 my-0 pb-3'>
                            <div className='col-2'>
                                <div className='justify-content-center border' style={{
                                    display: 'inline-block',
                                    width: 60,
                                    height: 60,
                                    backgroundColor: randomColor(),
                                    borderRadius: 10,
                                    position: 'relative'
                                }}>
                                    <span className='text-light' style={{
                                        position: 'absolute', top: '20%', left: '35%', fontSize: 24
                                    }}>{"Virendra Arekar".charAt(0).toUpperCase()}</span>
                                </div>
                            </div>
                            <div className='col-10 align-self-center'>
                                <div className='align-self-center'>
                                    <span className='' style={{fontSize: 16, fontWeight: 500}}>Virendra M. Arekar</span>
                                </div>
                            </div>
                        </div>

                        <Divider/>
                        <div className=''>
                            <div className='align-self-center py-2 pt-4 px-4'>
                                <MdMailOutline size={20} color={'#4CAF50'}/>
                                <span className='text-secondary mx-3'>virendra.arekar@gmail.com</span>
                            </div>
                            <div className='align-self-center py-2 px-4'>
                                <FiPhone size={20} color={'#4CAF50'}/>
                                <span className='text-secondary mx-3'>848398XXXX</span>
                            </div>
                            <div className='align-self-center py-2 px-4'>
                                <MdOutlineLocationOn size={20} color={'#4CAF50'}/>
                                <span
                                    className='text-secondary mx-3'>No. 23/12, Sample Address, Sample, CH 600765 </span>
                            </div>
                            <div className='align-self-center py-2 px-4'>
                                <BsUpcScan size={20} color={'#4CAF50'}/>
                                <span className='text-secondary mx-3'>AG54FDS54F</span>
                            </div>
                            <div className='align-self-center py-2 px-4'>
                                <BsChatSquareText size={20} color={'#4CAF50'}/>
                                <span className='text-secondary mx-3'>No Comments related to Customer...</span>
                            </div>
                            <Divider className="py-0 my-2"/>
                            <div className='d-flex justify-content-between align-self-center py-1 pt-2 px-4'>
                                <div className='align-self-center'>
                                    <div style={{display: 'inline-block'}} className='align-middle'>
                                        <RiCoinLine size={20} color={'#4CAF50'} className='my-2'/>
                                    </div>
                                    <div className='mx-3' style={{display: 'inline-block'}}>
                                        <div style={{lineHeight: 0.6}}>50.00</div>
                                        <span className='text-secondary'
                                              style={{lineHeight: 0.6, fontSize: 12}}>Points</span>
                                    </div>
                                </div>
                                <div className='' style={{color: '#4CAF50'}}>
                                    REDEEM
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-self-center py-1 px-4'>
                                <div className='align-self-center'>
                                    <div style={{display: 'inline-block'}} className='align-middle'>
                                        <RiShoppingCartLine size={20} color={'#4CAF50'} className='my-2'/>
                                    </div>
                                    <div className='mx-3' style={{display: 'inline-block'}}>
                                        <div style={{lineHeight: 0.6}}>3</div>
                                        <span className='text-secondary'
                                              style={{lineHeight: 0.6, fontSize: 12}}>Visits</span>
                                    </div>
                                </div>
                                <div className='' style={{color: '#4CAF50'}}>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-self-center py-1 px-4'>
                                <div className='align-self-center'>
                                    <div style={{display: 'inline-block'}} className='align-middle'>
                                        <BsCalendar2Event size={20} color={'#4CAF50'} className='my-2'/>
                                    </div>
                                    <div className='mx-3' style={{display: 'inline-block'}}>
                                        <div style={{lineHeight: 0.6}}>03/02/2022, 18:30</div>
                                        <span className='text-secondary' style={{lineHeight: 0.6, fontSize: 12}}>Last Visit</span>
                                    </div>
                                </div>
                                <div className='' style={{color: '#4CAF50'}}>
                                </div>
                            </div>

                        </div>
                        <div className='text-center my-2 mb-4'>
                            <Button name="Edit Customer" onClick={() => {
                                setCustomerProfileModal(false);
                                setEditCustomerModal(true)
                            }} className="btn btn-outline-success py-2 px-4"/>
                            <Button name="View Purchases" onClick={() => {
                            }} className="btn btn-outline-success mx-3 py-2 px-4"/>
                        </div>
                    </div>

                </div>
            </PosModal>

            <PosModal name={'Edit Customer'} onChange={(val) => setEditCustomerModal(val)} show={editCustomerModal}
                      size="lg">
                <ModalNavbar name="edit customer"/>
                <div style={{position: 'relative'}}>
                    <div className='row my-4 px-4'>
                        <div className='col-12'>
                            <Input value="Customer Name" placeholder="Customer Name" onChange={(text) => {
                            }} name="name"/>
                        </div>
                        <div className='col-6 my-3'>
                            <Input value="Email" placeholder="Email" onChange={(text) => {
                            }} name="email"/>
                        </div>
                        <div className='col-6 my-3'>
                            <Input value="Phone" type="number" placeholder="Phone" onChange={(text) => {
                            }} name="phone"/>
                        </div>
                        <div className='col-12 my-1 mt-0'>
                            <TextArea value="Address Line 1,
sample Address line 2,
sample Address line 3" rows="3" placeholder="Address" onChange={(text) => {
                            }} name="address"/>
                        </div>
                        <div className='col-6 my-1'>
                            <Input value="City" placeholder="City" onChange={(text) => {
                            }} name="city"/>
                        </div>
                        <div className='col-6 my-1'>
                            <Input value="State" placeholder="State" onChange={(text) => {
                            }} name="state"/>
                        </div>
                        <div className='col-6 my-2'>
                            <Input value="64854" min="6" max="6" type="number" placeholder="Postal Code"
                                   onChange={(text) => {
                                   }} name="postal_code"/>
                        </div>
                        <div className='col-6 my-2'>
                            <Input value="India" placeholder="Country" onChange={(text) => {
                            }} name="country"/>
                        </div>
                        <div className='col-6 my-1'>
                            <Input value="0001" min="6" max="6" type="number" placeholder="Customer Code"
                                   onChange={(text) => {
                                   }} name="customer_code"/>
                        </div>
                        <div className='col-6 my-1'>
                            <Input value="Notes ...." placeholder="Note" onChange={(text) => {
                            }} name="note"/>
                        </div>

                        <div class="d-grid gap-2 col-6 mx-auto my-4">
                            <Button name="Delete Item" onClick={() => {
                            }} className="btn btn-block btn-danger py-3"/>
                        </div>

                    </div>

                </div>
            </PosModal>
        </div>)
}
