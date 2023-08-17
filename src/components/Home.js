import React from "react";

function Home(props) {
  // console.log(props.user.name)\
  const h1Color=props.user.color
  return (
    <div id="home">
      <h1 style={{ color: h1Color }}>
        {props.user.name} is a Web Developer from {props.user.city}
      </h1>
    </div>
  );}


export default Home;
