import React from "react";

export const ColorfullMassgae = (props) => {
  //分割代入
  const { color, children } = props;
  const contentMenStyle = {
    //プロパティ名と変数名が同じ時、下記のように省略することが可能
    //color: color,
    color,
    fontSize: "18px"
  };
  return <p style={contentMenStyle}>{children}</p>;
};
