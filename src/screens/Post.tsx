import { Box, Link, List, ListItem } from "@mui/material";
import Markdown from 'react-markdown'
import { useParams } from "react-router-dom";

import { usePost } from "../providers";

import posts from '../content/posts.json';

export default function Post() {

    const { date } = useParams();

    const { post } = usePost(date);

    return (
        <Box style={{ display: 'block' }}>
            <div style={{ textAlign: 'left' }}>
                <Markdown>{post}</Markdown>
            </div>

            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link href={`/`}>Go back to main page</Link>
                </ListItem>
                {posts.map((post) => (
                    <ListItem key={post.date} style={{ paddingLeft: 0 }}>
                        <Link href={`/post/${post.date}`}>{post.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
