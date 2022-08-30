import axios from 'axios';
import { useState } from 'react';

const Form = () => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const id = Math.floor(Math.random() * 1000); // will serve as id
        const createdAt = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`; // will serve as date

        const values = { id, title, content, createdAt };
        try {
            const response = await axios.post('http://localhost:3000/bulletins', values);
            const data = response;
            console.log(data);
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Content</label>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />     

            <button>Submit</button>       
        </form>
    )
}

export default Form;