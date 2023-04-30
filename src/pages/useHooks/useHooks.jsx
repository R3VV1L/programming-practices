import React from 'react';
import { Link } from 'react-router-dom';

export const UseHooks = () => {

    return (

        <div className="App">
            <div className="header">programming-practices
                <Link className="link" to="/arraysMethods">/GoArraysMethods</Link>
                <Link className="header" to="/useHooks">/GoUseHooks</Link>
            </div>
            <header className="App-header">
                Тут будут Хуки
            </header>
            <div className='appBody'>

            </div>
        </div>
    );
};
