import React from 'react';
import DirectoryListItem from "./DirectoryListItem";
import PropTypes from 'prop-types';

const DirectoryList = (props) => {
    const getListElement = (item) => (
        <DirectoryListItem
            url={item.url}
            valid={item.valid}
            space={item.space}
            lastSeen={item.lastSeen}
            errMsg={item.errMsg}
        />
    );

    return (
        <div>
            {props.items.map(getListElement)}
        </div>
    );
};

DirectoryList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

export default DirectoryList;
