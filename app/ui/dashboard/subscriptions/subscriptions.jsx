import Image from "next/image";
import styles from "./subscriptions.module.css";

const Subscriptions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Subscriptions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>DoB</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                Jon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}> Pending </span>
            </td>
            <td>24.11.1977</td>
            <td>$1.400  </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                Jon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.active}`}> Active </span>
            </td>
            <td>24.11.1977</td>
            <td>$1.400  </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                Jon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}> Cancelled </span>
            </td>
            <td>24.11.1977</td>
            <td>$1.400  </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                Jon Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.active}`}> Active </span>
            </td>
            <td>24.11.1977</td>
            <td>$1.400  </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Subscriptions