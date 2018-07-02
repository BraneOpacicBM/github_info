import React from 'react';
import css from './InfoRow.css';

const InfoRow = (props) => {

    console.log("From info row")
    console.log(props.info.login);


    switch (props.type) {
        case 'name':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Name</span>
                <div className={css.rightSection}>
                    <span className={css.InfoText}>{props.info.login}</span>
                    <span className={css.changeText}>+</span>
                </div>
            </div>
        case 'blog':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Blog</span>
                <div className={css.rightSection}>
                    <span className={css.InfoText}>{props.info.blog}</span>
                    <span className={css.changeText}>+</span>
                </div>
            </div>
        case 'company':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Company</span>
                <div className={css.rightSection}>
                    <span className={css.InfoText}>{props.info.company}</span>
                    <span className={css.changeText}>+</span>
                </div>
            </div>
        case 'location':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Location</span>
                <div className={css.rightSection}>
                    <span className={css.InfoText}>{props.info.location}</span>
                    <span className={css.changeText}>+</span>
                </div>

            </div>
        default:
            return null;
    }
}

export default InfoRow;