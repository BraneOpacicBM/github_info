import React from 'react';
import css from './Spinner.css';

const Spinner = (props) => {
    return (
        <div className={css.SpinnerWrapper}>
            <div className={css.Spinner}></div>
        </div>
    )
}

export default Spinner;