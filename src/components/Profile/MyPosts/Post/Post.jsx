import React from 'react';
import s from '../Post/Post.module.css'



function Post(props) {
    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPXnTo1AQYHiF2v1kAenUAiLYalRSuT_2Fw&usqp=CAU"/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
    )
}

export default Post