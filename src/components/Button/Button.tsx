import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { forwardRef } from "react";

export interface ButtonProps
  extends Pick<
    MuiButtonProps,
    | "className"
    | "children"
    | "fullWidth"
    | "onClick"
    | "sx"
    | "variant"
    | "onKeyDown"
    | "size"
  > {
  width?: number | string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, width, sx, ...props }, ref) => {
    const button = (
      <>
        <MuiButton
          ref={ref}
          sx={{
            // prebuilt design,
            //upcoming design
            position: "relative",
            ...sx,
          }}
          fullWidth={props.fullWidth}
          {...props}
        >
          {children}
        </MuiButton>
      </>
    );
    return button;
  }
);
