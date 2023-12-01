import Image from 'next/image'
import RegisterModal from '@/Modals/RegisterModal'
import LoginModal from '@/Modals/LoginModal'
import Layout from '@/components/Layout'

interface PageProps {
  children: React.ReactNode
}

const Home: React.FC<PageProps> = ({children}) => {
  return (
    <>
    <RegisterModal />
      <LoginModal />
    <Layout children={children} />
    </>

  )
}

export default Home


