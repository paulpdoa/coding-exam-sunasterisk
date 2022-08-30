import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const Details = () => {

    const {id} = useParams();
    const [detail,setDetail] = useState(null);
    const [isEdit,setIsEdit] = useState(false)

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/bulletins/${id}`)
            .then(data => {
                setTitle(data.data.title);
                setContent(data.data.content);
                setDetail(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const handleSubmit = () => {
        const values = { title,content };
        
        axios.patch(`http://localhost:3000/bulletins/${id}`, values)
            .then(data => {
                console.log(data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
      
    return (
        <div>
            { isEdit ? 
               <>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <input value={content} onChange={(e) => setContent(e.target.value)} />
               </> : 
                <>
                    <h1>{detail?.title}</h1> 
                    <p>{detail?.content}</p>
                    <span>{detail?.createdAt}</span>
                </>
            }
            
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Details;