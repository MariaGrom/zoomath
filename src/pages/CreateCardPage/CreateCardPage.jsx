import { useState, useEffect } from "react";
import "./CreateCardPage.scss";
import { DropdownCustom } from "../../components/Dropdown/DropdownCustom";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { CreateBlock } from "../../components/CreateBlock/CreateBlock";
import {
  SELECTABLE_CLASSES,
  SELECTABLE_SUBJECTS,
  SELECTABLE_SKILL,
  SELECTABLE_IMG_STYLE,
} from "../../vendor/constants";
import NewCard from "../../components/NewCard/NewCard";
import { loadConfig } from "../../config";
import Select from "react-select";

export const CreateCardPage = (props) => {
  const [tags, setTags] = useState([]);

  const [blocks, setBlocks] = useState([]);
  const [topicInput, setTopicInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const [subjectInput, setSubjectInput] = useState("");
  const [subjectInputOption, setSubjectInputOption] = useState("");

  const [skillInput, setSkillInput] = useState("");
  const [skillInputOption, setSkillInputOption] = useState("");

  const [classInput, setClassInput] = useState("");
  const [classInputOption, setClassInputOption] = useState("");

  const [serverBlocks, setServerBlocks] = useState({});
  // const API_URL = process.env.REACT_APP_SERVER_IP;

  // const [apiUrl, setApiUrl] = useState(""); // Сохраняем API URL
  const apiUrl = "http://localhost:3003";

  const handleAddBlockClick = () => {
    setBlocks([...blocks, { file: null, title: "" }]);
  };

  const handleBlockChange = (index, field, value) => {
    const newBlocks = [...blocks];
    newBlocks[index][field] = value;
    setBlocks(newBlocks);
  };

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
      formData.append(`blocks[${index}][style]`, block.style);
    });

    formData.append("topicInput", topicInput);
    formData.append("subjectInput", subjectInput);
    formData.append("skillInput", skillInput);
    formData.append("tagInput", tagInput);
    formData.append("classInput", classInput);

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

  const handleChangeSkill = (selected) => {
    setSkillInputOption(selected);
    setSkillInput(selected.value);
  };

  const handleChangeClass = (selected) => {
    setClassInputOption(selected);
    setClassInput(selected.value);
  };

  const handleChangeSubject = (selected) => {
    setSubjectInputOption(selected);
    setSubjectInput(selected.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      Создай новую карточку задачи
      <div>
        <input
          type="text"
          placeholder="тема"
          value={topicInput}
          onChange={(e) => setTopicInput(e.target.value)}
        />
        <Select
          value={subjectInputOption}
          onChange={handleChangeSubject}
          options={SELECTABLE_SUBJECTS}
        />
        <Select
          value={skillInputOption}
          onChange={handleChangeSkill}
          options={SELECTABLE_SKILL}
        />
        <input
          type="text"
          placeholder="тег"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
        />
        <Select
          value={classInputOption}
          onChange={handleChangeClass}
          options={SELECTABLE_CLASSES}
        />
      </div>
      {/* Динамические блоки */}
      <div>
        {blocks.map((block, index) => (
          <div
            key={index}
            style={{ border: "1px solid red", padding: "10px", margin: "10px" }}
          >
            <input
              type="text"
              placeholder="Введите текст"
              value={block.title}
              onChange={(e) =>
                handleBlockChange(index, "title", e.target.value)
              }
            />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) =>
                handleBlockChange(index, "file", e.target.files[0])
              }
            />
            <input
              type="text"
              placeholder="стиль формулы"
              value={block.style}
              onChange={(e) =>
                handleBlockChange(index, "style", e.target.value)
              }
            />
          </div>
        ))}
        <button onClick={handleAddBlockClick}>Добавить блок</button>
      </div>
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
