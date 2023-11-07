import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainComponent from "./MainComponent";

function App() {
    return (
        <Router>
            <Fragment>
                <header className="">
                    <div>To-do list little app</div>
                    <Link to="/">Home</Link>
                </header>
                <div className="main">
                    <Route exact path="/" component={MainComponent} />
                </div>
            </Fragment>
        </Router>
    );
}

export default App;
