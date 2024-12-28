import { Box, Link, List, ListItem, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box>
            <Typography style={{ textAlign: 'left' }} variant="h4">Async Awake</Typography>
            <br />
            <Typography style={{ textAlign: 'left' }} variant='subtitle1'>A technology blog about coding, software engineering, cyber security and more.
            </Typography>
            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link href={`/post`}>Posts</Link>
                </ListItem>
            </List>
        </Box>
    );
}
