import Link from 'next/link';
import { Grid, Text, Card, Button } from '@nextui-org/react';

const Post = ({ post }) => {
    return (
        <Grid>
            <Card>
                <Card.Header>
                    <Text weight="bold">{post.id}. {post.title}</Text>
                </Card.Header>

                <Card.Body>
                    <Text>{post.body}</Text>
                </Card.Body>

                <Card.Footer>
                    <Link href='/'>
                        <Button size="sm" auto>back</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Grid>
    );
};

export default Post;