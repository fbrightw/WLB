import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    TextField
} from "@mui/material";
import { useState } from 'react';

export default function ModalPanel({isOpen, setIsOpen, setNewTitle}) {

    const [type, setType] = useState("");
    const [name, setName] = useState("");

    function linkToNewPage(e) {
        e.stopPropagation();
        setIsOpen(false);
        setNewTitle(e, name, type);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleClose = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    } 

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
            >
                <DialogTitle>New Page</DialogTitle>
                <DialogContent sx={{display: "flex", flexDirection: "column"}}>
                    <DialogContentText>
                        To create new page give the name and type of content
                    </DialogContentText>
                    <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => setName(e.target.value)}/>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={type}
                            onChange={handleTypeChange}
                            label="Type"
                        >
                            <MenuItem value="text" >Text</MenuItem>
                            <MenuItem value="canvas">Canvas</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={linkToNewPage}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
