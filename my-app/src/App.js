import React from 'react'
import Hero from './components/Hero/Hero';
import Navbar from './components/navbar/Navbar';
import Student from './components/student/Student';
import Footer from './components/footeri/Footer'

// Import images
import Craft1 from './assets/1.jpg'
import Craft2 from './assets/2.jpg'
import Craft3 from './assets/3.jpg'
import Craft4 from './assets/8.jpg'
import Craft5 from './assets/5.jpg'
import Craft6 from './assets/6.jpg'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Student bgImg1={Craft1} bgImg2={Craft2} />
      <Student bgImg={Craft3} />
      <Student bgImg1={Craft5} bgImg2={Craft6} />
      <Student bgImg={Craft4} />
      <Footer />
      
    </>
  );
}

export default App;
