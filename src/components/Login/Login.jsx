import { FormPage } from "../../pages/PageForm/FormPage";

function Login() {
  return (
    <FormPage
      buttonText="Войти"
      link="/zoomath"
      textLink="Еще нет аккаунта?"
      linkTo="/signup"
      textLinkTo="Зарегистрироваться"
    />
  );
}

export default Login;
