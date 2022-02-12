import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// const App = () => {
//   return (
//     //Reac.Flgmentはエラー回避のために記述する
//     // <React.Fragment>
//     //   <h1>こんにちわ！</h1>
//     //   <p>お元気ですか？</p>
//     // </React.Fragment>
//     //Reac.Flgmentは省略することが可能
//     // <>
//     //   <h1>こんにちわ！</h1>
//     //   <p>お元気ですか？</p>
//     // </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));
