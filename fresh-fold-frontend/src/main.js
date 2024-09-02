import React, { useEffect } from "react";
import "./styles.css"; // You can keep your styles here or use CSS modules

const Calendar = () => {
  useEffect(() => {
    generateCalendar();
  }, []);

  const generateCalendar = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    let date = 1;
    const calendarBody = document.getElementById("calendar-body");

    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < startingDay) {
          const cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          const cellText = document.createTextNode(date);
          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add("today");
          }
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }

      calendarBody.appendChild(row);
    }
  };

  return (
    <div className="calendar">
      <h3>Calendar</h3>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="calendar-body">
          {/* Calendar days will be dynamically added here */}
        </tbody>
      </table>
    </div>
  );
};

const NoticeBox = () => {
  return (
    <div className="notice-box">
      <div className="notice-header">
        <h2>Order Details</h2>
        <div className="notice-time">Order Time: 2:00 PM, Feb 4, 2024</div>
      </div>
      <div className="notice-content">
        <p>
          <strong>Clothes for Washing:</strong> 10 items
          <br /><strong>Clothes for Ironing:</strong> 5 items
          <br /><strong>Clothes for Dry Cleaning:</strong> 2 items
          <br /><strong>Clothes for Bleaching:</strong> 1 item
          <br /><strong>Washing Price:</strong> ₹50
          <br /><strong>Ironing Price:</strong> ₹10
          <br /><strong>Dry Cleaning Price:</strong> ₹40
          <br /><strong>Bleaching Price:</strong> ₹20
          <br /><strong>Delivery Price:</strong> ₹25 (Express Delivery)
        </p>
        <a href="documents/invoice_22070122240.pdf" target="_blank" rel="noreferrer">Download Invoice</a>
      </div>
      <div className="notice-footer">
        <input className="comment-btn" type="text" placeholder="Add a comment.." />
        <button className="upload-comment-btn">&#9166;</button>
        <button className="expand-btn">Expand</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <header>
        <div className="header">
          <a href="home.html"><img className="logo" src="resources/logo.png" alt="Logo" /></a>
          <div className="navbar">
            <a className="nav-option" href="home.html">Orders</a>
            <a className="nav-option" href="calendar.html">Calendar</a>
            <a className="nav-option" href="events.html">Events</a>
            <a className="nav-option" href="notifications.html">Notifications</a>
            <a className="nav-option" href="#">Help</a>
            <a className="profile" href="profile.html">
              Profile
              <img className="pfp" src="resources/pfp.png" alt="Profile" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="filter-sidebar">
          <aside className="sidebar">
            <div className="filter-options">
              <h3>Filter Options</h3>
              <label htmlFor="category">Category:</label>
              <select id="category">
                <option value="all">All</option>
                <option value="Washing">Washing</option>
                <option value="Ironing">Ironing</option>
                <option value="Dry Cleaning">Dry Cleaning</option>
                <option value="Bleaching">Bleaching</option>
              </select>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" />
            </div>
            <button className="apply-filter-btn">Apply Filters</button>
          </aside>

          <Calendar />
        </div>

        <div className="main-content">
          <NoticeBox />
          {/* Add more <NoticeBox /> components for more orders */}
        </div>
      </main>
    </div>
  );
};

export default App;
