import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/564x/32/ee/01/32ee0194fa98f3ec170a06fa1d032fac.jpg"
            alt=""
          />
          <h4>Palla</h4>
          <p className={styles.bio}>full-stack</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/736x/4c/f0/c0/4cf0c013275b728119b37a4c39d3f183.jpg"
            alt=""
          />
          <h4>Gun</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/564x/4d/5f/15/4d5f15f1785f74f4f07f1b45ed3199bf.jpg"
            alt=""
          />
          <h4>Pop</h4>
          <p className={styles.bio}>Front-end developer.</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;