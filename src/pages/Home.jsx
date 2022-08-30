import { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Home = ({setCurrentId}) => {

    const [bulletins,setBulletins] = useState(null);

    const deleteBulletin = (id) => {
        const deleted = bulletins.filter(bulletin => bulletin.id !== id)
        setBulletins(deleted);
    }

    useEffect(() => {
        const fetchBulletin = async () => {
            const response = await fetch('http://localhost:3000/bulletins');
            const data = await response.json();
            setBulletins(data);
        }
        fetchBulletin();
    },[bulletins])

    return (
        <main className="home">
            <h1 className="home__title">Home Page</h1>
            <div className="home__lists">
                { bulletins && bulletins.map((bulletin) => (
                    <Link to={`/details/${bulletin.id}`} className="card" key={bulletin.id}>
                        <h2 className="card__title">{bulletin.title}</h2>
                        <p className="card__content">{bulletin.content}</p>
                        <span className="card__createdAt">{bulletin.createdAt}</span>
                        <button onClick={() => deleteBulletin(bulletin.id)}>Delete</button>
                    </Link>
                )) }
            </div>
        </main>
    )
}

export default Home;