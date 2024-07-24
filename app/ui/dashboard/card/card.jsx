import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size ={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>25</span>
        <span className={styles.details}>
          <span className={styles.positive}>12%</span>περισσότερους από πέρυσι
        </span>
      </div>
    </div>
  )
}

export default Card;