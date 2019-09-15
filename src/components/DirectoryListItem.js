import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";


class DirectoryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showError: false};
    }

    render() {
        return (
            <div>
                <div
                    key={this.props.url}
                    onClick={() => { this.setState({ showError: !this.state.showError }) }}
                    style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: this.props.valid ? 'green' : 'red', width: '100%'}}
                >
                    <div>
                        {this.props.space}
                    </div>
                    <div>
                        {this.props.url}
                    </div>
                    <div>
                        {this.props.lastSeen !== undefined ? moment.unix(this.props.lastSeen).utc().fromNow() : 'unknown'}
                    </div>
                </div>
                <div style={{ display: this.state.showError ? 'block' : 'none' }}>
                    {this.props.errMsg}
                </div>
            </div>
        );
    }
}

DirectoryListItem.propTypes = {
    url: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
    space: PropTypes.string,
    lastSeen: PropTypes.number,
    errMsg: PropTypes.string,
};

export default DirectoryListItem
