import React, { useState, useEffect } from 'react';
import styles from '../components/Comments.module.scss';
import mapTime from '../mappers/mapTime';
import { storyUrl } from '../utilities/apiHelper';
import axios from 'axios';

const Comments = ({ commentId }) => {
  const [comment, setComment] = useState({});

  const getComment = async (commentId) => {
    try {
      const result = await axios
        .get(`${storyUrl + commentId}.json`)
        .then(({ data }) => data);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getComment(commentId).then((data) => {
      setComment(data);
    });
  }, []);

  return (
    <>
      <div className={styles.by}>
        <span>
          {comment.by} {mapTime(comment.time)} ago
        </span>
      </div>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      ></div>
    </>
  );
};

export default Comments;
