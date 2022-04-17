import logo from './logo.svg';
import './App.css';
import Navbar from './sections/navbar/Navbar';
import BePrepared from './sections/1 be prepared/BePrepared';
import CardSection from './sections/2 cards section/CardSection';
import SafeAffordable from './sections/3 safe affordable/SafeAffordable';
import TrustedByBig from './sections/4 trusted by big/TrustedByBig';
import EnjoyOurLife from './sections/5 enjoy your life/EnjoyOurLife';
import LetsEnjoyNature from './sections/6 lets enjoy nature/LetsEnjoyNature';
import ClientSayAboutUs from './sections/7 client say about us/ClientSayAboutUs';
import SubscribeToOutNewsletter from './sections/8 subscribe to out newsletter/SubscribeToOutNewsletter';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <div className="App">

      {/*   nav bar SECTION    */}
      <Navbar/>

      {/* Be prepared for the mountains and beyond. SECTION */}
      <BePrepared/>
      {/* card SECTION  */}
      <CardSection/>

      {/* Safe, Affordable, And Trusted SECTION  */}
      <SafeAffordable/>

      {/* Trusted by Big Companies SECTION  */}
      <TrustedByBig/>

      {/* Enjoy Your Life With Us Now! SECTION  */}
      <EnjoyOurLife/>


      {/* Let’s Enjoy Nature With Us SECTION  */}
      <LetsEnjoyNature/>


      {/* Client’s Say About Us SECTION  */}
      <ClientSayAboutUs/>

      {/* Subscribe to Our Newsletter For Weekly Article Update. SECTION  */}
      <SubscribeToOutNewsletter/>

      {/* footer SECTION   */}
      <Footer/>


    
    </div>
  );
}

export default App;

