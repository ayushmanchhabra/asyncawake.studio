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
import {
    POST_20241228,
    POST_20250401,
    POST_20250801,
    POST_20250901,
    POST_20251001,
    postsInfo,
} from "../content/index";

export default function Post() {
    const { date } = useParams();

    const posts: Record<string, string> = {
        '2024-12-28.md': POST_20241228,
        '2025-04-01.md': POST_20250401,
        '2025-08-01.md': POST_20250801,
        '2025-09-01.md': POST_20250901,
        '2025-10-01.md': POST_20251001,
    };

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
                                    style={{
                                        maxHeight: 400,
                                        maxWidth: '100%',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            );
                        },
                    }}
                >
                    {posts[date + '.md']}
                </Markdown>
            </div>

            <br />

            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="posts-backtomainpage" href={`/`}>Home</Link>
                </ListItem>
                {postsInfo.map((post) => (
                    <ListItem key={post.date} style={{ paddingLeft: 0 }}>
                        <Link href={`#/blog/post/${post.date}`}>{post.name}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
