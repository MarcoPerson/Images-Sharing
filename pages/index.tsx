import type { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'

import { ImageType } from '../interfaces'
import {allImagesData} from '../utils/data'

import NameInput from '../components/NameInput'
import Layout from '../components/Layout'
import ImageList from '../components/ImageList'
import {useAppContext} from '../context/AppContext'


type Props = { items: ImageType[] };

const Home = ({items}:Props) => {
  const {name, setName} = useAppContext()

  return (
   <>
   {!name ? <NameInput /> : <Layout title='Home Page' selected='home'><ImageList items={items}/></Layout>}
   </> 
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const items: ImageType[] = allImagesData;
  return {props : {items}}
}

export default Home
