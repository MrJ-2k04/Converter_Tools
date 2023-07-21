import { Box, Button, Container, FormControl, Input } from "@mui/material";
import { API_IMAGE_TO_PDF } from "Store/constants";

function ImageToPdf() {


    return (
        <Container>
            <Box maxWidth={"40rem"}>
                <form action={API_IMAGE_TO_PDF} method="post" encType='multipart/form-data'>
                    <FormControl>
                        <input type="file" name="files" id="files" multiple />
                        <Button type="submit">Convert</Button>
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
}

export default ImageToPdf;