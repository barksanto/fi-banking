import React from 'react'
import {
  stats
} from '../constants';

import styles from '../styles';


const Stats = () => 
(
  <section className={`flex flex-row ${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
    {
      stats.map((stat, index) => (
        <div key={stat.id} className={`flex flex-1 justify-center items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] leading-[53px] leading-[43px] text-white">{stat.value}</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))
    }
  </section>
)

export default Stats;