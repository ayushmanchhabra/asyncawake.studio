import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import posts from '../content/posts.json';
import React from "react";

export default function Author() {

    const { name } = useParams();

    const [postsByAuthor, setPostsByAuthor] = React.useState<{ name: string, author: string, date: string }[]>([]);

    React.useEffect(() => {
        const tmpPosts = [];
        for (const post of posts) {
            if (post.author === name) {
                tmpPosts.push(post);
            }
        }
        setPostsByAuthor(tmpPosts);
    }, [name]);

    return (
        <Box style={{ display: 'block' }}>
            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="author-backtomainpage" href={`/`}>Go back to main page</Link>
                </ListItem>
                <br />
                {name && <Typography style={{ textAlign: 'left' }}>Posts by {name}</Typography>}
                <br />
                {postsByAuthor.map((post) => (
                    <ListItem key={post.date} style={{ paddingLeft: 0 }}>
                        <Link href={`#/post/${post.date}`}>{post.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
