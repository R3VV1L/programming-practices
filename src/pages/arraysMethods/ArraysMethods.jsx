import React from "react";
import { Link } from "react-router-dom";


export const ArraysMethods = () => {

   const map = new Map([
        ["огурец", 500],
        ["помидор", 350],
        ["лук",    50]
      ]);


      console.log(map.get())

    return (
        <div className="App">
            <div className="header">programming-practices
                <Link className="link" to="/arraysMethods">/GoArraysMethods</Link>
                <Link className="header" to="/useHooks">/GoUseHooks</Link>
            </div>
            <header className="App-header">
                Тут массивы
            </header>
            <div className="appBody">
                    <div className="array">
                        объект : []
                    </div>
                </div>
        </div>
    );
}