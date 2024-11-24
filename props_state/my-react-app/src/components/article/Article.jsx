import { useState } from "react"


const Article = (props) =>{
    const [likes, setLikes] = useState(0);
    const handleClick = () =>{
        setLikes(likes + 1)
    }
    
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClick}>Like</button>
            <p>Like: {likes}</p>
        </article>
    )
}
export default Article