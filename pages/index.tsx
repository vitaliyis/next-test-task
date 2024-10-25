import { Grid, Loading  } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import PostItem from '@/components/PostItem';
import { getPosts } from '@/lib/api';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');

    getPosts()
        .then(data => setPosts(data))
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false))
  }, [])

  if (error) return <div>{error}</div>;

  return (
      <Grid.Container gap={2} justify="center">
        {
          isLoading
            ? <Loading>Loading...</Loading>
            : posts?.map(post => <PostItem post={post} key={post.id} />)
        }
      </Grid.Container>
  );
}