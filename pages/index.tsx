import type { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'

import { ImageType } from '../interfaces'

import NameInput from '../components/NameInput/NameInput'
import Layout from '../components/Layout/Layout'
import ImageList from '../components/ImageList/ImageList'
import { useAppContext } from '../context/AppContext'


type Props = { items: ImageType[] };

const Home = ({ items }: Props) => {
  const { name, setName } = useAppContext()

  return (
    <>
      {!name ? <NameInput /> : <Layout title='Home Page' selected='home'><ImageList items={items} /></Layout>}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const env = process.env.NODE_ENV === "production"
  const pre_link = env ? "https://images-sharing.vercel.app/" : "http://localhost:3000/"

  const data = await fetch(pre_link + "api/images");
  const itemsJSon = await data.json();
  const items: ImageType[] = itemsJSon.data;
  return { props: { items } }
}

export default Home
