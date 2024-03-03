import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { DialogProps } from "@mui/material";

interface Props {
  continueButtonText?: string;
  handleContinue: () => void;
  dialogTitle?: string;
  open: boolean;
  handleClose: () => void;
  maxWidth: DialogProps["maxWidth"];
  isValid: boolean;
}

export const AlertDialog: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  const {
    handleClose,
    open,
    handleContinue,
    continueButtonText,
    dialogTitle,
    maxWidth,
    isValid,
  } = props;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={maxWidth}
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={!isValid} onClick={handleContinue} autoFocus>
            {continueButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
