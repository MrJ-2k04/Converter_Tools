import { Box, Button, Container,FormControl, Input } from "@mui/material";
import { API_PNG_TO_JPG } from "Store/constants";

function PngToJpg() {


    return (
        <Container>
            <Box maxWidth={"40rem"}>
                <form action={API_PNG_TO_JPG} method="post" encType='multipart/form-data'>
                    <FormControl >
                        <Input type="file" name="file" id="file" />
                        <Button type="submit">Convert</Button>
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
}

export default PngToJpg;