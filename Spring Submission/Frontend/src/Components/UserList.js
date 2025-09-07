import React, { useEffect, useState } from "react";
import { getUsers } from "../Services/userService";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getUsers();
    setUsers(data);
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.userId}>
            {u.fullName} ({u.role}) - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}