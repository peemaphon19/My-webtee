import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt";
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>P o r t f o l i o </h3>    
      <div className={styles.port_list}>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423735683_1212610359712928_8986117267849613287_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHJPRuR9VtktwDMH8aJngRtpmQobGADX--mZChsYANf7xK3nAx9oPfoL38fV59TbdXZHjJolbieMBd341d0y2Vo&_nc_ohc=ZdaQNwmbqT4AX_RecYy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS0McWnEH3FvFtzGZAf7BuDkOvHgamZqiINHmUFXgTvoQ&oe=66155477" alt="" />
            <p>Dev web.</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t1.15752-9/431186470_7523623194369067_8435056727229733564_n.png?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEb1dRrzlCYJuK8fL5KS6LgjupWmfhNN0mO6laZ-E03SRSqynzoF5HkkDWrePiVYq4NVXL00M7bbFAuNGNOBAaK&_nc_ohc=_Wd5Vh5H2rgAX9gAy2y&_nc_ht=scontent.fcnx2-1.fna&oh=03_AdSvB4D5CcQ60QS0ahLk8kdr7eQEt40r68a79pSizRv7bg&oe=6615571F" alt="" />
            <p>Designing a tourism website.</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423735783_1091121141936333_319874227301763055_n.png?stp=dst-png_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGG2jQSy19ejN2XzSpa0gSjJGz42moU26MkbPjaahTbu_jnLB_PZkR2lXsWIa3oCkcjf0d6WZfcytwHDFm_Mh-&_nc_ohc=0CP6h-0j0MMAX_jsEw0&_nc_oc=AQkheDlfTW49v6aSSOYlpxjmguMHiGmi3JY07fFXtRpyIDUIVzFMgNQIiXKtmImvXXd8jXDYL90l4IfwrDGO3YlO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRNU063ccBW6bsPRhzzfpyQ4ysdDyetI15ww2ia5cUYFg&oe=66153016" alt="" />
            <p>Certificate Web Design Project.</p>
        </div>
        </Tilt>
        
      </div>
      
    </div>
  )
}

export default Portfolio