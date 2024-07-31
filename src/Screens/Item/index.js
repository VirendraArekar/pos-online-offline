import React, {useState} from 'react';
import Navbar from '../../Components/Navbar';
import { BiCategory, BiListUl, BiPurchaseTag } from "react-icons/bi";
import Divider from '../../Components/Divider';
import { productCategories } from '../../Data/dummy';

export default function Item() {
  const categories = ['Products','Categories','Dicounts'];
  const [activeItem, setActiveItem] = useState(0)
  return (
    <>
     <Navbar screen={'items'} />
     <div className="container-fluid p-0 m-0">
       <div className="row m-0 p-0 w-100">
          <div className="col-sm-4 col-md-4 col-lg-4 m-0 p-0 text-secondary" style={{fontSize : 16}}>

              {
                categories.map((category, key) => {
                  return(
                    <>
                      <div key={key} className="px-3 py-3" style={{color : activeItem === key ? '#4CAF50': '#4F4F4F', backgroundColor : activeItem === key ? '#F0F9F0': '', cursor : 'pointer'}} onClick={() => setActiveItem(key)}>
                        {
                          key === 0 ?
                          <span className="me-3"><BiListUl  size={24} /></span>
                          : key === 1 ?
                          <span className="me-3"><BiCategory size={24} /></span>
                          :
                          <span className="me-3"><BiPurchaseTag  size={24} /></span>
                        }
                        {category}
                      </div>
                      <Divider />
                    </>
                  )
                })
              }
           
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 m-0 p-0">
              {
                productCategories.map((product, key) => {
                  return(
                    <>
                      <div className='px-5 py-2 justify-content-center align-content-center align-items-center' key={key}>
                          <div className="d-flex justify-content-between" style={{fontSize : 14}}>
                            <span className='d-flex justify-content-center'>
                              <img src={require(`../../Data/images/items/${product?.image}`)}  alt={product?.name} style={{width : 33, height : 33, alignSelf : 'center'}} />
                              
                               <div className='mx-3' style={{display : 'inline-block', lineHeight : 1.48}}>
                                {product?.name}
                                <br></br>
                                <span style={{color : '#9FA4B2', lineHeight : 0.5}}>{product?.stock} in stack</span>
                               </div>
                            </span>
                            <span>
                              {
                                product?.varient === 0 ?
                                <span>₹{product?.price}.00</span>
                                :
                                <span>{product?.varient} varient</span>
                              }
                            </span>
                          </div>
                      </div>
             
                        <Divider/>
                     
                    </>
                  )
                })
              }
          </div>
       </div>
     </div>
    </>
  )
}
