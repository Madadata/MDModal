import React from 'react';
import MDButton from 'mdbutton';
import styles from './MDModal.css';

const dialogId = styles['dialog'];
const closeId = styles['close'];

const MDModalGen = (Component) => {
  return (props) => (
    <div>
      <Component href={`#${dialogId}`}>Button</Component>
      <div id={dialogId} className={dialogId}>
        <div className={styles['content']}>
          <a href={`#${closeId}`} className={closeId}>x</a>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MDModalGen;
