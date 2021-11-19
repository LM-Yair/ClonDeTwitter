import React, { useState } from "react";
import "./Inicio.css";
import Header from "../Components/Header";
import BasicTools from "../Components/BasicTools";
import TweetTemplate from "../Components/TweetTemplate";
import userImg from "../Assets/user-jeanette.jpg";
import NavBar from "../Components/NavBar";
import News from "../Components/News";
import CreateTweet from "../Components/CreateTweet";

const Inicio = () => {
  const [navIsActive, setNavIsActive] = useState(false);
  const handleNavBar = () =>
    navIsActive ? setNavIsActive(false) : setNavIsActive(true);
  return (
    <section className="PageContainer">
      <NavBar navIsActive={navIsActive} handleNavBar={handleNavBar} />
      <main className="Inicio">
        <Header handleNavBar={handleNavBar} />
	<CreateTweet />
        <TweetTemplate
          userName={"Usuario_1"}
          userAt={"@Usuario_1"}
          userImg={userImg}
          comments={10}
          retweets={14}
          likes={8}
        >
          <p>
            Que emoción! Ya casi vuelve a ser tendencia que la Universidad no
            sirve. Cada comienzo de ciclo escolar es tendencia.
          </p>
        </TweetTemplate>
        <TweetTemplate
          userName={"Usuario_1"}
          userAt={"@Usuario_1"}
          userImg={userImg}
          comments={10}
          retweets={14}
          likes={8}
        >
          <p>
	    Yo voy a ser el tipo mamón que irá con gabardina y gafas oscuras a ver Matrix 😎
          </p>
        </TweetTemplate>
        <TweetTemplate
          userName={"Usuario_1"}
          userAt={"@Usuario_1"}
          userImg={userImg}
          comments={10}
          retweets={14}
          likes={8}
        >
          <p>
	    Después de 100 días dándole al frontend ya me río así: jsjsjsjsjstsjsjsjs
          </p>
        </TweetTemplate>
        <TweetTemplate
          userName={"Usuario_1"}
          userAt={"@Usuario_1"}
          userImg={userImg}
          comments={10}
          retweets={14}
          likes={8}
        >
          <p>
	    Ahora que está caído #Spotify no puedo escuchar las listas de "cumbiones para trailero", o "rolones para trapear"
          </p>
        </TweetTemplate>
        <TweetTemplate
          userName={"Usuario_1"}
          userAt={"@Usuario_1"}
          userImg={userImg}
          comments={10}
          retweets={14}
          likes={8}
        >
          <p>
            Que emoción! Ya casi vuelve a ser tendencia que la Universidad no
            sirve. Cada comienzo de ciclo escolar es tendencia.
          </p>
        </TweetTemplate>
        <BasicTools />
      </main>
      <News />
    </section>
  );
};

export default Inicio;
