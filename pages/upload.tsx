import type { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import "antd/dist/antd.css";


import { ImageType } from '../interfaces'
import {allImagesData} from '../utils/data'

import NameInput from '../components/NameInput'
import Layout from '../components/Layout'
import ImageUpload from '../components/ImageUpload'

import {useAppContext} from '../context/AppContext'
import { useEffect } from 'react';


type Props = {};

const Home = ({}:Props) => {
  const {name, setName} = useAppContext()
  return (
   <>
   {!name ? <NameInput /> : <Layout title='Upload Page' selected='upload'><ImageUpload /></Layout>}
   </> 
  )
}


export default Home
