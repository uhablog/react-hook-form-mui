'use client';
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { Controller, useFormContext } from "react-hook-form";

const AddForm = () => {

  const router = useRouter();

  const {
    control,
    handleSubmit
  } = useFormContext();

  const onSubmit = () => {
    router.push('/add/confirm');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="test"
        control={control}
        defaultValue=""
        render={({field, formState: { errors }}) => (
          <TextField
            {...field}
            label="test"
            variant="outlined"
            fullWidth
            error={errors.test?.message ? true: false}
            helperText={errors.test?.message as string}
          />
        )}
      />
      <Controller
        name="num"
        control={control}
        defaultValue=""
        render={({field, formState: { errors }}) => (
          <TextField
            {...field}
            label="num"
            variant="outlined"
            fullWidth
            error={errors.num?.message ? true: false}
            helperText={errors.num?.message as string}
          />
        )}
      />
    </form>
  )

};

export default AddForm;