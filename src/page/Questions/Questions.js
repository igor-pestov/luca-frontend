import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Question from "../../components/Question/Question";
import "./Questions.scss";
import { Link } from "react-router-dom";
import icEdit from "../../assets/ic_edit.svg";
import Loading from "../../components/Loading/Loading";
import api from "../../api/api";
const Quetions = () => {
  const { TabPane } = Tabs;
  const [data, setData] = useState([]);
  const getData = async () => {
    const questions = await api.getAllQuestions();
    setData(questions.data);
  };
  const deleteQuestions = async (id) => {
    const res = await api.deleteQuestion(id);
    if (res.status == 200) {
      getData();
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));

  const Table = () => {
    console.log(data);
    return (
      <>
        {data.length > 0 ? (
          data?.map((e) => {
            return (
              <Question
                user={user}
                key={e._id}
                item={e}
                deleteQuestions={deleteQuestions}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </>
    );
  };
  return (
    <div className="Questions">
      <div className="questions-topick">
        <div className="questions-topick-head">
          <h2 className="title-questions">Comunidad Luca</h2>
          <Link
            className="text-link add-new-question mobile-button"
            to="/comunidad/add"
          >
            <span>NUEVA PREGUNTA</span>
            <img src={icEdit} />
          </Link>
        </div>
        <div className="questions-topick-footer">
          <Tabs defaultActiveKey="1">
            <TabPane tab="POPULARES" key="1">
              <Table key="1-table" />
            </TabPane>
            <TabPane tab="NUEVOS" key="2">
              <Table
                key="2-table"
              />
            </TabPane>
            <TabPane tab="SEGUIDOS" key="3">
              <Loading />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default Quetions;
