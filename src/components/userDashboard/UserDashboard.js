import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./userDashboard.css";

const UserDashboard = () => {
  return (
    <div>
      <h1>User's Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;