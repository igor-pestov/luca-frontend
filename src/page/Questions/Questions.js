import { Card } from "antd";
import React from "react";
import { Button, Tabs } from "antd";
import Quetion from "../../components/Question/Quetion";
import "./Questions.scss";
const Quetions = () => {
    const { TabPane } = Tabs;

  return (
    <div className="Questions">
      <div className="questions-topick">
        <div className="questions-topick-head">
          <h2>Comunidad Luca</h2>
          <Button type="primary">NUEVA PREGUNTA</Button>
        </div>
        <div className>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Quetion />
    </div>
  );
};
export default Quetions;
