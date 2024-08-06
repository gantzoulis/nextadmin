import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";


const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}> 
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> Available Now </span>
          <h3 className={styles.title}>How to use this version of the admin Dashboard</h3>
          <span className={styles.subtitle}> Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore iste commodi voluptates dignissimos quis voluptatibus, 
            eum provident vel quisquam necessitatibus voluptatem modi, 
            praesentium obcaecati quos adipisci minus id facilis recusandae.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}> Comming Next </span>
          <h3 className={styles.title}>How to use this version of the admin Dashboard</h3>
          <span className={styles.subtitle}> Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Inventore iste commodi voluptates dignissimos quis voluptatibus, 
            eum provident vel quisquam necessitatibus voluptatem modi, 
            praesentium obcaecati quos adipisci minus id facilis recusandae.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>

    </div>
  )
}

export default Rightbar