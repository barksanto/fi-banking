import React from 'react'
import styles from '../styles'
import {discount, robot} from '../assets'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[16px] px-[4px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <span className="text-white">20%</span>
          <p className={`${styles.paragraph} ml-2`}>
            Discount for {" "} <span className="text-white">1 month</span><span> account</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
            THE NEXT <br className="sm:block hidden " />{" "}
            <span className="text-gradient">GENERATION</span>{" "}
            PAYMENT METHOD
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero