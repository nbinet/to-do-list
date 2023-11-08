import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState("");

    const getAllTasks = useCallback(async () => {
        const data = await axios.get("/api/values/all");
        setValues(data.data.rows.map((row) => row.number));
    }, []);

    const saveTask = useCallback(
        async (event) => {
            event.preventDefault();

            await axios.post("/api/values", {
                value,
            });

            setValue("");
            getAllTasks();
        },
        [value, getAllTasks]
    );

    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <div className="flex flex-col items-center gap-2">
            <span className="">Today, there is {values.length} tasks created</span>
            <Link className="cursor-pointer bg-slate-300 py-2 px-4 rounded-lg" to="/tasks">
                Go see them
            </Link>
        </div>
    );
};

export default HomePage;
