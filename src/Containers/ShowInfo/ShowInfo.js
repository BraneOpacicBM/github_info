import React, { Component } from "react";
import { connect } from "react-redux";
import { getGitHubInfo, url } from "../../store/actions/actions";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";
import Spinner from "../../Components/Spinner/Spinner";

class ShowInfo extends Component {

  state = {
    githubUser: null
  }

  componentWillMount() {
    this.props.getGitHubInfo(url);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      githubUser: nextProps
    })
  }

  render() {
    if (this.state.githubUser) {
      const githubUser = this.state.githubUser;
      return <ProfileInfo info={githubUser.info} />
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = state => {
  return {
    info: state.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGitHubInfo: url => dispatch(getGitHubInfo(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowInfo);
