import { Box, Link, List, ListItem, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box>
            <Typography data-testid="home-title" style={{ textAlign: 'left' }} variant="h4">Async Awake</Typography>
            <br />
            <Typography data-testid="home-subtitle" style={{ textAlign: 'left' }} variant='subtitle1'>
                A technology blog about coding, software engineering, cyber security and more.
            </Typography>
            <Typography data-testid="home-content" style={{ display: "none" }} variant='subtitle1'>
                We build accessible, performant reaponsive and secure applications.
            </Typography>
            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="home-posts" href={`#/blog/post`}>Blog</Link>
                </ListItem>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link data-testid="home-zk" href={`#/service/zk`}>Zettelkasten</Link>
                </ListItem>
            </List>
        </Box>
    );
}
