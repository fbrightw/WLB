import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
    TextField,
    Box,
    Typography,
    IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export const capitalizedString = (str) => `${str.charAt(0).toUpperCase()}${(str.slice(1))}`


export default function TextPage() {

    const { name } = useParams();
    const [isEditable, setIsEditable] = useState(false);

    console.log("TextPage");

    return (
        <Box sx={{m: 10, width: "80%", display: "flex", alignContent: "center", flexDirection: "column"}}>
            <Box sx={{display: "flex" }}>
            {
                isEditable ? 
                <TextField id="standard-basic" variant="standard" defaultValue={name} />
                 : 
                <>
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        sx={{ m: "0 0 5px 0" }}
                    >
                        {capitalizedString(name)}
                    </Typography>
                    <IconButton type="button" sx={{ p: 1 }} onClick={() => setIsEditable(true)}>
                        <EditIcon />
                    </IconButton>
                </>
            }
            </Box>
        </Box>
    )
}
