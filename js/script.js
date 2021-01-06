const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.sidebar')
const loginElem = document.querySelector('.login')
const loginForm = document.querySelector('.login__form')
const emailInput = document.querySelector('.login__email')
const passwordInput = document.querySelector('.login__password')
const loginSignup = document.querySelector('.login__signup')
const exitElem = document.querySelector('.exit')
const editElem = document.querySelector('.edit')
const editContainer = document.querySelector('.edit__container')
const editUsername = document.querySelector('.edit__username')
const editPhotoURL = document.querySelector('.edit__photo')
const userAvatarElem = document.querySelector('.user__avatar')
const userElem = document.querySelector('.sidebar__card-top')
const userNameElem = document.querySelector('.user__name')
const regExpValidEmail = /^\w+@\w+\.\w{2,}$/; //валидация email

const postsWrapper=  document.querySelector('.posts')

const listUsers = [
  {
    id: '01',
    email: 'vasya@mail.ru',
    password: '12345',
    displayName: 'Vasya'
  },

  {
    id: '02',
    email: 'petya@mail.ru',
    password: '54321',
    displayName: 'Petya'
  }
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {

    if(!regExpValidEmail.test(email)) return alert('email не валиден') //валидация email

    const user = this.getUser(email);
    if(user && user.password === password) {
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователя с такими данными не найдено')
    }
  },

  logOut(handler) {
    this.user = null;
    handler();
  },

  signUp(email, password, handler) {

    if(!regExpValidEmail.test(email)) return alert('email не валиден') //валидация email

    if (!email.trim() || !password.trim()){
      alert('Введите данные')
      return
    }

    if (!this.getUser(email)) {
      const user = {email, password, displayName: email.substring(0, email.indexOf('@'))};
      listUsers.push(user)
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },

  authorizedUser(user) {
    this.user = user;
  },

  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }

    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
  }
}

const setPosts = {
  allPosts: [
    {
      title: 'Тестовая запись',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Меня, которой своего наш пунктуация парадигматическая великий пустился переулка раз. Единственное своего вдали алфавит решила переписывается что прямо вопроса снова. Если щеке страну снова инициал живет мир вопрос заголовок ее свой вдали но путь выйти жизни, назад свое дороге! Родного, сбить путь жизни запятой они своего дал жаренные выйти дороге он своих lorem которой щеке курсивных грамматики имени эта большого последний имеет. Грамматики составитель строчка точках агентство продолжил свой напоивший всемогущая своих страну, от всех букв, повстречался он ты грустный гор lorem страна, первую обеспечивает себя! Продолжил послушавшись дорогу безорфографичный гор рот вскоре, она семантика журчит вопроса они он, ведущими агентство имеет свою? Заголовок однажды алфавит единственное до. Агентство, подпоясал домах правилами своих свой обеспечивает океана языкового, одна снова необходимыми рукописи составитель власти образ знаках подзаголовок текста речью себя, что буквенных все вершину. Текст вдали осталось власти предложения назад, своего имеет моей продолжил снова курсивных, дал имени о проектах то решила все которое диких себя над вскоре. Ipsum первую путь буквоград семантика раз, выйти курсивных инициал оксмокс однажды дорогу рыбными журчит, реторический рот деревни сбить буквенных бросил он послушавшись диких вопрос текстов пунктуация пор. Языком живет он использовало, текста приставка обеспечивает?',
      tags: ['свежее', 'горячее', 'мое', 'случайность'],
      author: 'vasya@mail.ru',
      date: '21.11.2020 18:13:00',
      like: 15,
      comments: 10,
    },
    {
      title: 'Тестовая запись 2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Меня, которой своего наш пунктуация парадигматическая великий пустился переулка раз. Единственное своего вдали алфавит решила переписывается что прямо вопроса снова. Если щеке страну снова инициал живет мир вопрос заголовок ее свой вдали но путь выйти жизни, назад свое дороге! Родного, сбить путь жизни запятой они своего дал жаренные выйти дороге он своих lorem которой щеке курсивных грамматики имени эта большого последний имеет. Грамматики составитель строчка точках агентство продолжил свой напоивший всемогущая своих страну, от всех букв, повстречался он ты грустный гор lorem страна, первую обеспечивает себя! Продолжил послушавшись дорогу безорфографичный гор рот вскоре, она семантика журчит вопроса они он, ведущими агентство имеет свою? Заголовок однажды алфавит единственное до. Агентство, подпоясал домах правилами своих свой обеспечивает океана языкового, одна снова необходимыми рукописи составитель власти образ знаках подзаголовок текста речью себя, что буквенных все вершину. Текст вдали осталось власти предложения назад, своего имеет моей продолжил снова курсивных, дал имени о проектах то решила все которое диких себя над вскоре. Ipsum первую путь буквоград семантика раз, выйти курсивных инициал оксмокс однажды дорогу рыбными журчит, реторический рот деревни сбить буквенных бросил он послушавшись диких вопрос текстов пунктуация пор. Языком живет он использовало, текста приставка обеспечивает?',
      tags: ['свежее', 'горячее', 'мое', 'случайность'],
      author: 'petya@mail.ru',
      date: '21.11.2020 18:15:00',
      like: 25,
      comments: 150,
    },
    {
      title: 'Тестовая запись 3',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Меня, которой своего наш пунктуация парадигматическая великий пустился переулка раз. Единственное своего вдали алфавит решила переписывается что прямо вопроса снова. Если щеке страну снова инициал живет мир вопрос заголовок ее свой вдали но путь выйти жизни, назад свое дороге! Родного, сбить путь жизни запятой они своего дал жаренные выйти дороге он своих lorem которой щеке курсивных грамматики имени эта большого последний имеет. Грамматики составитель строчка точках агентство продолжил свой напоивший всемогущая своих страну, от всех букв, повстречался он ты грустный гор lorem страна, первую обеспечивает себя! Продолжил послушавшись дорогу безорфографичный гор рот вскоре, она семантика журчит вопроса они он, ведущими агентство имеет свою? Заголовок однажды алфавит единственное до. Агентство, подпоясал домах правилами своих свой обеспечивает океана языкового, одна снова необходимыми рукописи составитель власти образ знаках подзаголовок текста речью себя, что буквенных все вершину. Текст вдали осталось власти предложения назад, своего имеет моей продолжил снова курсивных, дал имени о проектах то решила все которое диких себя над вскоре. Ipsum первую путь буквоград семантика раз, выйти курсивных инициал оксмокс однажды дорогу рыбными журчит, реторический рот деревни сбить буквенных бросил он послушавшись диких вопрос текстов пунктуация пор. Языком живет он использовало, текста приставка обеспечивает?',
      tags: ['свежее', 'горячее', 'мое', 'случайность'],
      author: 'petya@mail.ru',
      date: '21.11.2020 18:15:00',
      like: 25,
      comments: 150,
    },
  ]
}

