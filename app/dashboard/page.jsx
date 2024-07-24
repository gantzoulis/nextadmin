import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Payments from "../ui/dashboard/payments/payments";
import Rightbar from "../ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}> 
          <Card />
          <Card />
          <Card />
        </div>
        <Payments />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard
