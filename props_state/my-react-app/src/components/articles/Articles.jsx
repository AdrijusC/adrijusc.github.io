import React, { useState } from 'react';
import Article from "../article/Article";
import AddArticle from "../addArticle/addArticle";

const Articles = () => {
    const [form, setForm] = useState(false);
    const [articleList, setArticleList] = useState([]);

    const addArticle = (data) => {
        console.log("Adding article:", data);
        setArticleList((prevData) => [...prevData, { ...data, id: Date.now() }]); 
        setForm(false);
    };

    console.log("Article list:", articleList);
    console.log("Form state:", form);

    return (
        <main>
            <button onClick={() => setForm((prev) => !prev)}>Prideti naujiena</button>
            {form && <AddArticle onSave={addArticle} />}
            <h1>Naujienos</h1>
            {articleList.length > 0 ? (
                articleList.map((article) => (
                    <Article
                        key={article.id}
                        title={article.title}
                        content={article.content}
                    />
                ))
            ) : (
                <p>No articles yet.</p>
            )}
        </main>
    );
};

export default Articles;