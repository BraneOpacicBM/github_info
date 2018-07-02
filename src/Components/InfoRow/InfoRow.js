import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './InfoRow.css';
import { getUserFeedback } from '../../store/actions/actions';

class InfoRow extends Component {

    changeValueHandler = (type) => {
        this.props.getUserFeedback(type);
    }

    render() {

        let nameGroup = <div className={css.nameGroup}>
            <span className={css.InfoText}>{this.props.info.login}</span>
            <span className={css.changeText} onClick={() => this.changeValueHandler(this.props.type)}>+</span>
        </div>;
        let blogGroup = <div className={css.blogGroup}>
            <span className={css.InfoText}>{this.props.info.blog}</span>
            <span className={css.changeText} onClick={() => this.changeValueHandler(this.props.type)}>+</span>
        </div>;
        let companyGroup = <div className={css.companyGroup}>
            <span className={css.InfoText}>{this.props.info.company}</span>
            <span className={css.changeText} onClick={() => this.changeValueHandler(this.props.type)}>+</span>
        </div>;
        let locationGroup = <div className={css.locationGroup}>
            <span className={css.InfoText}>{this.props.info.location}</span>
            <span className={css.changeText} onClick={() => this.changeValueHandler(this.props.type)}>+</span>
        </div>;

        if (this.props.changeName) {
            nameGroup = <input type="text" placeholder={this.props.info.login}/>;
        }
        if (this.props.changeBlog) {
            blogGroup = <input type="text" placeholder={this.props.info.blog}/>;
        }
        if (this.props.changeCompany) {
            companyGroup = <input type="text" placeholder={this.props.info.company}/>;
        }
        if (this.props.changeLocation) {
            locationGroup = <input type="text" placeholder={this.props.info.location}/>;
        }

        switch (this.props.type) {
            case 'name':
                return <div className={css.InfoRow}>
                    <span className={css.InfoLabel}>Name</span>
                    <div className={css.rightSection}>
                        {nameGroup}
                    </div>
                </div>
            case 'blog':
                return <div className={css.InfoRow}>
                    <span className={css.InfoLabel}>Blog</span>
                    <div className={css.rightSection}>
                        {blogGroup}
                    </div>
                </div>
            case 'company':
                return <div className={css.InfoRow}>
                    <span className={css.InfoLabel}>Company</span>
                    <div className={css.rightSection}>
                        {companyGroup}
                    </div>
                </div>
            case 'location':
                return <div className={css.InfoRow}>
                    <span className={css.InfoLabel}>Location</span>
                    <div className={css.rightSection}>
                        {locationGroup}
                    </div>

                </div>
            default:
                return null;
        }
    }
}

const mapStateToProps = state => {
    return {
        changeName: state.changeName,
        changeLocation: state.changeLocation,
        changeBlog: state.changeBlog,
        changeCompany: state.changeCompany
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFeedback: (type) => dispatch(getUserFeedback({ type: type }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoRow);