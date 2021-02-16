import React from "react";
import { Card, Avatar } from "antd";
import star from "../../assets/star.svg";
import comments from "../../assets/comments.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import share from "../../assets/share.svg";

import "./Question.scss";

const Question = ({ item }) => {
  const { Meta } = Card;
  const handlerFavorite =()=> {

  }
  return (
    <div key={item._id} className="Card">
      <div className="block-avatar-title">
        <img
           className="avatar"
          src={item.authorAvatar}
        />
        <div className="title-publication">
          <p className="title">{item.title}</p>
          <p className="publication">{item.publication}</p>
          <div className="like">
            <img src={dislike} /> <img src={like} />
            <div className="like-text">
              <span>Pregunta juan.c23 en </span>
              <span className="subject">Matemáticas 6º</span>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <div className="comments">
          <img src={comments} />
          <span className="comments-count">132</span>
        </div>
        <div className="share-favorite">
          <img src={share} />
          <img src={star}  onClick={()=> handlerFavorite(item._id)}/>
        </div>
      </div>
    </div>
  );
};
export default Question;
