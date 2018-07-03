import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import css from './Repos.css';
import { getGitRepos } from '../../store/actions/actions';
import RepoItem from '../../Components/RepoItem/RepoItem';

class Repos extends Component {

    state = {
        repoHolder: 1
    }

    componentWillMount() {
        // this.props.getGitRepos();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            repoHolder: nextProps.repos
        })
    }

    render() {
        if(this.state.repoHolder) {
            console.log(this.state.repoHolder)
            return (
                <div className={css.Repos}>
                    <div className={css.SearchBar}>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className={css.ReposWrapper}>
                        <div className={css.ReposList}>
                            <RepoItem number="1" name="Branes git" description="Some desc here" />
                            <RepoItem number="1" name="Branes git" description="Some desc here" />
                            <RepoItem number="1" name="Branes git" description="Some desc here" />
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Spinner />;
        }
        
    }
}

const mapStateToProps = state => {
    return {
      repos: state.repos
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getGitRepos: () => dispatch(getGitRepos())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Repos);