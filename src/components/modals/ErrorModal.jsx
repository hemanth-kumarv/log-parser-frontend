import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ErrorModal(props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.toggle}
      closeAfterTransition
      disableAutoFocus={true}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600 }}
          >
            Error
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {props.message || "Some error occurred"}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
