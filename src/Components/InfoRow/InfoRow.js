import React from 'react';
import css from './InfoRow.css';

const InfoRow = (props) => {

    console.log("From info row")
    console.log(props.info);

    switch (props.info) {
        case 'name':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Name:</span>
                <span className={css.InfoText}>{props.info.name}</span>
            </div>
        case 'blog':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Blog:</span>
                <span className={css.InfoText}>{props.info.blog}</span>
            </div>
        case 'company':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Company:</span>
                <span className={css.InfoText}>{props.info.company}</span>
            </div>
        case 'location':
            return <div className={css.InfoRow}>
                <span className={css.InfoLabel}>Location:</span>
                <span className={css.InfoText}>{props.info.location}</span>
            </div>
        default:
            return null;
    }
}

export default InfoRow;