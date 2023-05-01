import React from 'react';

const FullComment = ({comment}) => {

    const {body} = comment;

    return (
        <div>
            {body}
        </div>
    );
};

export default FullComment;