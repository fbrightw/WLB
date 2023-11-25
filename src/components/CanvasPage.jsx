import { useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import canvasState from "../store/canvasState";
import { 
    TextField,
    Box,
    Typography,
    IconButton
} from '@mui/material';
import { capitalizedString } from "./TextPage";
import EditIcon from '@mui/icons-material/Edit';
import toolState from "../store/toolState";
import Brush from "../canvas/Brush"
import Rect from "../canvas/Rect";
import Circle from "../canvas/Circle";

const CanvasPage = observer(() => {

    const canvasRef = useRef();

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [tool, setTool] = useState('pencil');

    const { name } = useParams();
    const [isEditable, setIsEditable] = useState(false);

    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        canvasState.setCanvas();

        let a;
        switch (tool) {
            case 'pencil': {
                a = new Brush(canvasRef.current);

                break ;
            }

            case 'rectangle': {
                a = new Rect(canvasRef.current);

                break;
            }

            case 'circle': {
                a = new Circle(canvasRef.current);

                break;
            }

            // case 'eraser': {
            //     a = new Eraser(canvasRef.current);
            // }
        }

        toolState.setTool(a);
    }, [tool])

    console.log("tool", tool);

    return (
        <>
        {/* pageName */}
        <Box mx={10} sx={{display: "flex", alignContent: "center", flexDirection: "column", position:"relative"}}>
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

        {/* instruments */}
        <Box display="flex" mx={10} sx={{justifyContent: "flex-end"}} my={2}  bgcolor = {colors.grey[200]}>
            <IconButton sx={{bgcolor: colors.grey[300]}} onClick={() => setIsCollapsed(!isCollapsed)}>
                <img src="../../assets/toolbox.png" color="white"/>
            </IconButton>
            {isCollapsed ? 
                null :
                <>
                    <IconButton sx={{bgcolor: colors.grey[300]}} onClick={() => setTool('pencil')}>
                        <img src="../../assets/pencil.png" color="white"/ >
                    </IconButton>
                    <IconButton sx={{bgcolor: colors.grey[300]}} onClick={() => setTool('rectangle')}>
                        <img src="../../assets/rect.png" color="white"/>
                    </IconButton>
                    <IconButton sx={{bgcolor: colors.grey[300]}} onClick={() => setTool('circle')}>
                        <img src="../../assets/circle.png" color="white"/>
                    </IconButton>
                    <IconButton sx={{bgcolor: colors.grey[300]}} onClick={() => setTool('eraser')}>
                        <img src="../../assets/eraser_tool.png" color="white"/>
                    </IconButton>
                </>
                
            }
        </Box>

        {/* canvas */}
        <Box style={{display: "flex", justifyContent: "center"}}>
            <canvas ref={canvasRef} width={1000} height={600} style={{backgroundColor: "white"}}></canvas>
        </Box>
        </>
    )

})

export default CanvasPage;