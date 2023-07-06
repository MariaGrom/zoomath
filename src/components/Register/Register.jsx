import { useState, useEffect } from 'react';
import { PageForm } from '../PageForm/PageForm';

function Register() {
  const [repeatPassword, setRepeatPassword] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  // Переменная состояния статуса изменений
  const [messageStatus, setMessageStatus] = useState('');
  const [repeatPasswordValid, setRepeatPasswordValid] = useState(false);
  const [formValidRepeat, setFormValidRepeat] = useState(false);


  // Функция изменения пароля пользователя и проверка формы
  function handleChangeRepeatPassword(e) {
    setRepeatPassword(e.target.value);
    setMessageStatus('');

    if (!e.target.value) {
      setRepeatPasswordError('Поле не может быть пустым');
      setRepeatPasswordValid(false);
      setFormValidRepeat(false);
    } else {
      setRepeatPasswordError('');
      setRepeatPasswordValid(true);
      setFormValidRepeat(true);
    }
  }



  return (
    <PageForm
      buttonText='Зарегистрироваться'
      link='/signin'
      textLink='Уже зарегистированы?'
      linkTo='/signin'
      textLinkTo='Войти'
    // formValidRepeat={formValidRepeat}
    // repeatPassword={repeatPassword}
    // children={
    //   <label className="form__field">
    //     <p className="form__text">Повторить пароль</p>
    //     <input
    //       id="input__repeatPassword"
    //       className="form__input"
    //       type="repeatPassword"
    //       name="repeatPassword"
    //       value={repeatPassword}
    //       onChange={handleChangeRepeatPassword}
    //       required
    //     />
    //     <span className="input__error input__error-password">{repeatPasswordError}</span>
    //   </label>
    // }
    />
  )
}
export default Register;