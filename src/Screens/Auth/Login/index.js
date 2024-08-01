import React, { useState } from 'react'
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import SlideOne from '../../../Data/images/slide1.jpg';
import SlideTwo from '../../../Data/images/slide2.jpg';
import SlideThree from '../../../Data/images/slide3.jpg';
import SlideFour from '../../../Data/images/slide4.jpg';
import SlideFive from '../../../Data/images/slide5.jpg';
import './style.css';
import useDocumentTitle from '../../../Hooks/useDocumentTitle';
import { validation } from '../../../utils/validation';
import { postApi } from '../../../Services/apiService';
// import axios from 'axios';
// import { BASE_URL } from '../../../utils/constant';
// import { fetchPost } from '../../../Services/restService';
import { toast } from 'react-toastify';
import { setLocalData } from '../../../utils/helper';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate(); 
  useDocumentTitle('POS - Login')
  // const [phone, setPhone] = useState("");
  const [businessList, setBusinessList] = useState([]);
  const [businessType, setBusinessType] = useState([]);
  const [businessId, setBusinessId] = useState('');
  const [businessTypeId, setBusinessTypeId] = useState('')
  const [data, setData] = useState({
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  })

  const onInputChange = (e) => {
    let value = e.target.value;
    setData(prevState => ({
      ...prevState,
      [e.target.name]: value,
    }))
  }
  const onSubmit = (e) => {

    e.preventDefault();
    setData(prevState => ({
      ...prevState,
      emailError: '',
      passwordError: '',
      businessError:'',
      businessTypeError:''
    }))

    let error = false;
    if(businessList.length === 0){
      if (!validation('email', 'Email', data.email)?.validate) {
        setData(prevState => ({
          ...prevState,
          emailError: validation('email', 'Email', data.email)?.message
        }))
        error = true;
      }
      if (!validation('password', 'Password', data.password)?.validate) {
        setData(prevState => ({
          ...prevState,
          passwordError: validation('password', 'Password', data.password)?.message
        }))
        error = true;
      }
  
      let newData = {
        email: data.email,
        password: data.password,
        channelDeviceId: '123'
      }
  
      if (!error)
        postApi('/account/logon', newData).then((data) => {
          if (!data.responseCode) {
            toast.success('Data retrive successfully');
            setBusinessList(data.listBusiness);
          }
        }).catch((err) => {
          toast.danger('Something went wrong');
        })
    }
    else{
      if (businessId === '') {
        setData(prevState => ({
          ...prevState,
          businessError: 'Field is required!'
        }))
        error = true;
      }
      if (businessTypeId === '') {
        setData(prevState => ({
          ...prevState,
          businessTypeError: 'Field is required!'
        }))
        error = true;
      }
  
      let newData = {
        email: data.email,
        password: data.password,
        channelDeviceId: '123',
        businessId: parseInt(businessId),
        posId :parseInt(businessTypeId),
        fcmToken: "cashier registration code...",
        channelversion:"1"
      }

      if (!error)
        postApi('/account/Activate/POS', newData).then((data) => {
          if (!data.responseCode) {
            toast.success('Login successfully');
            setLocalData('permissions', data.permissions, true)
            setLocalData('token',data.token);
            navigate('/')
            console.log(data)
          }
        }).catch((err) => {
          console.log('COME', err)
          toast.danger('Something went wrong');
        })
    }
  }
  return (
    <div className="container-fluid p-0 m-0">
      <div className='row align-items-center vh-100 p-0 m-0'>
        <div className='col-4 p-0 m-0 vh-100 position-relative'>

          <div className='text-center position-absolute' style={{ zIndex: 999, left: 0, right: 0, top: 30 }}>
            <svg width="150" height="39" viewBox="0 0 512 132" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M109.786 131.401H106.959C109.02 131.401 110.669 129.752 110.669 127.691V3.71057C110.669 1.64914 109.02 0 106.959 0H109.786C113.32 0 116.206 2.886 116.206 6.41987V124.981C116.206 128.574 113.32 131.401 109.786 131.401Z" fill="#375BD7"></path><path d="M6.41988 0.0588379H106.841C110.375 0.0588379 113.261 2.94483 113.261 6.47871V125.04C113.261 128.574 110.375 131.46 106.841 131.46H6.41988C2.886 131.46 0 128.574 0 125.04V6.47871C0 2.88594 2.8271 0.0588379 6.41988 0.0588379Z" fill="white"></path><path d="M6.41988 0.0588379H99.7732C103.307 0.0588379 106.193 2.94483 106.193 6.47871V125.04C106.193 128.574 103.307 131.46 99.7732 131.46H6.41988C2.886 131.46 0 128.574 0 125.04V6.47871C0 2.88594 2.8271 0.0588379 6.41988 0.0588379Z" fill="#7898FF"></path><path d="M105.722 23.0291H125.865C128.515 23.0291 130.695 25.2083 130.695 27.8587V52.5958C130.695 55.2462 128.515 57.4255 125.865 57.4255H105.722V23.0291Z" fill="url(#paint0_linear_17_430)"></path><path d="M6.41988 0.0588379H102.365C105.899 0.0588379 108.785 2.94483 108.785 6.47871V125.04C108.785 128.574 105.899 131.46 102.365 131.46H6.41988C2.886 131.46 0 128.574 0 125.04V6.47871C0 2.88594 2.8271 0.0588379 6.41988 0.0588379Z" fill="url(#paint1_linear_17_430)"></path><path d="M37.6358 101.717C31.0392 98.1829 25.9151 93.2943 22.1457 86.9923C18.3762 80.7491 16.4915 73.6224 16.4915 65.7301C16.4915 57.8378 18.3762 50.7111 22.1457 44.4679C25.9151 38.2247 31.0981 33.2773 37.6358 29.7434C44.2324 26.2096 51.5946 24.4426 59.8403 24.4426C66.7314 24.4426 73.0335 25.6795 78.5699 28.0943C84.1652 30.5091 88.877 34.043 92.6465 38.5781L80.808 49.5332C75.3894 43.29 68.7339 40.1684 60.7238 40.1684C55.7764 40.1684 51.359 41.2285 47.4718 43.4078C43.5845 45.587 40.5807 48.5908 38.4015 52.4781C36.2223 56.3653 35.1621 60.7827 35.1621 65.7301C35.1621 70.6775 36.2223 75.0949 38.4015 78.9821C40.5807 82.8694 43.5845 85.8732 47.4718 88.0524C51.359 90.2316 55.7764 91.2918 60.7238 91.2918C68.7339 91.2918 75.3894 88.1113 80.808 81.8092L92.6465 92.7643C88.8182 97.4172 84.1063 100.951 78.511 103.366C72.8568 105.781 66.6136 107.018 59.7226 107.018C51.5357 107.018 44.1735 105.251 37.6358 101.717Z" fill="white"></path><path d="M158.259 83.4913C154.784 81.6066 152.075 79.074 150.131 75.7757C148.187 72.4774 147.186 68.7669 147.186 64.5851C147.186 60.4033 148.187 56.6928 150.131 53.3945C152.133 50.0962 154.843 47.5047 158.259 45.6788C161.734 43.853 165.562 42.9106 169.921 42.9106C173.572 42.9106 176.812 43.5585 179.757 44.8543C182.702 46.15 185.175 47.9759 187.178 50.3318L180.935 56.1038C178.107 52.8055 174.574 51.2153 170.392 51.2153C167.8 51.2153 165.503 51.8042 163.442 52.9233C161.38 54.0424 159.849 55.6326 158.671 57.694C157.552 59.7555 156.963 62.0525 156.963 64.644C156.963 67.2355 157.552 69.5325 158.671 71.594C159.79 73.6554 161.38 75.1867 163.442 76.3647C165.503 77.4838 167.8 78.0727 170.392 78.0727C174.574 78.0727 178.107 76.4236 180.935 73.1253L187.178 78.8973C185.175 81.3121 182.702 83.1968 179.757 84.4926C176.812 85.7884 173.513 86.4362 169.862 86.4362C165.562 86.2596 161.734 85.3172 158.259 83.4913Z" fill="#4064DA"></path><path d="M220.396 76.5414H200.96L197.249 85.4939H187.296L205.966 43.6174H215.567L234.296 85.4939H224.107L220.396 76.5414ZM217.392 69.1791L210.737 53.1589L204.081 69.1791H217.392Z" fill="#4064DA"></path><path d="M242.836 84.9051C239.715 84.0216 237.241 82.8437 235.356 81.4301L238.654 74.1267C240.421 75.4225 242.601 76.4827 245.074 77.3072C247.548 78.1318 250.022 78.4852 252.496 78.4852C255.264 78.4852 257.266 78.0729 258.621 77.2483C259.917 76.4238 260.623 75.3636 260.623 74.009C260.623 73.0077 260.211 72.1831 259.445 71.5352C258.68 70.8874 257.679 70.3573 256.442 69.945C255.205 69.5327 253.556 69.1204 251.494 68.6492C248.314 67.8836 245.663 67.1179 243.661 66.3522C241.599 65.5866 239.891 64.3497 238.419 62.7005C236.946 61.0514 236.24 58.8133 236.24 55.9862C236.24 53.5714 236.888 51.3332 238.242 49.3896C239.597 47.446 241.54 45.8557 244.191 44.6778C246.841 43.4998 250.081 42.9697 253.909 42.9697C256.559 42.9697 259.21 43.2642 261.743 43.9121C264.275 44.56 266.513 45.4434 268.457 46.6803L265.453 54.0425C261.566 51.8633 257.737 50.7443 253.85 50.7443C251.141 50.7443 249.138 51.1565 247.843 52.04C246.547 52.9235 245.899 54.1014 245.899 55.515C245.899 56.9285 246.665 58.0476 248.137 58.6955C249.61 59.4023 251.907 60.109 254.969 60.7569C258.15 61.5226 260.8 62.2883 262.803 63.0539C264.864 63.8196 266.572 64.9976 268.045 66.6467C269.517 68.2959 270.224 70.4751 270.224 73.3022C270.224 75.717 269.576 77.8962 268.221 79.8399C266.867 81.8424 264.864 83.3737 262.214 84.5517C259.563 85.7296 256.265 86.2597 252.437 86.2597C249.138 86.2597 245.899 85.7886 242.836 84.9051Z" fill="#4064DA"></path><path d="M315.281 43.6174V85.4939H305.563V68.2957H286.539V85.4939H276.82V43.6174H286.539V60.1089H305.563V43.6174H315.281V43.6174Z" fill="#4064DA"></path><path d="M361.633 67.53C362.988 69.2969 363.695 71.4762 363.695 74.0677C363.695 77.7194 362.281 80.5465 359.395 82.549C356.568 84.5515 352.386 85.4939 346.909 85.4939H325.234V43.6174H345.672C350.796 43.6174 354.683 44.6187 357.452 46.5623C360.161 48.506 361.575 51.1564 361.575 54.5136C361.575 56.575 361.103 58.3419 360.102 59.9322C359.101 61.5224 357.746 62.7593 355.979 63.7016C358.394 64.5262 360.279 65.7631 361.633 67.53ZM334.835 50.9208V60.8156H344.494C346.909 60.8156 348.676 60.4034 349.913 59.5788C351.15 58.7542 351.797 57.5174 351.797 55.8682C351.797 54.2191 351.15 52.9822 349.913 52.2165C348.676 51.392 346.85 50.9797 344.494 50.9797L334.835 50.9208ZM351.974 76.9537C353.27 76.1291 353.918 74.8334 353.918 73.0664C353.918 69.5914 351.326 67.8834 346.202 67.8834H334.894V78.2494H346.202C348.735 78.2494 350.62 77.8372 351.974 76.9537Z" fill="#4064DA"></path><path d="M379.538 83.4326C376.063 81.5478 373.295 78.9563 371.352 75.658C369.408 72.3597 368.407 68.6492 368.407 64.5263C368.407 60.4035 369.408 56.6929 371.352 53.3946C373.354 50.0963 376.063 47.5048 379.538 45.6201C383.013 43.7353 386.96 42.793 391.318 42.793C395.677 42.793 399.564 43.7353 403.039 45.6201C406.514 47.5048 409.223 50.0963 411.226 53.3946C413.228 56.6929 414.229 60.4035 414.229 64.5263C414.229 68.6492 413.228 72.3597 411.226 75.658C409.223 78.9563 406.514 81.5478 403.039 83.4326C399.564 85.3173 395.677 86.2597 391.318 86.2597C386.96 86.2597 383.013 85.3173 379.538 83.4326ZM397.974 76.3059C399.976 75.1868 401.507 73.5966 402.685 71.5352C403.804 69.4737 404.393 67.1767 404.393 64.5852C404.393 61.9937 403.804 59.6967 402.685 57.6353C401.566 55.5738 399.976 54.0425 397.974 52.8645C395.971 51.7455 393.733 51.1565 391.259 51.1565C388.785 51.1565 386.547 51.7455 384.545 52.8645C382.542 53.9836 381.011 55.5738 379.833 57.6353C378.714 59.6967 378.125 61.9937 378.125 64.5852C378.125 67.1767 378.714 69.4737 379.833 71.5352C380.952 73.5966 382.542 75.1279 384.545 76.3059C386.547 77.425 388.785 78.0139 391.259 78.0139C393.733 78.0139 396.03 77.425 397.974 76.3059Z" fill="#4064DA"></path><path d="M430.073 83.4326C426.598 81.5478 423.83 78.9563 421.886 75.658C419.942 72.3597 418.941 68.6492 418.941 64.5263C418.941 60.4035 419.942 56.6929 421.886 53.3946C423.889 50.0963 426.598 47.5048 430.073 45.6201C433.548 43.7353 437.494 42.793 441.852 42.793C446.211 42.793 450.098 43.7353 453.573 45.6201C457.048 47.5048 459.757 50.0963 461.76 53.3946C463.763 56.6929 464.764 60.4035 464.764 64.5263C464.764 68.6492 463.763 72.3597 461.76 75.658C459.757 78.9563 457.048 81.5478 453.573 83.4326C450.098 85.3173 446.211 86.2597 441.852 86.2597C437.494 86.2597 433.548 85.3173 430.073 83.4326ZM448.508 76.3059C450.51 75.1868 452.042 73.5966 453.22 71.5352C454.339 69.4737 454.928 67.1767 454.928 64.5852C454.928 61.9937 454.339 59.6967 453.22 57.6353C452.101 55.5738 450.51 54.0425 448.508 52.8645C446.505 51.7455 444.267 51.1565 441.794 51.1565C439.32 51.1565 437.082 51.7455 435.079 52.8645C433.077 53.9836 431.545 55.5738 430.367 57.6353C429.248 59.6967 428.659 61.9937 428.659 64.5852C428.659 67.1767 429.248 69.4737 430.367 71.5352C431.486 73.5966 433.077 75.1279 435.079 76.3059C437.082 77.425 439.32 78.0139 441.794 78.0139C444.267 78.0139 446.505 77.425 448.508 76.3059Z" fill="#4064DA"></path><path d="M487.322 69.0614L481.668 74.9512V85.5528H472.008V43.6764H481.668V63.2305L500.22 43.6764H510.999L493.624 62.347L512 85.5528H500.692L487.322 69.0614Z" fill="#4064DA"></path><defs><linearGradient id="paint0_linear_17_430" x1="135.532" y1="40.2489" x2="100.346" y2="40.2489" gradientUnits="userSpaceOnUse"><stop stopColor="#00E39B"></stop><stop offset="1" stopColor="#009C6D"></stop></linearGradient><linearGradient id="paint1_linear_17_430" x1="-0.666026" y1="1.23056" x2="129.272" y2="105.683" gradientUnits="userSpaceOnUse"><stop stopColor="#7D99FA"></stop><stop offset="1" stopColor="#2F55D2"></stop></linearGradient></defs></svg>
          </div>
          <Carousel>
            <Carousel.Item>
              <img src={SlideOne} className='vh-100' alt='Slide One' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={SlideTwo} className='vh-100' alt='Slide Two' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={SlideThree} className='vh-100' alt='Slide Three' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={SlideFour} className='vh-100' alt='Slide Four' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={SlideFive} className='vh-100' alt='Slide Five' />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='col-8'>
          <div className='text-center'>
            <svg width="150" height="39" viewBox="0 0 512 132" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M109.786 131.401H106.959C109.02 131.401 110.669 129.752 110.669 127.691V3.71057C110.669 1.64914 109.02 0 106.959 0H109.786C113.32 0 116.206 2.886 116.206 6.41987V124.981C116.206 128.574 113.32 131.401 109.786 131.401Z" fill="#375BD7"></path><path d="M6.41988 0.0588379H106.841C110.375 0.0588379 113.261 2.94483 113.261 6.47871V125.04C113.261 128.574 110.375 131.46 106.841 131.46H6.41988C2.886 131.46 0 128.574 0 125.04V6.47871C0 2.88594 2.8271 0.0588379 6.41988 0.0588379Z" fill="white"></path><path d="M6.41988 0.0588379H99.7732C103.307 0.0588379 106.193 2.94483 106.193 6.47871V125.04C106.193 128.574 103.307 131.46 99.7732 131.46H6.41988C2.886 131.46 0 128.574 0 125.04V6.47871C0 2.88594 2.8271 0.0588379 6.41988 0.0588379Z" fill="#7898FF"></path><path d="M105.722 23.0291H125.865C128.515 23.0291 130.695 25.2083 130.695 27.8587V52.5958C130.695 55.2462 128.515 57.4255 125.865 57.4255H105.722V23.0291Z" fill="url(#paint0_linear_17_430)"></path><path d="M6.41988 0.0588379H102.365C105.899 0.0588379 108.785 2.94483 108.785 6.47871V125.04C108.785 128.574 105.899 131.46 102.365 131.46H6.41988C2.886 131.46 0 128.574 0 125.04V6.47871C0 2.88594 2.8271 0.0588379 6.41988 0.0588379Z" fill="url(#paint1_linear_17_430)"></path><path d="M37.6358 101.717C31.0392 98.1829 25.9151 93.2943 22.1457 86.9923C18.3762 80.7491 16.4915 73.6224 16.4915 65.7301C16.4915 57.8378 18.3762 50.7111 22.1457 44.4679C25.9151 38.2247 31.0981 33.2773 37.6358 29.7434C44.2324 26.2096 51.5946 24.4426 59.8403 24.4426C66.7314 24.4426 73.0335 25.6795 78.5699 28.0943C84.1652 30.5091 88.877 34.043 92.6465 38.5781L80.808 49.5332C75.3894 43.29 68.7339 40.1684 60.7238 40.1684C55.7764 40.1684 51.359 41.2285 47.4718 43.4078C43.5845 45.587 40.5807 48.5908 38.4015 52.4781C36.2223 56.3653 35.1621 60.7827 35.1621 65.7301C35.1621 70.6775 36.2223 75.0949 38.4015 78.9821C40.5807 82.8694 43.5845 85.8732 47.4718 88.0524C51.359 90.2316 55.7764 91.2918 60.7238 91.2918C68.7339 91.2918 75.3894 88.1113 80.808 81.8092L92.6465 92.7643C88.8182 97.4172 84.1063 100.951 78.511 103.366C72.8568 105.781 66.6136 107.018 59.7226 107.018C51.5357 107.018 44.1735 105.251 37.6358 101.717Z" fill="white"></path><path d="M158.259 83.4913C154.784 81.6066 152.075 79.074 150.131 75.7757C148.187 72.4774 147.186 68.7669 147.186 64.5851C147.186 60.4033 148.187 56.6928 150.131 53.3945C152.133 50.0962 154.843 47.5047 158.259 45.6788C161.734 43.853 165.562 42.9106 169.921 42.9106C173.572 42.9106 176.812 43.5585 179.757 44.8543C182.702 46.15 185.175 47.9759 187.178 50.3318L180.935 56.1038C178.107 52.8055 174.574 51.2153 170.392 51.2153C167.8 51.2153 165.503 51.8042 163.442 52.9233C161.38 54.0424 159.849 55.6326 158.671 57.694C157.552 59.7555 156.963 62.0525 156.963 64.644C156.963 67.2355 157.552 69.5325 158.671 71.594C159.79 73.6554 161.38 75.1867 163.442 76.3647C165.503 77.4838 167.8 78.0727 170.392 78.0727C174.574 78.0727 178.107 76.4236 180.935 73.1253L187.178 78.8973C185.175 81.3121 182.702 83.1968 179.757 84.4926C176.812 85.7884 173.513 86.4362 169.862 86.4362C165.562 86.2596 161.734 85.3172 158.259 83.4913Z" fill="#4064DA"></path><path d="M220.396 76.5414H200.96L197.249 85.4939H187.296L205.966 43.6174H215.567L234.296 85.4939H224.107L220.396 76.5414ZM217.392 69.1791L210.737 53.1589L204.081 69.1791H217.392Z" fill="#4064DA"></path><path d="M242.836 84.9051C239.715 84.0216 237.241 82.8437 235.356 81.4301L238.654 74.1267C240.421 75.4225 242.601 76.4827 245.074 77.3072C247.548 78.1318 250.022 78.4852 252.496 78.4852C255.264 78.4852 257.266 78.0729 258.621 77.2483C259.917 76.4238 260.623 75.3636 260.623 74.009C260.623 73.0077 260.211 72.1831 259.445 71.5352C258.68 70.8874 257.679 70.3573 256.442 69.945C255.205 69.5327 253.556 69.1204 251.494 68.6492C248.314 67.8836 245.663 67.1179 243.661 66.3522C241.599 65.5866 239.891 64.3497 238.419 62.7005C236.946 61.0514 236.24 58.8133 236.24 55.9862C236.24 53.5714 236.888 51.3332 238.242 49.3896C239.597 47.446 241.54 45.8557 244.191 44.6778C246.841 43.4998 250.081 42.9697 253.909 42.9697C256.559 42.9697 259.21 43.2642 261.743 43.9121C264.275 44.56 266.513 45.4434 268.457 46.6803L265.453 54.0425C261.566 51.8633 257.737 50.7443 253.85 50.7443C251.141 50.7443 249.138 51.1565 247.843 52.04C246.547 52.9235 245.899 54.1014 245.899 55.515C245.899 56.9285 246.665 58.0476 248.137 58.6955C249.61 59.4023 251.907 60.109 254.969 60.7569C258.15 61.5226 260.8 62.2883 262.803 63.0539C264.864 63.8196 266.572 64.9976 268.045 66.6467C269.517 68.2959 270.224 70.4751 270.224 73.3022C270.224 75.717 269.576 77.8962 268.221 79.8399C266.867 81.8424 264.864 83.3737 262.214 84.5517C259.563 85.7296 256.265 86.2597 252.437 86.2597C249.138 86.2597 245.899 85.7886 242.836 84.9051Z" fill="#4064DA"></path><path d="M315.281 43.6174V85.4939H305.563V68.2957H286.539V85.4939H276.82V43.6174H286.539V60.1089H305.563V43.6174H315.281V43.6174Z" fill="#4064DA"></path><path d="M361.633 67.53C362.988 69.2969 363.695 71.4762 363.695 74.0677C363.695 77.7194 362.281 80.5465 359.395 82.549C356.568 84.5515 352.386 85.4939 346.909 85.4939H325.234V43.6174H345.672C350.796 43.6174 354.683 44.6187 357.452 46.5623C360.161 48.506 361.575 51.1564 361.575 54.5136C361.575 56.575 361.103 58.3419 360.102 59.9322C359.101 61.5224 357.746 62.7593 355.979 63.7016C358.394 64.5262 360.279 65.7631 361.633 67.53ZM334.835 50.9208V60.8156H344.494C346.909 60.8156 348.676 60.4034 349.913 59.5788C351.15 58.7542 351.797 57.5174 351.797 55.8682C351.797 54.2191 351.15 52.9822 349.913 52.2165C348.676 51.392 346.85 50.9797 344.494 50.9797L334.835 50.9208ZM351.974 76.9537C353.27 76.1291 353.918 74.8334 353.918 73.0664C353.918 69.5914 351.326 67.8834 346.202 67.8834H334.894V78.2494H346.202C348.735 78.2494 350.62 77.8372 351.974 76.9537Z" fill="#4064DA"></path><path d="M379.538 83.4326C376.063 81.5478 373.295 78.9563 371.352 75.658C369.408 72.3597 368.407 68.6492 368.407 64.5263C368.407 60.4035 369.408 56.6929 371.352 53.3946C373.354 50.0963 376.063 47.5048 379.538 45.6201C383.013 43.7353 386.96 42.793 391.318 42.793C395.677 42.793 399.564 43.7353 403.039 45.6201C406.514 47.5048 409.223 50.0963 411.226 53.3946C413.228 56.6929 414.229 60.4035 414.229 64.5263C414.229 68.6492 413.228 72.3597 411.226 75.658C409.223 78.9563 406.514 81.5478 403.039 83.4326C399.564 85.3173 395.677 86.2597 391.318 86.2597C386.96 86.2597 383.013 85.3173 379.538 83.4326ZM397.974 76.3059C399.976 75.1868 401.507 73.5966 402.685 71.5352C403.804 69.4737 404.393 67.1767 404.393 64.5852C404.393 61.9937 403.804 59.6967 402.685 57.6353C401.566 55.5738 399.976 54.0425 397.974 52.8645C395.971 51.7455 393.733 51.1565 391.259 51.1565C388.785 51.1565 386.547 51.7455 384.545 52.8645C382.542 53.9836 381.011 55.5738 379.833 57.6353C378.714 59.6967 378.125 61.9937 378.125 64.5852C378.125 67.1767 378.714 69.4737 379.833 71.5352C380.952 73.5966 382.542 75.1279 384.545 76.3059C386.547 77.425 388.785 78.0139 391.259 78.0139C393.733 78.0139 396.03 77.425 397.974 76.3059Z" fill="#4064DA"></path><path d="M430.073 83.4326C426.598 81.5478 423.83 78.9563 421.886 75.658C419.942 72.3597 418.941 68.6492 418.941 64.5263C418.941 60.4035 419.942 56.6929 421.886 53.3946C423.889 50.0963 426.598 47.5048 430.073 45.6201C433.548 43.7353 437.494 42.793 441.852 42.793C446.211 42.793 450.098 43.7353 453.573 45.6201C457.048 47.5048 459.757 50.0963 461.76 53.3946C463.763 56.6929 464.764 60.4035 464.764 64.5263C464.764 68.6492 463.763 72.3597 461.76 75.658C459.757 78.9563 457.048 81.5478 453.573 83.4326C450.098 85.3173 446.211 86.2597 441.852 86.2597C437.494 86.2597 433.548 85.3173 430.073 83.4326ZM448.508 76.3059C450.51 75.1868 452.042 73.5966 453.22 71.5352C454.339 69.4737 454.928 67.1767 454.928 64.5852C454.928 61.9937 454.339 59.6967 453.22 57.6353C452.101 55.5738 450.51 54.0425 448.508 52.8645C446.505 51.7455 444.267 51.1565 441.794 51.1565C439.32 51.1565 437.082 51.7455 435.079 52.8645C433.077 53.9836 431.545 55.5738 430.367 57.6353C429.248 59.6967 428.659 61.9937 428.659 64.5852C428.659 67.1767 429.248 69.4737 430.367 71.5352C431.486 73.5966 433.077 75.1279 435.079 76.3059C437.082 77.425 439.32 78.0139 441.794 78.0139C444.267 78.0139 446.505 77.425 448.508 76.3059Z" fill="#4064DA"></path><path d="M487.322 69.0614L481.668 74.9512V85.5528H472.008V43.6764H481.668V63.2305L500.22 43.6764H510.999L493.624 62.347L512 85.5528H500.692L487.322 69.0614Z" fill="#4064DA"></path><defs><linearGradient id="paint0_linear_17_430" x1="135.532" y1="40.2489" x2="100.346" y2="40.2489" gradientUnits="userSpaceOnUse"><stop stopColor="#00E39B"></stop><stop offset="1" stopColor="#009C6D"></stop></linearGradient><linearGradient id="paint1_linear_17_430" x1="-0.666026" y1="1.23056" x2="129.272" y2="105.683" gradientUnits="userSpaceOnUse"><stop stopColor="#7D99FA"></stop><stop offset="1" stopColor="#2F55D2"></stop></linearGradient></defs></svg>
          </div>

          <div className='text-center mt-3' style={{ fontSize: 26, fontWeight: '700' }}>{businessList.length === 0 ? 'Log In/Create Account' : 'Choose your POS'}</div>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              {businessList.length === 0 ?
                <form className='border p-3 my-3' onSubmit={(e) => onSubmit(e)}>
                  {/* <div style={{ fontSize: 18, fontWeight: '500', color: 'grey' }}>Enter your mobile Number</div> */}
                  {/* <div className='py-4'>
                  <PhoneInput
                    country={"eg"}
                    enableSearch={true}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    style={{ border: '0px', Outlet: '0px' }}
                    containerStyle={{ border: '0px', Outlet: '0px', width: '100%' }}
                    containerclassName="phone-input"
                    inputclassName="phone-input"
                  />
                </div> */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control form-control-lg" name="email" id="email" value={data.email} onChange={onInputChange} />
                    <div id="emailHelp" className="form-text text-danger">{data.emailError}</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control form-control-lg" name="password" id="password" value={data.password} onChange={onInputChange} />
                    <div id="passwordHelp" className="form-text text-danger">{data.passwordError}</div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-lg btn-light border py-3 text-secondary" type="submit" style={{ fontSize: 15, fontWeight: '600' }}>Submit</button>
                  </div>
                  {/* <div className="d-grid gap-2">
                  <button className="btn btn-lg btn-light border py-3 text-secondary" type="button" style={{ fontSize: 15, fontWeight: '600' }}>Send OTP</button>
                </div> */}

                  {/* <div className='text-center py-2'>OR</div>
                <div className="d-grid gap-2">
                  <button className="btn btn-lg  border py-3 btn-other" type="button" style={{ fontSize: 15, fontWeight: '600', color: '#4A65D4' }}>Other Ways To Login</button>
                </div> */}
                  <div className='text-secondary py-3' style={{ fontWeight: 14 }}>
                    By clicking send OTP, you are indicating that you accept our <span style={{ color: '#7287DE' }}>Terms of Service</span> and <span style={{ color: '#7287DE' }}>Privacy Policy.</span> An SMS may be sent. Message & data rates may apply.
                  </div>
                </form>
                :
                <form className='border p-3 my-3' onSubmit={(e) => onSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="businesss" className="form-label">Business List</label>
                    <select class="form-select" aria-label="Default businesss example"
                      value={businessId}
                      onChange={(e) => {
                        let current = e.target.value;
                        setBusinessType([])
                        setBusinessId(current);
                        setBusinessType(businessList.find(business => business.id == e.target.value)?.listpos || [])
                      }}
                    >
                      <option value=''>Select Business List</option>
                      {
                        businessList.map((business, key) => <option key={key} value={business?.id}>{business?.name}</option>)
                      }
                    </select>
                    <div id="businessListHelp" className="form-text text-danger">{data.businessError}</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">Business Type</label>
                    <select class="form-select" aria-label="Default type example"
                      value={businessTypeId}
                      onChange={(e) => {
                        setBusinessTypeId(e.target.value);
                      }}
                    >
                      <option value=''>Select Business Type</option>
                      {
                        businessType.map((business, key) => <option key={key} value={business?.id}>{business?.name}</option>)
                      }
                    </select>
                    <div id="businessTypeHelp" className="form-text text-danger">{data.businessTypeError}</div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-lg btn-light border py-3 text-secondary" type="submit" style={{ fontSize: 15, fontWeight: '600' }}>Submit</button>
                  </div>
                  <div className='text-secondary py-3' style={{ fontWeight: 14 }}>
                    By clicking send OTP, you are indicating that you accept our <span style={{ color: '#7287DE' }}>Terms of Service</span> and <span style={{ color: '#7287DE' }}>Privacy Policy.</span> An SMS may be sent. Message & data rates may apply.
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
