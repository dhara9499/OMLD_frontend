import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get('http://localhost:8000/api/posts'); // Replace with your API endpoint
                setPosts(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading && <p>Loading posts...</p>}
            {error && <p>Error: {error.message}</p>}
            {posts.length > 0 && (
                <ul>
                    {
                        <li>{posts}</li>
                    }
                </ul>
            )}
            {posts.length === 0 && !isLoading && <p>No posts found.</p>}
        </div>
    );
};

export default Posts;