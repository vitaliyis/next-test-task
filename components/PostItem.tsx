import Link from 'next/link';
import { Grid, Text, Card, Button } from '@nextui-org/react';

const PostItem = ({ post }) => {
    return (
        <Grid xs={12} sm={6} md={4}>
            <Card>
                <Card.Header>
                    <Text weight="bold" >{post.id}. {post.title}</Text>
                </Card.Header>

                <Card.Body>
                    <Text>{post.body?.substring(0,60)}...</Text>
                </Card.Body>

                <Card.Footer>
                    <Link href={`/post/${post.id}`}>
                        <Button size="sm" auto>more details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Grid>
    );
};

export default PostItem;