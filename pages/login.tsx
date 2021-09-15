import style from "../styles/Login.module.css";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useState } from "react";
import { LoginWrapper } from "../components/LoginWrapper";
import Link from "next/link";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  const handleEmailChange = (data: string) => setEmail(data);

  const handlePasswordChange = (data: string) => setPassword(data);
  const handleRememberChange = (checked: boolean) => setRemember(checked);

  return (
    <LoginWrapper page={"login"}>
      <div className={style.input_container}>
        <h1>Log in to your account</h1>
        <p>Enter your credentials to log in </p>

        <div className={style.login_input_container}>
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
          />
          <TextField
            id="outlined-helper-Text"
            label="password"
            type="password"
            value={password}
            onChange={(event) => handlePasswordChange(event.target.value)}
            placeholder="********"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={style.login_forgot_password_container}>
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={(event) => handleRememberChange(event.target.checked)}
                name="checkedB"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Link href="/forgotpassword">Forgot password</Link>
        </div>
        <Button variant="contained" color="primary">
          Log in
        </Button>
      </div>
    </LoginWrapper>
  );
};

export default Login;