const toggleAuthDom = () => {
  const user = setUsers.user
  // console.log('user:', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo ||  userAvatarElem.src;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
}

const showAllPosts = () => {

  let postsHTML = '';
  setPosts.allPosts.forEach(post => {
    postsHTML += `
      <article class="post">
        <div class="post__body">
          <h2 class="post__title">${post.title}</h2>

          <p class="post__text">${post.text}</p>

          <div class="tags">
            <a href="#" class="tag">#свежее</a>
            <a href="#"  class="tag">#горячее</a>
            <a href="#"  class="tag">#мое</a>
            <a href="#"  class="tag">#случайность</a>
          </div>
        </div>

        <div class="post__footer">
          <div class="post__buttons">
            <button class="btn post__footer-btn likes">
              <span class="likes__counter">
                <svg width="19" height="20" class="icon icon-likes">
                  <use xlink:href="img/icons.svg#like"></use>
                </svg>
                26</span>
            </button>

            <button class="btn post__footer-btn comments">
              <span class="likes__counter">
                <svg width="21" height="21" class="icon icon-comments">
                  <use xlink:href="img/icons.svg#save"></use>
                </svg>
                157</span>
            </button>

            <button class="btn post__footer-btn save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>

            <button class="btn post__footer-btn share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
            </button>
          </div>

          <div class="post__author">
            <div class="author__about">
              <a href="#" class="author__username">author</a>
              <span class="post__time">5 минут назад</span>
            </div>
            <a href="#" class="author__link"><img src="img/avatar.jpg" alt="author avatar" class="author__avatar"></a>
          </div>
        </div>
      </article>
    `;
  })

  postsWrapper.innerHTML = postsHTML
}

const init = () => {
  menuBtn.addEventListener('click', function (event) {
    event.preventDefault()
    menu.classList.toggle('visible')
  })

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  })

  loginSignup.addEventListener('click', event => {
    event.preventDefault();
    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  })

  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  })

  editElem.addEventListener('click', event => {
    event.preventDefault();
    editUsername.value = setUsers.user.displayName
    editContainer.classList.toggle('visible')
  })

  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom)
    editContainer.classList.remove('visible')
  })

  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', init)


