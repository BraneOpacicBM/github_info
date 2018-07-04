import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from './InfoRow.css';
import { getUserFeedback, changeUserFeedback, closeUserFeedback } from '../../store/actions/actions';

class InfoRow extends Component {

    changeValueHandler = (type) => {
        this.props.getUserFeedback(type);
    }

    inputValueHandler = (e, type) => {
        if (e.key === "Enter") {
            if (e.target.value.trim() !== "") {
                this.props.changeUserFeedback(e.target.value, type);
                this.props.closeUserFeedback();
            }
        }
    }

    getHtmlBlock = (cssClass, value) => {
        return <div className={cssClass}>
            <span className={css.InfoText}>{value}</span>
            <span className={css.changeText} onClick={() => this.changeValueHandler(this.props.type)}>+</span>
        </div>;
    }

    render() {

        let nameGroup = this.getHtmlBlock(css.NameGroup, this.props.info.name)
        let blogGroup = this.getHtmlBlock(css.blogGroup, this.props.info.blog)
        let companyGroup = this.getHtmlBlock(css.companyGroup, this.props.info.company)
        let locationGroup = this.getHtmlBlock(css.locationGroup, this.props.info.location)

        if (this.props.changeName) {
            nameGroup = <input type="text" placeholder={this.props.info.login} onKeyDown={(e) => this.inputValueHandler(e, this.props.type)} />;
        }
        if (this.props.changeBlog) {
            blogGroup = <input type="text" placeholder={this.props.info.blog} onKeyDown={(e) => this.inputValueHandler(e, this.props.type)} />;
        }
        if (this.props.changeCompany) {
            companyGroup = <input type="text" placeholder={this.props.info.company} onKeyDown={(e) => this.inputValueHandler(e, this.props.type)} />;
        }
        if (this.props.changeLocation) {
            locationGroup = <input type="text" placeholder={this.props.info.location} onKeyDown={(e) => this.inputValueHandler(e, this.props.type)} />;
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
        changeCompany: state.changeCompany,
        info: state.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserFeedback: (type) => dispatch(getUserFeedback({ type: type })),
        closeUserFeedback: () => dispatch(closeUserFeedback()),
        changeUserFeedback: (value, type) => dispatch(changeUserFeedback({ value: value, type: type }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoRow);