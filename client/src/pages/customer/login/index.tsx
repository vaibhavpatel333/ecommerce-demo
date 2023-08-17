import { useRouter } from "next/router";
import LoginForm from "../../../component/loginFrom";


function LoginPage() {
  const router = useRouter();

  const handleLogin = (token: any) => {
    console.log("token", token);
    localStorage.setItem('token', JSON.stringify(token.data));
    router.push("/")
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
