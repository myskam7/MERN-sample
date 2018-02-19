import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';


ReactDOM.render(
    <CommentBox url='http://localhost:3001/api/comment' pollInterval={2000}>
    
    </CommentBox>, 
document.getElementById('root'));

