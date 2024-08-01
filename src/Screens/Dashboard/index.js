import React from 'react'
import Navbar from '../../Components/Navbar';
import Layout from '../../Components/Layout'
import useDocumentTitle from '../../Hooks/useDocumentTitle';

export default function Dashboard() {
  useDocumentTitle('POS - Dashboard')
  return (
    <Layout>
     <Navbar screen="dashboard"/>
    </Layout>
  )
}
