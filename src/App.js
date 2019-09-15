import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDirectory } from './actions/directoryAction';
import './App.css';
import DirectoryList from "./components/DirectoryList";

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  fetchDirectory: (valid) => dispatch(fetchDirectory(valid))
});

const sortDirectory = (a, b) => {
    if (a.space === undefined) {
        return 0;
    }

    if (b.space === undefined) {
        return 1;
    }

    return a.space.toLowerCase() >= b.space.toLowerCase() ? 1 : -1
    // return a.url >= b.url ? 1 : -1
}


class App extends Component {
    componentWillMount() {
        this.props.fetchDirectory(true)
        this.props.fetchDirectory(false)
    }

    render() {
    const foo = this.props.directoryReducer.items.valid.concat(this.props.directoryReducer.items.invalid).sort(sortDirectory);

    return (
        <div className="App">
          <DirectoryList items={foo}/>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
