<<<<<<< HEAD
import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";
=======
const page = () => {
  return (
    <div>
      Login
    </div>
  )
}
>>>>>>> b6f80531472d7b3809576fde6d45cd72f5cbfa1f

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
