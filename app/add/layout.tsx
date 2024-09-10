'use client';
import { FormProvider, useForm } from "react-hook-form"

type FormValues = {
  test: string
  num: number
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const methods = useForm<FormValues>({
    mode: 'onChange'
  });

  return <FormProvider {...methods}>{children}</FormProvider>
}