import { Box } from "@mui/material";
import Layout from "Layout";


function HomePage() {

    return (
        <Layout>
            {/* <Payment /> */}
            {/* <Box
                component="section"
                sx={{
                    height: 600,
                    position: "relative",
                    width: "100%",
                    backgroundImage: { xs: `url(${mobileHeroImg})`, md: `url(${heroImg})` },
                    backgroundPosition: "50%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "space-evenly",
                    // alignItems: "flex-start"
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1080px",
                    }}
                >
                    <Stack
                        sx={{
                            zIndex: 5,
                            m: 4,
                            width: { xs: "80%", sm: "50%" },
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                        spacing={3}
                    >
                        <Typography variant="h2" sx={{ color: "white" }}>
                            Unlock Affordable Adventures Across Cities and States
                        </Typography>

                        <Button
                            variant="contained"
                            onClick={e => { }}
                            sx={{
                                backgroundColor: "white",
                                width: 110,
                                p: 2,
                                borderRadius: 24,
                                display: "flex",
                                justifyContent: "center",
                                ":hover": {
                                    backgroundColor: "secondary.main",
                                },
                            }}
                        >
                            <Typography variant="subtitle1" color="#254e71">
                                Talk to us
                            </Typography>
                        </Button>
                    </Stack>
                </Box>
                <Box></Box>
                <Box></Box>

                <Box
                    component="div"
                    sx={{
                        height: "100px",
                        backgroundSize: "100%",
                        bottom: 0,
                        zIndex: 1,
                        transform: "scale(1,1)",
                        backgroundRepeat: "no-repeat",
                        display: "block",
                        position: "absolute",
                        pointerEvents: "none",
                        width: "100%",
                        right: 0,
                        left: 0,
                        marginBottom: -0.1,
                        backgroundImage:
                            themeMode === THEME.DARK
                                ? `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMxNDJhM2UiPjxwYXRoIGQ9Ik03MjUuMjkgMTAxLjJDMzI1LjIyIDEyMi40OCAwIDAgMCAwdjE0MGgxMjgwVjBzLTE1NC42NCA3OS45Mi01NTQuNzEgMTAxLjJ6IiBmaWxsLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTU1Ni40NSAxMTkuNzRDOTUzLjQxIDE0MCAxMjgwIDE0IDEyODAgMTR2MTI2SDBWMHMxNTkuNSA5OS40OCA1NTYuNDUgMTE5Ljc0eiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik02NDAgMTQwYzM1My40NiAwIDY0MC0xNDAgNjQwLTEzOXYxNDBIMFYwczI4Ni41NCAxNDAgNjQwIDE0MHoiLz48L2c+PC9zdmc+)`
                                : `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03MjUuMjkgMTAxLjJDMzI1LjIyIDEyMi40OCAwIDAgMCAwdjE0MGgxMjgwVjBzLTE1NC42NCA3OS45Mi01NTQuNzEgMTAxLjJ6IiBmaWxsLW9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTU1Ni40NSAxMTkuNzRDOTUzLjQxIDE0MCAxMjgwIDE0IDEyODAgMTR2MTI2SDBWMHMxNTkuNSA5OS40OCA1NTYuNDUgMTE5Ljc0eiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik02NDAgMTQwYzM1My40NiAwIDY0MC0xNDAgNjQwLTEzOXYxNDBIMFYwczI4Ni41NCAxNDAgNjQwIDE0MHoiLz48L2c+PC9zdmc+)`,
                    }}
                />
            </Box> */}

            <Box mx={"auto"} maxWidth={500} gap={4} display={"flex"} flexDirection={"column"}>
                HomePage
            </Box>
        </Layout>
    );
}

export default HomePage;