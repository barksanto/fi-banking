import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../styles';
import Button from './Button';


const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} `}>Get your card deal <br className={`sm:block hidden`} /> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>It can be a hassle to find a card that best suits your needs. Not anymore, we've got your back this time.</p>
      <Button styles="mt-10"/>
    </div>

    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card_images" className='w-[100%] h-[100%]' />
    </div>
  </section>
  )


export default CardDeal