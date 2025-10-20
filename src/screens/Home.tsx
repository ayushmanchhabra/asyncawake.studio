import { Box, Link, List, ListItem, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box>
            <Typography data-testid="home-title" style={{ textAlign: 'left' }} variant="h4">Async Awake</Typography>
            <br />
            <Typography data-testid="home-subtitle" style={{ textAlign: 'left' }} variant='subtitle1'>
                A technology blog about coding, software engineering, cyber security and more.
            </Typography>
            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="home-posts" href={`#/blog/post`}>Blog</Link>
                </ListItem>
            </List>
        </Box>
    );
}
