import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { useActions } from "hooks/useActions";
import styles from "layouts/AuthLayout/authLayout.module.css";

export const Login = () => {
  const email: any = useRef();
  const password: any = useRef();
  const [isFetching, setIsFetching] = useState(false);
  const { login } = useActions();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsFetching(true);
    login({ email: email.current.value, password: password.current.value });
  };

  return (
    <AuthLayout>
      <form className={styles.loginBox} onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          className={styles.loginInput}
          ref={email}
        />
        <input
          placeholder="Password"
          type="password"
          className={styles.loginInput}
          ref={password}
        />
        <div className={styles.authWrapper}>
          <button className={styles.loginButton} disabled={isFetching}>
            {isFetching ? "Loading" : "Log In"}
          </button>
          <button className={styles.loginRegisterButton}>
            <Link to="/register">
              {isFetching ? "Loading" : "Create a New Account"}
            </Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};
