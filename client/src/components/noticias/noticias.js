import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import cloneDeep from 'lodash/cloneDeep';
import { connect } from "react-redux";
import axios from "axios";
import style from "./noticias.module.css";

const mapStateToProps = (state) => {
  return { store: state };
};

const Noticias = ({ store }) => {
  const history = useHistory();
  
  const [state, setState] = useState({
    id: window.location.href.split("/").pop(),
    post: [""],
    author: "",
    noticiesStore: store.noticies
  });

  const [otherNoticies,setNoticies] = useState({
    noticiesStore: store.noticies
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (Number(state.id)) {
      const post = await axios
        .get(`http://localhost:5000/post/${state.id}`)
        .then(({ data }) => {
          return data;
        });
      setState({
        ...state,
        post: post.post,
        author: post.author
      });
      selectTheOtherNoticies()
    } else {
      selectLast();
    }
  };

  const selectLast = async () => {
    const { id } = state.noticiesStore.pop();
    const post = await axios
      .get(`http://localhost:5000/post/${id}`)
      .then(({ data }) => { 
        return data;
      });
    setState({
      ...state,
      post: post.post,
      author: post.author
    });
  };

  const selectTheOtherNoticies = async () => {  
    const id = Number(window.location.href.split("/").pop())
    var otherNoticies = cloneDeep(store.noticies)
    const filterNoticies = otherNoticies.filter(noticie => noticie.id !== id)
    setNoticies({
      noticiesStore: filterNoticies
    })
  }

  return (
    <div className={style.Container}>
      <div className={style.Notice}>
        <div className={style.ContainerPhoto}>
          <div className={style.Title}>{state.post.post_title}</div>
        </div>
        <div className={style.Content}>{state.post.post_text}</div>
      </div>
      <div className={style.Author}>
        <div className={style.PhotoAutor}>
          <img className={style.ImgPhotoAutor} src={state.author.photoUrl}/>
        </div>
        <h4 className={style.About}>Acerca de: {state.author.name} </h4>
        <div className={style.AboutAuthor}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </div>
        <div>
        { otherNoticies.noticiesStore && otherNoticies.noticiesStore.map((noticie, index) => {  
          return(
            <div key={index} onClick={() => history.push(`/noticias/${noticie.id}`)} className={ style.TitleOtherNoticie }>
              <p>{ noticie.post_title }</p>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Noticias);