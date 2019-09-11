import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDirectory } from './actions/directoryAction'
import moment from 'moment';
import './App.css';

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  fetchDirectory: (valid) => dispatch(fetchDirectory(valid))
});


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  };

  getListElement = (item) => (
      <div>
          <div key={item.url} style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: item.valid ? 'green' : 'red', width: '100%'}}>
              <div>
                  {item.space}
              </div>
              <div>
                  {item.url}
              </div>
              <div>
                  {item.lastSeen !== undefined ? moment.unix(item.lastSeen).utc().fromNow() : 'unknown'}
              </div>
          </div>
          <div>
              {item.errMsg}
          </div>
      </div>
  )

  render() {
    const foo = this.props.directoryReducer.items.valid.concat(this.props.directoryReducer.items.invalid).sort((a,b) => a.url > b.url ? 1 : -1);

    return (
        <div className="App">
          <button onClick={() => this.props.fetchDirectory(true)}>Valid</button>
          <button onClick={() => this.props.fetchDirectory(false)}>Invalid</button>
            {foo.map(this.getListElement)}
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
