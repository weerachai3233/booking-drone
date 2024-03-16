'use client'
import React, { useEffect, useState } from "react";
import { ApiGetUsers } from "./utils/api";

const Page = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    const result: any = await ApiGetUsers();
    if (result?.status) {
      setUsers(result?.data);
    } else {
      setUsers([]);
    }
  };

  return <div>
    <div>test calling api</div>
    {users.map((user: any, index: number) => {
      return (
        <div key={index}>{user?.first_name}</div>
      )
    })}
  </div>;
};

export default Page;
