import RegisterForm from "../../../component/registerForm";

function RegisterPage() {
  const handleRegister = (token: any) => {
    console.log("toekn", token);
    
    // Handle successful registration and login (e.g., store token in context/state)
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default RegisterPage;
