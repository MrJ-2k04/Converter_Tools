import { Box, Button, Container, FormControl, Input } from "@mui/material";
import { API_JPG_TO_PNG } from "Store/constants";

function JpgToPng() {


    return (
        <Container>
            <Box maxWidth={"40rem"}>
                <form action={API_JPG_TO_PNG} method="post" encType='multipart/form-data'>
                    <FormControl >
                        <Input type="file" name="file" id="file" />
                        <Button type="submit">Convert</Button>
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
}

export default JpgToPng;