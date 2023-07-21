import { Box, Button, Container,FormControl, Input } from "@mui/material";
import { API_PDF_RESIZE } from "Store/constants";

function PdfResize() {


    return (
        <Container>
            <Box maxWidth={"40rem"}>
                <form action={API_PDF_RESIZE} method="post" encType='multipart/form-data'>
                    <FormControl >
                        <Input type="file" name="files" id="files" multiple />
                        <Button type="submit">Convert</Button>
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
}

export default PdfResize;