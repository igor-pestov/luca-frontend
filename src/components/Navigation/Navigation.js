import React, { useState } from "react";
import Element from "./Element/Element";

import lucaLogo from "../../assets/luca_logo_color.svg";
import icCommunity from "../../assets/ic_community.svg";
import icHelp from "../../assets/ic_help.svg";
import icHome from "../../assets/ic_home.svg";
import icNotification from "../../assets/ic_notification.svg";
import icStudyplan from "../../assets/ic_studyplan.svg";
import icVideo from "../../assets/ic_video.svg";

import "./Navigation.scss";

const Navigation = () => {
  const [elemetsMenu, setElementsMenu] = useState([
    {
      icon: icHome,
      title: "Inicio",
      link: "inicio",
    },
    {
      icon: icVideo,
      title: "Mis cursos",
      link: "mis_cursos",
    },
    {
      icon: icNotification,
      title: "Quizzes",
      link: "quizzes",
    },
    {
      icon: icStudyplan,
      title: "Mi plan de estudios",
      link: "mi_plan_de_estudios",
    },
    {
      icon: icCommunity,
      title: "Comunidad",
      link: "comunidad",
    },
    {
      icon: icHelp,
      title: "Centro de ayuda",
      link: "centro_de_ayuda",
    },
  ]);
  return (
    <>
      <div className="Navigation">
        <div className="navigation-logo">
          <a href="/">
            <img src={lucaLogo} />
          </a>
        </div>
        <ul className="navigation-menu">
          {elemetsMenu.map((item) => {
            return (
              <Element
                key={item.icon}
                title={item.title}
                icon={item.icon}
                link={item.link}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
