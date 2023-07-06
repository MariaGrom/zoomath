import { PageForm } from '../PageForm/PageForm'

function Login() {
    return (
        <PageForm
            buttonText='Войти'
            link='/zoomath'
            textLink='Еще нет аккаунта?'
            linkTo='/signup'
            textLinkTo='Зарегистрироваться'
        />
    )
}

export default Login;