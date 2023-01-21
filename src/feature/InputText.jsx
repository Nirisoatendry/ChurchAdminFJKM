import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import React, { memo } from "react";

export const FormInputText = memo(({ name, control, label,type }) => {
  return (
     (
        <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField  type={type} onChange={onChange} value={value} variant="outlined" margin="dense"  fullWidth label={label} />
        )}
      />
      )
  );
});