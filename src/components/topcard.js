import React from "react";

const TopCard = (props) => {
  return (
    <div style={{ display : "flex" ,
    justifyContent:"space-between",
    borderRadius : "1.3rem",
    width: "20rem",
    height: "8rem",
    padding : "10px",
  background: "white"}}
    >
      <div style={{background :`url(${props.img1})`, width: "30%" , height : "95%" , borderRadius : "1.3rem" ,paddingRight :"2px"}}>
      </div>
      <div style={{
        width : "60%"
      }}>
        <div style={{
        textAlign : "left",
        fontSize: "1rem",
        fontWeight : "400"
      }}>
          {props.title}
        </div>
        <div style={{
        textAlign : "left",
        fontSize: "1.3rem",
        fontWeight : "500"
      }}>
         {props.content}
        </div>
      </div>
    </div>
  );
}

export default TopCard