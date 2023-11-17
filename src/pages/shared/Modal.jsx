import { useState } from "react";
import { createPortal } from "react-dom";
import { Box, Typography } from "@mui/material";



export default function Modal(isOpen) {

    const [isOpen1, setIsOpen] = useState(isOpen);

    const handleClose = () => setIsOpen(false);

    return (
            createPortal(
                <div style={{width: "30%", height: "30%", backgroundColor: "white"}}>
            
                </div>
                ,

            document.getElementById('modal')
            )
        
    )
}

// <Modal
                //     open={isOpen}
                //     onClose={handleClose}
                //     aria-labelledby="modal-modal-title"
                //     aria-describedby="modal-modal-description"
                // >
                //     <Box>
                //         <Typography id="modal-modal-title" variant="h6" component="h2">
                //             Text in a modal
                //         </Typography>
                //         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                //         </Typography>
                //     </Box>
                // </Modal>,