import React from "react";
import star from "../../assets/star.svg";
import starDefault from "../../assets/star-default.svg";
import comments from "../../assets/comments.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import share from "../../assets/share.svg";

import "./Question.scss";

import { Menu, Dropdown } from "antd";
import { EditOutlined, DashOutlined, DeleteOutlined } from "@ant-design/icons";

const Question = ({ item, user, deleteQuestions }) => {
  const handlerFavorite = () => {};
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );

  async function handleMenuClick(e) {
    if (e.key == 2) {
      deleteQuestions(item._id);
    }
    if (e.key == 1) {
      window.location.assign(
        `http://localhost:3000/comunidad/add?idQuestion=${item._id}`
      );
    }
  }

  return (
    <div key={item._id} className="Card">
      <div className="block-avatar-title">
        <img className="avatar" src={item.authorAvatar} />

        <div className="title-publication">
          <p className="title">{item.title}</p>
          <p className="publication">{item.publication}</p>
        </div>
      </div>
      <div className="like">
        <div className="icon-like">
          <img src={dislike} /> <img src={like} />{" "}
        </div>
        <div className="like-text">
          <span>Pregunta juan.c23 en </span>
          <span className="subject">Matemáticas 6º</span>
        </div>
      </div>
      <div className="end">
        <div className="comments">
          <img src={comments} />
          <span className="comments-count">{item.comment.length}</span>
        </div>

        <div className="share-favorite">
          <img src={share} />
          {user.favorite.find((e) => e == item._id) ? (
            <img src={star} onClick={() => handlerFavorite(item._id)} />
          ) : (
            <img src={starDefault} onClick={() => handlerFavorite(item._id)} />
          )}
       
          <Dropdown  className="context-menu" overlay={menu}>
            <DashOutlined />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default Question;
