import s from './Message.module.css';
import React from 'react';

function Message(props) {
    let newPostElement = React.createRef()
    const addMessage = () => {
        let message = newPostElement.current.value
        alert(message)
    }

    return <div className={s.message}>
        {/*<textarea ref={newPostElement} ty></textarea>*/}
        {/*<button onClick={addMessage}>add</button>*/}
        {props.message}
    </div>
}

export default Message