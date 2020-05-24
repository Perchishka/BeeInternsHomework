function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } 
    else if (!firstName) {
        alert('Укажите имя');
    }
      else if (firstName==='beeline' || firstName==='beeinterns'|| firstName==='bee') {
        alert('Имя '+firstName+' занято.');
    } 
    else if (!license) {
        alert('Необходимо согласие');
    }else {
switch(gender.value){
    case 'man':
    alert("«Уважаемый '+firstName+', заявка создана");
    break;
    case 'woman':
    alert('Уважаемая '+firstName+', заявка создана');
    break;
    default:
        alert('Уважаемая '+firstName+', заявка создана');
        break;
    }
}
}



