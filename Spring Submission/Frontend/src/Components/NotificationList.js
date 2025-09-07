// import React, { useEffect, useState } from "react";
// import { getNotifications, markAsRead } from "../Services/notificationService";

// export default function NotificationList() {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   async function load() {
//     const data = await getNotifications();
//     setNotifications(data);
//   }

//   async function handleMarkRead(id) {
//     await markAsRead(id);
//     load();
//   }

//   return (
//     <div>
//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map((n) => (
//           <li key={n.notificationID}>
//             {n.title} - {n.message}
//             {!n.isRead && <button onClick={() => handleMarkRead(n.notificationID)}>Mark as Read</button>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getNotifications, markAsRead } from "../Services/notificationService";
import "../Pages/NotificationPage.css";

export default function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getNotifications();
    setNotifications(data);
  }

  async function handleMarkRead(id) {
    await markAsRead(id);
    load();
  }

  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <div
          key={n.notificationID}
          className={`notification-card ${!n.isRead ? "unread" : ""}`}
        >
          <div className="notification-text">
            <span className="title">{n.title}</span>
            <span className="message">{n.message}</span>
          </div>
          {!n.isRead && (
            <button
              className="mark-read-btn"
              onClick={() => handleMarkRead(n.notificationID)}
            >
              Mark as Read
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
