# test-project

К данном тестовому заданию отнёсся как к обучающему. 

Во время выполнения использовал:

* React
* Redux
* React-router

Познакомился с фраемворком Material-UI, с библиотеками formik, redux-thunk. 

Вся работа написана на typescript. Познакомился с некоторыми возможностями языка. Практиковался с типами и дженериками. 

По максимуму использовал хуки.

Проблемы, с которыми столкнулся:

* Свойста экшенов ts не видит, когда возвращает новый стейт;
  Решение: 
    В типы экшенов `interface ExtractActionType { type: string }` надо передавать конкретное значение `interface ExtractActionType { type: typeof EXTRACT_DATA }`;

* При сортировке по имени в одном обработчике кнопки обрабатывал два диспатча. Сортировка происходила только после второго нажатия.
  Решение:
    Использовал redux-thunk для синхроннго действия. Код находится в `/src/actions/orderByUserNameAction`.

* Компоненты *material-ui* не стилизуются с помощью *@emotion/styled* `styled(Button)`. Можно конечно применить глобальные стили, но я решил сделать как в документации и установил *materil-ui/styles* и ииспользовал аналог *styled* `styled(Button)({ margin: 20px;})`.

