import React from "react";
import { Button, Input } from "antd";
import "./AddQuestion.scss";
const AddQuetion = () => {
    const { TextArea } = Input;

  return (
    <div className="AddQuestion">
        <div></div>
        <div>
            <label className="text question-label">Título de publicación</label>
            <TextArea rows={1} className='question-textarea' />
        </div>
    </div>
  );
};
export default AddQuetion;
