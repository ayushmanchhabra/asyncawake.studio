import { Box, Link, List, ListItem } from "@mui/material";
import Markdown from 'react-markdown';
import { useParams } from "react-router-dom";

import {
    IMG_20251001_1,
    IMG_20251001_2,
    IMG_20251001_3,
    IMG_20251001_4,
    IMG_20251001_5,
    IMG_20251001_6
} from '../assets/index';
import posts from '../content/posts.json';
import { usePost } from "../providers";

export default function Post() {
    const { date } = useParams();
    const { post } = usePost(date);

    const images: Record<string, string> = {
        '2025-10-01_1.jpeg': IMG_20251001_1,
        '2025-10-01_2.jpeg': IMG_20251001_2,
        '2025-10-01_3.jpeg': IMG_20251001_3,
        '2025-10-01_4.jpeg': IMG_20251001_4,
        '2025-10-01_5.jpeg': IMG_20251001_5,
        '2025-10-01_6.jpeg': IMG_20251001_6,
    };

    return (
        <Box>
            <div style={{ textAlign: 'left' }}>
                <Markdown
                    components={{
                        img: ({ src, alt, ...props }) => {
                            const resolvedSrc = images[src as string]; // get imported asset
                            if (!resolvedSrc) {
                                console.warn(`Image not found: ${src}`);
                            }
                            return (
                                <img
                                    {...props}
                                    src={resolvedSrc || src}
                                    alt={alt}
                                    style={{ width: '100%' }}
                                />
                            );
                        },
                    }}
                >
                    {post}
                </Markdown>
            </div>

            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="posts-backtomainpage" href={`/`}>Go back to main page</Link>
                </ListItem>
                {posts.map((p) => (
                    <ListItem key={p.date} style={{ paddingLeft: 0 }}>
                        <Link href={`#/post/${p.date}`}>{p.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
