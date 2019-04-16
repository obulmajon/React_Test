import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
        <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZuY7ZidjeXoxEUtXP9Yz_EZjRvKaqza0HsIV8sj8lZeF7tnk" />
          { props.message }
          <div className="item1">
            <span>like </span>{props.likesCount}
          </div>
        </div>
    )
}

export default Post;