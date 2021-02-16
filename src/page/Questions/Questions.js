import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import Question from "../../components/Question/Question";
import "./Questions.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
const Quetions = () => {
  const { TabPane } = Tabs;
  const [data, setData] = useState([]);
  const getData = async () => {
    const questions = await axios.get(
      "https://luca-backend.herokuapp.com/questions"
    );
    setData(questions.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const Table = () => {
    return (
      <>
        {data.length > 0 ? (
          data?.map((e) => {
            return <Question key={e._id} item={e} />;
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
          <Link className="text-link add-new-question" to="/comunidad/add">
            NUEVA PREGUNTA
          </Link>
        </div>
        <div className="questions-topick-footer">
          <Tabs defaultActiveKey="1">
            <TabPane tab="POPULARES" key="1">
              <Table key="1-table"/>
            </TabPane>
            <TabPane tab="NUEVOS" key="2">
            <Table key="2-table"/>
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
