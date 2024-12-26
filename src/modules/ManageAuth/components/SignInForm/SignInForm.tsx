import { FormProvider, useForm } from "react-hook-form";
import { AuthLayout } from "../components";
import { Box, Link, Typography } from "@mui/material";
import { CustomBtn, CustomTextField } from "@muc/components";
import { COLORS, ROUTES } from "@muc/constants";
import { navLink } from "@muc/utils";

interface SignUpFormFields {
  email: string;
  password: string;
}

const SignInForm = () => {
  const methods = useForm<SignUpFormFields>();

  const onSubmit = (e: SignUpFormFields) => {
    console.log(e, "Log in");
  };

  return (
    <FormProvider {...methods}>
      <AuthLayout>
        <Typography variant="h1">Log in to Exclusive</Typography>
        <Typography variant="body1">Enter your details below</Typography>
        <Box
          component={"form"}
          pt={5}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <CustomTextField
            placeHolder="Email or Phone Number"
            type="email"
            name="email"
            width="370px"
          />
          <CustomTextField
            placeHolder="Password"
            type="password"
            name="password"
            width="370px"
          />
          <CustomBtn
            title="Log In"
            variant="contained"
            width="372px"
            type="submit"
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ color: COLORS.gray.main, mt: 3, pb: 3 }}
        >
          Create an account?{" "}
          <Link href={ROUTES.AUTHENTICATION.SIGNUP_FORM} sx={navLink}>
            Sign Up
          </Link>
        </Typography>
      </AuthLayout>
    </FormProvider>
  );
};

export default SignInForm;
