import React from 'react';
import css from './ProfileInfo.css';
import InfoRow from '../InfoRow/InfoRow';

const ProfileInfo = (props) => {
    const {info} = props;
    const informationParams = ['name', 'blog', 'company', 'location'];

    informationParams.map((infoParam, i) => {
        return <InfoRow type={infoParam} info={info} key={i}/>
    })

    return (
        <div className={css.ProfileInfo}>
            <div className={css.HeadingHolder}>
                <h2 className={css.HeadingText}>GitHub info</h2>
            </div>
            <div className={css.imgHolder}>
                <div className={css.GitHubImage}>
                    <img className={css.ImgAvatar} src={info.avatar_url} alt="Profile avatar"/>
                </div>
            </div>
            <div className={css.GitHubInfo}>
                <div className={css.GitProfileInfo}>
                    {informationParams}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;