import React, { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.btn} onClick={increment}>
                12asdasfasfh123123123uhhk
            </button>
            ;
        </div>
    );
}
