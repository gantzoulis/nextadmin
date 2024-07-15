import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";

import {
  MdDashboard,MdSupervisedUserCircle
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Members",
        path: "/dashboard/members",
        icon: <MdSupervisedUserCircle />,
      }
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Payments",
        path: "/payments",
        icon: <MdDashboard />,
      },
      {
        title: "Subscriptions",
        path: "/subscriptions",
        icon: <MdSupervisedUserCircle />,
      }
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/payments",
        icon: <MdDashboard />,
      },
      {
        title: "Administration",
        path: "/subscriptions",
        icon: <MdSupervisedUserCircle />,
      }
    ],
  }
];


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}> John Doe</span>
          <span className={styles.usertitle}> Administrator </span>
        </div>
      </div>
      <ul className={styles.list}>
        {
          menuItems.map((cat)=>(
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span> 
              {
                cat.list.map(item=>
                  <MenuLink item={item} key={item.tile}/>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar