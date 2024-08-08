import styles from "@/app/ui/dashboard/members/members.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const MembersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a Member..."/>
        <Link href="/dashboard/members/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Belt</td>
            <td>Created</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
                George Antzoulis
              </div>
            </td>
            <td>george.antzoulis@zeidoros-team.gr</td>
            <td>Black 4th Dan</td>
            <td>8.1.2017</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default MembersPage