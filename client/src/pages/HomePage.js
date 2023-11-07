import { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState("");

    const getAllNumbers = useCallback(async () => {
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
            getAllNumbers();
        },
        [value, getAllNumbers]
    );

    useEffect(() => {
        getAllNumbers();
    }, []);

    return (
        <div className="bg-green-500 flex flex-col gap-2">
            {/* <button onClick={getAllNumbers}>Get all numbers</button> */}
            <span className="">Today, there is {values.length} tasks created</span>
            <Link className="cursor-pointer" to="/tasks">
                Go see them
            </Link>
        </div>
    );
};

export default HomePage;
