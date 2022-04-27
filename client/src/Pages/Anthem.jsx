import React from 'react';
import AppNavBar from '../components/Navbar/Nav';
import TransparentHeader from '../components/props/TransparentHeader';
import Footer from '../components/home/Footer';

const Anthem = () => {
  return (
  <div>
    <AppNavBar />
    <TransparentHeader text="School Anthem" />
    <article className='text-center mb-5'>
        <section className='main-anthem'>
            <audio className='mb-3' controls src="">My audio</audio>
            <div>
                <p>We are the Pecuty</p>
                <p>Royal School</p>
                <p>For Commitment to knowledge</p>
                <p>And Excellence</p>
                <p>To bring out the hidden goals!</p>
                <p>And Inculcate discipline</p>
                <p>With Integrity</p>
                <p>With Pecuty Royal Academy talents</p>
                <p>Are reviewed with God.....</p>
                <p>We are peculiar people</p>
                <p>Royal dignity!</p>
            </div>
        </section>
    </article>
    <Footer />
  </div>
    )
}

export default Anthem;