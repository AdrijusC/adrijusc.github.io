
function Entry (){
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src="/public/vite.svg"/>
            </div>
            <div>
                <img src="/public/vite.svg" alt="marker icon"/>
                <span>Japan</span>
                <a href="/public/vite.svg">View on google maps</a>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
            </div>
            
        </article>
    )
}

export default Entry