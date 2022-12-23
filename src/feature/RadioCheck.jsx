import React, { useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import { memo } from "react";

export const InputRadio= memo( ({ name,control,label,options ,setValue}) => {
  const GenerateRadioOptions = ({id}) => {
    useEffect(() => {
      setValue(name,id); 
    }, []);
    return options.map((singleOption) => (
      <FormControlLabel
        value={parseInt(singleOption.value)}
        label={singleOption.label}
        control={<Radio  />}
        checked={singleOption.value==id}
      />
    ));
  };  

  return <Controller
      name={name}
      control={control}
      render={({field: { onChange, value }}) => (
        <RadioGroup value={value} onChange={onChange}>
          <FormLabel>{label}</FormLabel>
          <GenerateRadioOptions id={value}/>
        </RadioGroup>
      )}
    />
});