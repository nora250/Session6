//コンポーネントと明示的にわかるよう拡張子は「.jsx」が望ましい
import React from "react";

const App = () => {
  //ボタンを押した時の処理
  const onClickButton = () => {
    alert("ボタン");
  };

  //コンテンツのスタイル１
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  //htmlに戻す内容
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
