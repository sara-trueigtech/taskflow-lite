import React from "react";
import { Controller } from "react-hook-form";
import FormField from "../commonFormField";

const CommonFormController = ({ controls = [], control = null}) => {
  if (!control || !controls.length) return null;

  return (
    <>
      {controls.map((tag) => (
        <Controller
          key={tag.name}
          name={tag.name}
          control={control}
          rules={{ required: tag.isRequired }}
          render={({ field, fieldState }) => (
            <FormField
              field={field}
              config={tag}
              error={fieldState.error}
            />
          )}
        />
      ))}
    </>
  );
};

export default CommonFormController;
