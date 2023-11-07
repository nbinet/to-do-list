import { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import TaskDetails from "./pages/TaskDetails";

function App() {
    return (
        <Router>
            <Fragment>
                <header className="flex flex-row justify-between p-4">
                    <div>To-do list little app</div>
                    <Link className="cursor-pointer" to="/">
                        Home
                    </Link>
                </header>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/tasks" component={TasksPage} />
                <Route exact path="/tasks/{task_id}" component={TaskDetails} />
            </Fragment>
        </Router>
    );
}

export default App;
