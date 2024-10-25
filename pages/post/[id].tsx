import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Loading } from '@nextui-org/react';
import Post from '@/components/Post';
import { getPost } from '@/lib/api';

export default function PostPage() {
    const { query: { id } } = useRouter();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            setError('');

            getPost(id)
                .then(data => setPost(data))
                .catch(err => setError(err.message))
                .finally(() => setIsLoading(false))
        }
    },[id]);

    if (error) return <div>{error}</div>;

    return (
        <Grid.Container gap={2} justify="center">
            {
                isLoading
                    ? <Loading>Loading...</Loading>
                    : <Post post={post}/>
            }
        </Grid.Container>
    );
}