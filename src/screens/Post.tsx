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
            <Markdown>{post}</Markdown>

            {posts.map((post) => (
                <List key={post.date}>
                    <ListItem>
                        <Link href={`/post/${post.date}`}>{post.name}</Link>
                    </ListItem>
                </List>
            ))}
        </Box>
    );
}
