
// import React, { useState } from "react";

// // Компонент для відображення окремої картки користувача
// const UserCard = ({ user }) => {
//   return (
//     <div style={cardStyle}>
//       <h3>{user.name}</h3>
//       <p>Email: {user.email}</p>
//       <p>Телефон: {user.phone}</p>
//     </div>
//   );
// };

// // Компонент для відображення списку карток користувачів
// const UserCardList = ({ users }) => {
//   return (
//     <div style={listStyle}>
//       {users.length > 0 ? (
//         users.map((user, index) => <UserCard key={index} user={user} />)
//       ) : (
//         <p>Список користувачів порожній</p>
//       )}
//     </div>
//   );
// };

// // Декоративні стилі для карток
// const cardStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "8px",
//   padding: "16px",
//   margin: "10px",
//   width: "250px",
//   backgroundColor: "#f9f9f9",
// };

// const listStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
// };

// // Експортуємо компонент
// export default UserCardList;
