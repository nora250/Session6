//コンポーネントと明示的にわかるよう拡張子は「.jsx」が望ましい
/*eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfullMassgae } from "./components/ColorfullMassage";
const App = () => {
  //state
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);
  //ボタンを押した時の処理
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onCliceSwitchShowFlg = () => {
    console.log(faceShowFlg);
    setFaceShowFlg(!faceShowFlg);
  };
  //カウントアップした数が3の倍数の時のみ顔文字を表示する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
  }, [num]);

  //htmlに戻す内容
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColorfullMassgae color="blue">お元気ですか？</ColorfullMassgae>
      <ColorfullMassgae color="pink">元気です！</ColorfullMassgae>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onCliceSwitchShowFlg}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlg && <p>:D</p>}
    </React.Fragment>
  );
};

export default App;
