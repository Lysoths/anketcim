import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="/dashboard/overview">Overview</a>
          </li>
          <li>
            <a href="/dashboard/settings">Settings</a>
          </li>
          <li>
            <a href="/dashboard/profile">Profile</a>
          </li>
          <li>
            <a href="/dashboard/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
