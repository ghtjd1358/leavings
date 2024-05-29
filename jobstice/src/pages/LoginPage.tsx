import Login from '../components/Login/Login';
import { SignUp, FindID, FindPassword } from '../components/Login';

function LoginPage() {
  return (
    <>
      <Login></Login>
      <SignUp></SignUp>
      <FindID></FindID>
      <FindPassword></FindPassword>
    </>
  );
}

export default LoginPage;
