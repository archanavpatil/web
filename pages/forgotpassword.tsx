import style from "../styles/Forgotpassword.module.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { LoginWrapper } from "../components/LoginWrapper";
import Link from "next/link";

const ForgotPassword = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (data: string) => setEmail(data);

  return (
    <LoginWrapper page={"forgot"}>
      <div className={style.forgot_container}>
        <h1>Reset your password </h1>
        <p>
          Have an account ? <Link href="/login">Sign in </Link>
        </p>
        <div className={style.forgot_input_container}>
          <TextField
            id="outlined-helperText"
            label="Email Address"
            type="email"
            placeholder="abc@abc.com"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            helperText={
              "You'll receive an email containing a secure link to reset it."
            }
          />
        </div>

        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </LoginWrapper>
  );
};

export default ForgotPassword;
