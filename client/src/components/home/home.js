import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import style from "./home.module.css";
import { useHistory } from "react-router";

const noticiesHard = [
  {
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Nunito",
    photoUrl:
      "2wCEAAkGBw4ODQ0NDQ0ODQoKCAoNCAgKCA8IDQoKFhEWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx9EODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK",
  },
  {
    title: "Why do we use it?",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    author: "Nunito",
    photoUrl:
      "2wCEAAkGBw4ODQ0NDQ0ODQoKCAoNCAgKCA8IDQoKFhEWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx9EODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK",
  },
  {
    title: "What is Lorem Ipsum?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Nunito",
    photoUrl:
      "2wCEAAkGBw4ODQ0NDQ0ODQoKCAoNCAgKCA8IDQoKFhEWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx9EODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK",
  },
];

const Home = () => {
  const [state, setState] = useState({
    post: [""],
  });

  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:5000/post").then(({ data }) =>
      setState({
        ...state,
        post: data.post,
      })
    );
  }, []);

  return (
    <div className={style.Container}>
      <Navbar />
      <div className={style.About}>
        {/* <img src="https://www.logg.com.ar/static/NewPublic/home/armatupc.png"></img> */}
      </div>
      <div className={style.Noticies}>
        {state.post.map((item, index) => {
          return (
            <div className={style.Noticie} key={index}>
              <h4 onClick={() => history.push(`/noticias/${item.id}`)}>
                {item.post_title}
              </h4>
            </div>
          );
        })}
        {noticiesHard.map((noticie, index) => {
          return (
            <div className={style.Noticie} key={index}>
              <h4>{noticie.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
