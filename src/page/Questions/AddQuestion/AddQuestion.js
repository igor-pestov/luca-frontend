import React, { useEffect, useState } from "react";
import { Button, Input, Alert } from "antd";
import { Link } from "react-router-dom";
import api from "../../../api/api";
import icClose from "../../../assets/ic_close.svg";
import "./AddQuestion.scss";
const AddQuetion = () => {
  const { TextArea } = Input;
  const [data, setData] = useState({ title: "", publication: "" });
  const [check, setCheck] = useState(true);
  const idQuestion = window.location.search.split("=")[1];
  const [error, setError] = useState("");
  useEffect(() => {
    if (idQuestion) {
      getQuestion();
    }
  }, []);
  useEffect(() => {
    if (data.title.length > 0 && data.publication.length > 0) {
      setCheck(!check);
    }
  }, [data]);
  async function getQuestion() {
    const question = await api.getAllQuestions();
    question.data.find((e) => {
      if (e._id == idQuestion) {
        setData({ title: e.title, publication: e.publication });
      }
    });
  }

  const sendQuestion = async () => {
    if (idQuestion) {
      const res = await api.editQuestion(idQuestion, data);
      if (res) {
        setData({ title: "", publication: "" });
        window.location.assign("http://localhost:3000/comunidad/");
      }
    } else
      try {
        const res = await api.addQuestion(data);
        if (res) {
          setData({ title: "", publication: "" });
          window.location.assign("http://localhost:3000/comunidad/");
        }
      } catch (e) {
        setError(e.response.data.message);
      }
  };
  return (
    <div className="AddQuestion">
      <div>
        <div className="add-questions-head">
          <h2 className="title-questions">Haz una pregunta</h2>
          <Link
            className="text-link close-question"
            type="default"
            to="/comunidad"
          >
            <span>CANCELAR</span>
            <img className="question-mobile-close" src={icClose} />
          </Link>
        </div>
        <label className="text question-label">Título de publicación</label>
        <TextArea
          rows={1}
          value={data.title}
          className="question-textarea"
          onChange={(e) => setData({ ...data, title: e.target.value })}
          placeholder="Escribe tu título aquí"
        />
      </div>
      <div className="add-question-footer">
        <label className="text question-label">Publicación</label>
        <TextArea
          rows={6}
          value={data.publication}
          className="question-textarea"
          onChange={(e) => setData({ ...data, publication: e.target.value })}
          placeholder="Escribe tu publicación aquí"
        />
        {error && (
          <Alert
            message={error}
            type="warning"
            closable
            // onClose={onClose}
          />
        )}
        <Button className="add-question-button" onClick={sendQuestion}>
          PUBLICAR
        </Button>
      </div>
    </div>
  );
};
export default AddQuetion;
