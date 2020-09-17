import React from "react";
import Button from "./Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Button name={`생성`} />
        <Button name={`조회`} />
        <Button name={`수정`} />
        <Button name={`삭제`} />
      </div>
    );
  }
}

export default App;
