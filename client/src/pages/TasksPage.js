import { useCallback, useState, useEffect } from "react";
import axios from "axios";

const TasksPage = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState("");

    const getAllTasks = useCallback(async () => {
        // we will use nginx to redirect it to the proper URL
        const data = await axios.get("/api/values/all");
        setValues(data.data.rows.map((row) => row.number));
    }, []);

    const saveNumber = useCallback(
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
        <div className="flex flex-col items-center gap-3">
            <div className="">
                {values.map((value, index) => (
                    <div key={index} className="value">
                        {value}
                    </div>
                ))}
            </div>
            <form onSubmit={saveNumber}>
                <label>Enter your value: </label>
                <input
                    className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
                <button className="cursor-pointer bg-slate-300 py-2 px-4 rounded-lg ml-3">Submit</button>
            </form>
        </div>
    );
};

export default TasksPage;
