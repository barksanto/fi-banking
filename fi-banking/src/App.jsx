import React from 'react'
import styles from './styles'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}` }>
            Navbar
        </div>
     </div>
    
    <div className={ `bg-secondary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero component
      </div>
    </div>

    <div className={ `bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* render all components */}
        Stats
        Business
        Billing
        CardDeal
        Tesimonials
        Clients
        Footer
      </div>
    </div>

    </div>
)


export default App