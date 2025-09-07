// import React, { useEffect, useState } from "react";
// import { getPayments } from "../Services/paymentService";

// export default function PaymentList() {
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   async function load() {
//     const data = await getPayments();
//     setPayments(data);
//   }

//   return (
//     <div>
//       <h2>Payments</h2>
//       <ul>
//         {payments.map((p) => (
//           <li key={p.paymentId}>
//             Student {p.studentID}, Course {p.courseID}, {p.amount} {p.currency} — {p.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getPayments } from "../Services/paymentService";
import "../Pages/PaymentPage.css";

export default function PaymentList() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getPayments();
    setPayments(data);
  }

  return (
    <div className="payment-container">
      {payments.map((p) => (
        <div key={p.paymentId} className="payment-card">
          <div className="payment-info">
            <span className="student-course">
              Student {p.studentID}, Course {p.courseID}
            </span>
            <span className="amount">
              {p.amount} {p.currency}
            </span>
          </div>
          <span
            className={`payment-status ${
              p.status.toLowerCase() === "paid"
                ? "paid"
                : p.status.toLowerCase() === "pending"
                ? "pending"
                : "failed"
            }`}
          >
            {p.status}
          </span>
        </div>
      ))}
    </div>
  );
}
