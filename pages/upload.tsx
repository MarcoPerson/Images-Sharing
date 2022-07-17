import styles from '../styles/Home.module.css'
import "antd/dist/antd.css";

import NameInput from '../components/NameInput/NameInput'
import Layout from '../components/Layout/Layout'
import ImageUpload from '../components/ImageUpload/ImageUpload'

import { useAppContext } from '../context/AppContext'


type Props = {};

const Home = ({ }: Props) => {
  const { name, setName } = useAppContext()

  return (
    <>
      {!name ? <NameInput /> : <Layout title='Upload Page' selected='upload'><ImageUpload /></Layout>}
    </>
  )
}


export default Home
