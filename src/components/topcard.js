import React from "react";

const TopCard = (props) => {
  return (
    <div style={{ display : "flex" ,
    justifyContent:"space-between",
    borderRadius : "1.3rem",
    width: "23rem",
    height: "8rem",
    padding : "10px",
  background: "white"}}
    >
      <div style={{background :`url(${props.img1})`, width: "25%" , height : "95%" , borderRadius : "1.3rem" }}>
      </div>
      <div style={{
        width : "70%"
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