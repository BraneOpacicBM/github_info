import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './ProfileInfo.css';
import InfoRow from '../InfoRow/InfoRow';

const ProfileInfo = (props) => {
    const { info } = props;
    const infoParams = ['name', 'blog', 'company', 'location'];

    const infoRows = infoParams.map((param, i) => {
        return <InfoRow key={i} type={param} info={info} />
    })

    return (
        <div className={css.ProfileInfo}>
            <div className={css.imgHolder}>
                <div className={css.GitHubImage}>
                    <img className={css.ImgAvatar} src={info.avatar_url} alt="Profile avatar" />
                </div>
            </div>
            <div className={css.GitHubInfo}>
                <div className={css.GitProfileInfo}>
                    {infoRows}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;