import React from "react";
import { useState } from "react";

const ListItemFilter = () => {
  const [toDoList, setToDoList] = useState("");
  const [menuItems, setMenuItems] = useState([
    { Id: 1, text: "Id-2", Conplet: false },
  ]);

  const handelInputAdd = (e) => {
    setToDoList(e.target.value);
  };

  const handelChanges = () => {
    if (toDoList !== "") {
      setMenuItems([
        ...menuItems,
        { Id: menuItems.length + 1, text: toDoList, Conplet: false },
      ]);
      setToDoList("");
    }
  };

  const Filter = (Id) => {
    setMenuItems((next) => next.filter((itemd) => itemd.Id !== Id));
  };

  const toggleLineThrough = (Id) => {
    setMenuItems((prev) =>
      prev.map((itemsa) =>
        itemsa.Id === Id ? { ...itemsa, Conplet: !itemsa.Conplet } : itemsa
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={toDoList}
        placeholder="Введіть нове завдання"
        onChange={handelInputAdd}
      />
      <button onClick={handelChanges}>Додати</button>
      <ul>
        {menuItems.map((item, index) => (
          <li
            style={{ textDecoration: item.Conplet ? "line-through" : "none" }}
            key={item.Id}
          >
            {item.text}
            <button onClick={() => Filter(item.Id)}>Видалити </button>
            <button onClick={() => toggleLineThrough(item.Id)}>
              {item.Conplet ? "Зроблено" : "Незроблено"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItemFilter;

// import React, { useState } from "react";

// const ListItemFilter = () => {
//   const [toDoList, setToDoList] = useState("");
//   const [menuItems, setMenuItems] = useState([]);
//   const [lineThrough, setLineThrough] = useState(false); // Початкове значення false для лінії через текст

//   // Обробник зміни тексту введення
//   const handleInputAdd = (e) => {
//     setToDoList(e.target.value);
//   };

//   // Обробник для додавання нового елемента до списку
//   const handleChanges = () => {
//     if (toDoList !== "") {
//       // Видалено .props() і зроблено правильну перевірку
//       setMenuItems([...menuItems, toDoList]);
//       setToDoList(""); // Очищаємо поле введення після додавання
//     }
//   };

//   // Фільтруємо список за введеним текстом
//   const renderToConnect = menuItems.filter((item) =>
//     item.toLowerCase().includes(toDoList.toLowerCase())
//   );

//   // Функція для зміни стану лінії через текст
//   const toggleLineThrough = () => {
//     setLineThrough(!lineThrough);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={toDoList}
//         placeholder="Введіть нове завдання"
//         onChange={handleInputAdd}
//       />
//       <button onClick={handleChanges}>Додати</button>
//       <ul>
//         {renderToConnect.map((item, index) => (
//           <li
//             key={index}
//             style={{ textDecoration: lineThrough ? "line-through" : "none" }}
//           >
//             {item}
//             <button onClick={toggleLineThrough}>
//               {lineThrough ? "Зроблено" : "Незроблено"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListItemFilter;
