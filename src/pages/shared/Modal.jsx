import { useState } from 'react'
import { createPortal } from "react-dom";
import {
    Dialog, 
    DialogTitle, 
    DialogContentText, 
    DialogContent,
    Button, 
    TextField,
    DialogActions
} from "@mui/material";


export default function ModalPanel() {

    const [isOpen, setIsOpen] = useState(true);

    function linkToNewPage() {

    }

    const handleClose = () => setIsOpen(false);

    return (
        <div>
            {createPortal(
                <Dialog
                    open={isOpen}
                    onClose={handleClose}
                    // aria-labelledby="modal-modal-title"
                    // aria-describedby="modal-modal-description"
                >
                   <DialogTitle>New Page</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create new page give the name and type of content
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={linkToNewPage}>Create</Button>
                    </DialogActions>
                </Dialog>,
                document.body
            )}
        </div>
    )
}
