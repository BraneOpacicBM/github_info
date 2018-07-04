import React, { Component } from "react";
import { connect } from "react-redux";
import { getGitHubInfo } from "../../store/actions/actions";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";
import Spinner from "../../Components/Spinner/Spinner";

class ShowInfo extends Component {

  state = {
    githubUser: null
  }

  componentWillMount() {
    const url =
      "https://api.github.com/user?access_token=3ae2c95ac1e6bb66a7f6dbc5130e29286edb9027";
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
