import React, { useState } from 'react';

const AddArticle = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSave(formData);
        setFormData({ title: '', content: '' });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    onChange={handleChange}
                    name="title"
                    className="form-control"
                    placeholder="Pavadinimas"
                    value={formData.title}
                />
            </div>
            <div className="form-group">
                <textarea
                    placeholder="Naujienos tekstas"
                    onChange={handleChange}
                    name="content"
                    className="form-control"
                    value={formData.content}
                />
            </div>
            <div className="form-group">
                <button type="submit">Prideti naujiena</button>
            </div>
        </form>
    );
};

export default AddArticle