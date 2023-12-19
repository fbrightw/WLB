import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function GridHeader(props) {

    const theme = useTheme();

    return (
        <Box 
            textAlign="center" 
            bgcolor={theme.palette.neutral.light}
            p="5px"
            m="10px"
            borderRadius="10px"
            sx={{
                opacity: "0.2"
            }}
        >
            <Typography 
                variant="h3" 
                color={theme.palette.typographyColor.default}
            >
                {props.title}
            </Typography>
        </Box>
    )
}
