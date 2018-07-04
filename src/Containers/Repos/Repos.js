import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import css from './Repos.css';
import { getGitRepos } from '../../store/actions/actions';
import RepoItem from '../../Components/RepoItem/RepoItem';

class Repos extends Component {

    state = {
        repoHolder: [],
        repoDisplay: [],
        searchFail: false,
        touched: false
    }

    componentWillMount() {
        this.props.getGitRepos();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            repoHolder: nextProps.repos
        })
    }

    findMatches = (wordToMatch, repos) => {
        return repos.filter(repo => {
            const regex = new RegExp(wordToMatch, 'gi');
            return repo.name.match(regex);
        })
    }


    filterReposHandler = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value.trim() !== "") {
                const searchedValue = e.target.value.trim();
                const searchableState = this.state.repoHolder;
                let filteredRepos = this.findMatches(searchedValue, searchableState);
                if (filteredRepos.length === 0) {
                    this.setState({
                        searchFail: true,
                        touched: true
                    })
                } else {
                    this.setState({
                        repoDisplay: filteredRepos,
                        searchFail: false
                    })
                }
            }
        }
    }

    render() {
        if (this.state.repoHolder) {
            let repoItems = null;
            if (this.state.searchFail) {
                repoItems = <h2>Sorry, nothing found</h2>;
            } else if (!this.state.searchFail || !this.state.touched) {
                repoItems = this.state.repoDisplay.map(item => {
                    return <RepoItem key={item.id} name={item.name} description={item.description} />
                })
            }
            return (
                <div className={css.Repos}>
                    <div className={css.SearchBar}>
                        <input type="text" placeholder="Search" onKeyDown={(e) => this.filterReposHandler(e)} />
                    </div>
                    <div className={css.ReposWrapper}>
                        <div className={css.ReposList}>
                            {repoItems}
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