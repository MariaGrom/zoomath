import { useState, useEffect } from "react";
import "./CreateCardPage.scss";
import { DropdownCustom } from "../../components/Dropdown/DropdownCustom";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { CreateBlock } from "../../components/ CreateBlock/CreateBlock";
import {
  SELECTABLE_CLASSES,
  SELECTABLE_DIFFICULTY,
  SELECTABLE_SUBJECTS,
} from "../../vendor/constants";
import NewCard from "../../components/NewCard/NewCard";
import { loadConfig } from "../../config";

export const CreateCardPage = (props) => {
  const [tags, setTags] = useState([]);
  const [numberOfBlocks, setNumberOfBlocks] = useState([]);
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState();
  const [title, setTitle] = useState();

  const [blocks, setBlocks] = useState([]);
  const [otherInput, setOtherInput] = useState("");
  const [serverBlocks, setServerBlocks] = useState({});
  // const API_URL = process.env.REACT_APP_SERVER_IP;

  // const [apiUrl, setApiUrl] = useState(""); // Сохраняем API URL
  const apiUrl = "api_example";

  // useEffect(() => {
  //   const fetchConfig = async () => {
  //     const url = await loadConfig();
  //     setApiUrl(url); // Сохраняем API URL в state
  //   };
  //   fetchConfig();
  // }, []);

  const handleAddBlockClick = () => {
    setBlocks([...blocks, { file: null, title: "" }]);
  };

  const handleBlockChange = (index, field, value) => {
    const newBlocks = [...blocks];
    newBlocks[index][field] = value;
    setBlocks(newBlocks);
  };

  // const handleImageChange = (index, image) => {
  //   const newBlocks = [...blocks];
  //   newBlocks[index].image = image;
  //   setBlocks(newBlocks);
  // };

  // const handleTextChange = (index, text) => {
  //   const newBlocks = [...blocks];
  //   newBlocks[index].text = text;
  //   setBlocks(newBlocks);
  // };

  const sendData = async (e) => {
    e.preventDefault();

    console.log(
      "Состояние blocks перед отправкой:",
      blocks,
      `${apiUrl}/create/condition`
    );

    if (!apiUrl) {
      console.error("API URL не загружен");
      return;
    }

    const formData = new FormData();

    blocks.forEach((block, index) => {
      formData.append(`blocks[${index}][file]`, block.file);
      formData.append(`blocks[${index}][title]`, block.title);
    });

    formData.append("otherInput", otherInput);

    console.log("Отправленные данные:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await fetch(`${apiUrl}/create/condition`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Ответ сервера:", data);
    } catch (error) {
      console.log("Ошибка отправки:", error);
    }
  };

  function handleChangeTags(e) {
    setTags(e.target.value);
  }

  function handleChangetsubject(e) {
    setSubject(e.target.value);
  }

  const getDataCard = () => {
    fetch(`${apiUrl}/get/data`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("err");
        }
      })
      .then((response) => {
        console.log("data", response);
        // setFile(`localhost:3003` + response.file);
        // setTitle(response.title.title);
        setServerBlocks(response);
        // console.log('data.data', tasks.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      cтраница формы
      {/* Поле для других данных */}
      <input
        type="text"
        placeholder="Введите данные"
        value={otherInput}
        onChange={(e) => setOtherInput(e.target.value)}
      />
      {/* Динамические блоки */}
      {blocks.map((block, index) => (
        <div
          key={index}
          style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
        >
          <input
            type="text"
            placeholder="Введите текст"
            value={block.title}
            onChange={(e) => handleBlockChange(index, "title", e.target.value)}
          />
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) =>
              handleBlockChange(index, "file", e.target.files[0])
            }
          />
        </div>
      ))}
      <button onClick={handleAddBlockClick}>Добавить блок</button>
      <button onClick={sendData} disabled={!apiUrl}>
        Отправить
      </button>
      <button onClick={getDataCard}>получить данные</button>
      {/* {serverBlocks.map((block) => ( */}
      <NewCard key={serverBlocks._id} task={serverBlocks} />
      {/* ))} */}
    </div>
  );
};

//       <div className="form__fields">
//         {numberOfBlocks.map((item) => item)}
//         {blocks.map((block, index) => (
//           <CreateBlock
//             key={index}
//             index={index}
//             image={block.image}
//             text={block.text}
//             // onChange={() => handleBlockChange(index)}
//             onChange={(updatedBlock) => handleBlockChange(index, updatedBlock)}
//             onImageChange={(image) => handleImageChange(index, image)}
//             onTextChange={(text) => handleTextChange(index, text)}
//           />
//         ))}
//         <button onClick={handleAddBlockClick}>Создать блок</button>
//         {/* быстрое временное решение заменить на дропдаун, который ниже  */}

//         <label className="form__field">
//           <p className="form__text">задать предмет</p>
//           <input
//             id="input__subject"
//             className="form__input"
//             type="text"
//             name="subject"
//             value={subject}
//             onChange={handleChangetsubject}
//             // value={password}
//             // onChange={handleChangePassword}
//             // required
//           />
//         </label>

//         {/* <label className="form__field">
//           <p className="form__text">выберите класс</p>
//           <DropdownCustom options={SELECTABLE_CLASSES} />
//         </label>
//         <label className="form__field">
//           <p className="form__text">выберите уровень сложности</p>
//           <DropdownCustom options={SELECTABLE_DIFFICULTY} />
//         </label>
//         <label className="form__field">
//           <p className="form__text">выберите предмет</p>
//           <DropdownCustom options={SELECTABLE_SUBJECTS} />
//         </label> */}

//         <label className="form__field">
//           <p className="form__text">задайте теги, применимые к задаче</p>
//           <input
//             id="input__text"
//             className="form__input"
//             type="text"
//             name="text"
//             required
//             value={tags}
//             onChange={handleChangeTags}
//           />
//           {/* <span className="input__error input__error-email">
//                 {emailError}
//               </span> */}
//         </label>
//       </div>
//       <button onClick={getDataCard}>получить данные</button>
//       <div>
//         сформированная карточка из верхнего блока будет внизу после клика
//         <div>{title}</div>
//         <img src={`http://${file}`} alt="" />
//       </div>
//       <PrimaryButton>Сохранить</PrimaryButton>
//       {blocks.length > 0 && <button onClick={sendData}>Отправить все</button>}
//     </div>
//   );
// };
