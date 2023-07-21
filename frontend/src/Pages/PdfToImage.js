import { Box, Button, Container,FormControl, Input } from "@mui/material";
import { API_ENDPOINT, API_PDF_TO_IMAGE } from "Store/constants";

function PdfToImage() {

    const test = `${API_ENDPOINT}/convert/pdf-to-png`;
    return (
        <Container>
            <Box maxWidth={"40rem"}>
                <form action={API_PDF_TO_IMAGE} method="post" encType='multipart/form-data'>
                    <FormControl >
                        <Input type="file" name="file" id="file" />
                        <Button type="submit">Convert</Button>
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
}

export default PdfToImage;