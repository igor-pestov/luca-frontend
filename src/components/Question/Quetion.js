import React from "react";
import { Card, Avatar } from "antd";
import  "./Quetion.scss";

const Question = () => {
    const {Meta} = Card
  return (
    <Card style={{ width: 704, height: 128 }}>
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};
export default Question;
