import { Box, Link, Typography } from "@mui/material";
import { AuthLayout } from "../components";
import { FormProvider, useForm } from "react-hook-form";
import { CustomBtn, CustomTextField } from "@muc/components";
import { COLORS, ROUTES } from "@muc/constants";
import { navLink } from "@muc/utils";

interface SignUpFormFields {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const methods = useForm<SignUpFormFields>();

  const onSubmit = (e: SignUpFormFields) => {
    console.log(e, "crete account");
  };

  return (
    <FormProvider {...methods}>
      <AuthLayout>
        <Typography variant="h1">Create an account</Typography>
        <Typography variant="body1" >Enter your details belows</Typography>
        <Box
          component={"form"}
          pt={5}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <CustomTextField
            placeHolder="Name"
            type="text"
            name="text"
            width="370px"
          />
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
            title="Create Account"
            variant="contained"
            width="372px"
            type="submit"
          />
          <br />
          <CustomBtn
            title="Sign up with Google"
            variant="outlined"
            width="372px"
            icon={<Box component={"img"} src="/assets/icons/Google-icon.svg" />}
          />
        </Box>
        <Typography variant="body1" sx={{ color: COLORS.gray.main, mt: 3,pb:3 }}>
          Already have account?{" "}
          <Link href={ROUTES.AUTHENTICATION.SIGNIN_FORM} sx={navLink}>
            Log in
          </Link>
        </Typography>
      </AuthLayout>
    </FormProvider>
  );
};

export default SignUpForm;
