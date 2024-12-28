import { Box, Link, List, ListItem, Typography } from "@mui/material";
import post from "../providers/post";

export default function Home() {
    return (
        <Box>
            <Typography style={{ textAlign: 'left' }} variant="h4">Async Awake</Typography>
            <br />
            <Typography style={{ textAlign: 'left' }} variant='subtitle1'>A technology blog with topics ranging from coding to software engineering to cyber security.</Typography>
            <List>
                <ListItem style={{ paddingLeft: 0 }}>
                    <Link href={`/post`}>Posts</Link>
                </ListItem>
            </List>
        </Box>
    );
}
