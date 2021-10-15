import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { noticies } from "../../redux/actionCreaton";
import Navbar from "../navbar/navbar";
import style from "./home.module.css";

const Home = () => {
  const [state, setState] = useState({
    post: null,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:5000/post").then(({ data }) => {
      succesFetch(data);
    });
  }, []);

  const succesFetch = (data) => {
    dispatch(noticies(data));
    setState({
      ...state,
      post: data,
    });
  };

  return (
    <div className={style.Container}>
      <Navbar />
      <div className={style.About}>
        {/* <img src="https://www.logg.com.ar/static/NewPublic/home/armatupc.png"></img> */}
      </div>
      <div className={style.Noticies}>
        {state.post &&
          state.post.map((item, index) => {
            return (
              <div className={style.Noticie} key={index}>
                <h4 onClick={() => history.push(`/noticias/${item.id}`)}>
                  {item.post_title}
                </h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
