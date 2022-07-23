import Layout from '../components/Home/Layout';
import Hero from '../components/Home/Hero';
import DashLook from '../components/Home/DashLook';
import DashFeatures from '../components/Home/DashFeatures';
import Footer from '../components/Home/Footer';

export default function Home() {  
  return (
    <>
    <Layout>
        <Hero />
        <DashLook />
        <DashFeatures />
        <Footer />
    </Layout>
    </>
  );
}
