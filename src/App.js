import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Route } from "react-router-dom";
import Page1 from "./Screens/Page1";
import Page2 from "./Screens/Page2";
import Page3 from "./Screens/Page3";
import Page4 from "./Screens/Page4";

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <section className="App__header">
          <Route path="/" component={Header} />
        </section>

        <section className="App__content">
          <Route exact path="/solution-dev" component={Page1} />
          <Route exact path="/solution-design" component={Page2} />
          <Route exact path="/taq-dev" component={Page3} />
          <Route exact path="/administration" component={Page4} />
        </section>

        <section className="App__Footer">
          <Route path="/" component={Footer} />
        </section>
      </div>
    );
  }
}

export default App;
