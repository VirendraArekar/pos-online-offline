import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import Navbar from '../../Components/Navbar'

export default function Mofdifier() {
  const [toggle, setToggle] = useState(true)
  const doCompress = () => {
     setToggle(!toggle);
  }
  return (
    <Layout doCompress={doCompress}>
        <Navbar screen="dashboard"  toggle={toggle}/>
       <div>List</div>
    </Layout>
  )
}
