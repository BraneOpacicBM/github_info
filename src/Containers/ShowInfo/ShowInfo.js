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
      "https://api.github.com/user?access_token=dd356c3725013f73396189e0780d9228ee2b5241";
    this.props.getGitHubInfo(url);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          githubUser: nextProps
      })
  }

  render() {
    if(this.state.githubUser) {
        const githubUser = this.state.githubUser;
        console.log(githubUser)
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
