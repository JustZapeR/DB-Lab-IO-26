# Запити зацікавлених осіб

## <a name='1'> </a>Вступ

Цей документ зосереджується на детальному аналізі концепції та методології збору та аналізу інформації від зацікавлених сторін, а також обговорює інструменти та підходи, що застосовуються у цьому контексті.

### <a name='2'> </a>Мета

Цей документ був створений з наміром визначити та конкретизувати вимоги, що стосуються розробки та впровадження системи управління проектами. Головною метою є аналіз очікувань потенційних користувачів у аспектах практичності, надійності, продуктивності, функціональності та зручності використання з метою створення ефективної системи управління проектами.

### <a name='3'> </a>Контекст

Даний документ відіграє ключову роль у процесі розробки системи, сприяючи ефективному спілкуванню між усіма зацікавленими сторонами проекту. Він впливає на різноманітні аспекти проекту, починаючи від уточнення функціональних вимог і закінчуючи забезпеченням надійності та високої продуктивності системи.

### <a name='4'> </a>Основні визначення та скорочення

[**FURPS**](https://en.wikipedia.org/wiki/FURPS) є акронімом, що представляє різноманітні аспекти вимог до програмних продуктів чи систем. Кожна літера в **FURPS** відповідає ключовій категорії вимог, що допомагають у всебічному аналізі та управлінні проектами розробки програмного забезпечення:

- **Функціональність (Functionality)**: Вказує на функціональні вимоги, тобто на те, що програма повинна виконувати. Включає в себе можливості, операції та інші елементи, що визначають основні функції продукту.

- **Зручність використання (Usability)**: Стосується легкості використання програми користувачами. Охоплює інтерфейс, навігацію, дизайн та інші аспекти, які впливають на користувацький досвід.

- **Надійність (Reliability)**: Включає в себе стійкість до помилок, здатність відновлення після збоїв, захист даних та інші фактори, що забезпечують стабільну роботу системи.

- **Продуктивність (Performance)**: Описує вимоги до швидкості роботи, обробки даних, ефективності використання ресурсів та інші критерії, що впливають на загальну продуктивність програмного забезпечення.

- **Підтримка (Supportability)**: Визначає вимоги, пов’язані з підтримкою та розвитком програмного продукту у майбутньому, включаючи сумісність, можливості модифікації, доступність документації, навчальні ресурси та технічну підтримку.

[**Зацікавлені сторони**](https://www.investopedia.com/terms/s/stakeholder.asp) відіграють значущу роль у процесі розробки та впровадження програмних продуктів, впливаючи на їхній дизайн, функціональність та загальну стратегію. До зацікавлених сторін належать:

- **Замовники**: Організації чи індивіди, які ініціюють розробку програмного продукту, висуваючи специфічні вимоги та очікування.

- **Користувачі**: Особи, які безпосередньо використовуватимуть програмний продукт, зацікавлені у його зручності, ефективності та функціональності.

- **Керівники проекту**: Відповідають за координацію розробки програмного продукту, включаючи планування, розподіл ресурсів та контроль за виконанням задач.

- **Розробники**: Технічні фахівці, задіяні у створенні програмного продукту, працюють над реалізацією його функціональних можливостей.

- **Тестери**: Фахівці, що проводять перевірку програмного продукту на наявність помилок та недоліків, забезпечуючи його якість.

- **Фінансові аналітики**: Аналізують бюджет проекту, визначають потреби у фінансуванні та складають фінансовий план.

- **Маркетологи**: Досліджують ринок та розробляють стратегії просування продукту, вивчають потреби та переваги потенційних користувачів.

- **Регулюючі органи**: Встановлюють норми та стандарти, яким має відповідати програмний продукт, забезпечуючи його безпеку та відповідність законодавчим вимогам.
Ці групи зацікавлених сторін вносять значний вклад у формування вимог до програмного продукту, впливаючи на його розробку та впровадження, що вимагає ефективно
ї комунікації та врахування їхніх інтересів на всіх етапах проекту.


### <a name='5'> </a>Посилання

<a name="link1"></a>FURPS — <https://en.wikipedia.org/wiki/FURPS>

<a name="link2"></a>Зацікавлені сторони — <https://ru.wikipedia.org/wiki/FURPS>

Минулий список посилань див. "[Посилання](state-of-the-art.html#посилання)"


## Короткий зміст

1. [Вступ](#1)
   - [Мета](#2)
   - [Контекст](#3)
   - [Основні визначення та скорочення](#4)
   - [Посилання](#5)
2. [Характеристика ділових процесів](#6)
3. [Короткий огляд продукту](#7)
4. [Функціональність](#8)
5. [Практичність](#9)
6. [Надійність](#10)
7. [Продуктивність](#11)
8. [Експлуатаційна придатність](#12)

## <a name='6'> </a>Характеристика ділових процесів

Користувачі системи це:

- Замовники, що створюють та взаємодіють з проектом

- Тімлідери, що організовують командну роботу розробників, описуючи завдання для розробників та контролюючи роботу.

- Розробники, що виконують задачі.

**---------**

**_ID:_** SignUp

**_НАЗВА:_** Реєстрація.

**_УЧАСНИКИ:_** Користувач, Система.

**_ПЕРЕДУМОВИ:_** Користувач ще не був зареєстрований в системі.

**_РЕЗУЛЬТАТ:_** Користувач зареєстрований в системі.

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- **SignUp_EX_UsernameExist** - Користувач з таким ім'ям вже існує.

- **SignUp_EX_UsernameNotAllowed** - Логін Користувача недопустимий.

- **SignUp_EX_EmailExist** - Користувач з таким email вже існує.

- **SignUp_EX_EmailNotAllowed** - Email користувача не допустимий або не існує.

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Користувач натискає кнопку "Реєстрація".

**2.** Система відкриває форму реєстрації.

**3.** Користувач вводить email, пароль, логін.

**4.** Система реєструє Користувача в системі. (SignUp_EX_UsernameExist) (SignUp_EX_UsernameNotAllowed) (SignUp_EX_EmailExist) (SignUp_EX_EmailNotAllowed)

**5.** Система надсилає підтвердження про реєстрацію Користувача.

**6.** Користувач отримує підтверження про реєстрацію.

**---------**

**_ID:_** SignIn

**_НАЗВА:_** Авторизація.

**_УЧАСНИКИ:_** Користувач, Система.

**_ПЕРЕДУМОВИ:_** Користувач вже зареєстрований в системі.

**_РЕЗУЛЬТАТ:_** Користувач авторизований в системі.

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- **SignIp_EX_UsernameNotExist** - Користувача з таким ім'ям не існує.

- **SignIp_EX_UsernamePasswordNotMatch** - Логін або email і пароль не співпадають.

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Користувач натискає кнопку "Авторизуватись".

**2.** Система відкриває форму авторизації.

**3.** Користувач вводить email або логін і пароль.

**4.** Система авторизує Користувача в системі. (SignIp_EX_UsernameNotExist) (SignIp_EX_UsernamePasswordNotMatch)

**5.** Система надсилає підтвердження про авторизацію Користувача.

**6.** Користувач отримує підтверження про авторизацію.

**---------**

**_ID:_** DeleteProject

**_НАЗВА:_** Видалення проєкту

**_УЧАСНИКИ:_** Замовник, система

**_ПЕРЕДУМОВИ:_**

- Замовник авторизувався у системі
- Проєкт вже створений

**_РЕЗУЛЬТАТ:_** Проєкт видалений

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _DeleteProject_EX_ConfirmationRequiredError_ - Клієнт не підтвердив своє бажання видалити проєкт

- _DeleteProject_EX_NetworkError_ - видалення проєкту неможливе через тимчасові проблеми з мережею або інфраструктурою серверів. 

- _DeleteProject_EX_UnauthorizedDeletionError_ - немає прав доступу для видалення проєкту

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Користувач відкриває розділ з проєктами

**2.** Користувач натискає на ім'я проєкту

**3.** Система відкриває сторінку з проєктом

**4.** Користувач натискає на кнопку "Налаштування проєкту"

**5.** Система відкриває сторінку з налаштуваннями проєкту

**6.** Користувач натискає на кнопку "Видалити цей проєкт" (DeleteProject_EX_UnauthorizedDeletionError)

**7.** Система відкриває віконце з попередженнями, і полем для верифікації підтвердження

**8.** Користувач вводить в поле свій нікнейм

**9.** Користувач натискає кнопку "Підтвердити видалення проєкту" (DeleteProject_EX_ConfirmationRequiredError)

**10.** Система видаляє проєкт зі списку існуючих () (DeleteProject_EX_NetworkError)

**11.** Система надсилає повідомлення про успішне видалення проєкту

**---------**

**_ID:_** CreateProject

**_НАЗВА:_** Створення нового проєкту

**_УЧАСНИКИ:_** Замовник, система

**_ПЕРЕДУМОВИ:_**

- Замовник авторизувався у системі
- Проєкт ще не створений

**_РЕЗУЛЬТАТ:_** Новий проєкт

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _CreateProject_EX_DuplicateProjectNameError_ - Назва проєкту співпадає з назвою існуючого проєкту

- _CreateProject_EX_ProjectLimitExceededError_ - Клієнт досягнув максимальної дозволеної кількості проєктів у системі або обмеження для свого облікового запису

- _CreateProject_EX_NetworkError_ - створення нового проєкту неможливе через тимчасові проблеми з мережею або інфраструктурою серверів. 

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Користувач відкриває розділ з проєктами

**2.** Користувач натискає на кнопку "Новий проєкт"

**3.** Система відкриває форму зі створення проєкту

**4.** Користувач вводить дані (назва,опис,залучені особи) про новий проєкт (CreateProject_EX_DuplicateProjectNameError)

**5.** Користувач натискає на кнопку "Створити" (CreateProject_EX_NetworkError)

**6.** Система перевіряє кількість вже створених користувачем проєктів і максимальний ліміт кількості проєктів для заданого користувача (CreateProject_EX_ProjectLimitExceededError)

**7.** Система добавляє новостворений проєкт до списку існуючих

**8.** Система надсилає повідомлення про успішне створення проєкту

**---------**

**_ID:_** TrackDevelopmentStatus

**_НАЗВА:_** Відстеження статусу розробки

**_УЧАСНИКИ:_** Замовник, Система.

**_ПЕРЕДУМОВИ:_** Проект існує в системі, замовник має доступ до інформації про статус розробки.

**_РЕЗУЛЬТАТ:_** Замовник відстежує поточний статус розробки проекту.

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- TrackDevelopmentStatus_EX_ProjectNotFound - Проект не знайдений в системі.
- TrackDevelopmentStatus_EX_PermissionDenied - Замовник намагається відстежувати статус розробки проекту, на який він не має прав доступу.
- TrackDevelopmentStatus_EX_InternalError - Виникла внутрішня помилка системи під час спроби відстеження статусу розробки.

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Замовник входить в систему.

**2.** Замовник обирає проект, для якого потрібно відстежувати статус розробки. (TrackDevelopmentStatus_EX_ProjectNotFound) (TrackDevelopmentStatus_EX_InternalError)

**3.** Система відображає інформацію про поточний статус розробки проекту, включаючи завдання, які вже виконані і ті, що ще в розробці. (TrackDevelopmentStatus_EX_PermissionDenied)

**4.** Замовник переглядає деталі, опис та статус завдання, відповідального розробника.

**5.** Система відображає оновлення статусу завдань (наприклад, позначення завдання як виконане).

**6.** Система оновлює автоматично загальний статус розробки проекту на основі змін у статусах завдань.

**7.** Замовник перевіряє актуальний статус розробки за потреби.

**---------**

**_ID:_** ChangeProjectStatus

**_НАЗВА:_** Зміна статусу проекта.

**_УЧАСНИКИ:_** Замовник, Система.

**_ПЕРЕДУМОВИ:_** Замовник є власником існуючого проєкту.

**_РЕЗУЛЬТАТ:_** Статус проекта успішно змінений.

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- ChangeProjectStatus_EX_Unauthorized - Замовник не є власником проекту.

- ChangeProjectStatus_EX_InvalidStatus - Спроба змінити на недопустимий статус.

- ChangeProjectStatus_EX_ProjectNotFound - Проект не знайдений в системі.
  
- ChangeProjectStatus_EX_InternalError - Виникла внутрішня помилка системи під час спроби зміни статусу проекта.

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Замовник входить в систему.

**2.** Замовник обирає конкретний проект, для якого він хоче змінити статус. (ChangeProjectStatus_EX_Unauthorized) (ChangeProjectStatus_EX_ProjectNotFound)

**3.** Замовник обирає новий статус для проекта з доступних опцій. (ChangeProjectStatus_EX_InvalidStatus)

**4.** Замовник підтверджує зміну статусу проекта. (ChangeProjectStatus_EX_InternalError)

**5.** Система перевіряє, чи має замовник права на зміну статусу даного проекту та чи є новий статус допустимим для зміни.

**6.** Система змінює статус проекта на новий.

**7.** Система автоматично надсилає повідомлення всім учасникам проекту про зміну статусу.

**---------**

**_ID:_** PayServices

**_НАЗВА:_** Оплата послуг розробки

**_УЧАСНИКИ:_** Замовник, система

**_ПЕРЕДУМОВИ:_**

- Замовник авторизувався у системі

**_РЕЗУЛЬТАТ:_** Замовник оплатив надані йому послуги

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _PayServices_EX_NotEnoughMoney_ - Сума оплати недостатньо для оплати

- _PayServices_EX_IncorrectBankDetails_ - Надані банківські дані є невірними

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Користувач відкриває розділ оплати

**2.** Система підраховує сумму яку потрібно заплатити

**3.** Система надає користувачеві сумму яку потрібно заплатити та всі необхідні дані для оплати

**4.** Користувач натискає на кнопку "Оплата"

**5.** Користувач вводить свої банківські дані

**6.** Користувач натискає на кнопку "Зробити транзакцію"

**7.** Система зв'язується з банком (PayServices_EX_IncorrectBankDetails)

**8.** Система перевіряє дані та кошти на рахунку (PayServices_EX_NotEnoughMoney)

**9.** Система списує кошти

**10.** Система надсилає підтвердження про успішну оплату у виді чеку

**---------**

**_ID:_** LeaveReview

**_НАЗВА:_** Відгук залишений замовником

**_УЧАСНИКИ:_** Замовник, система

**_ПЕРЕДУМОВИ:_**

- Замовник авторизувався у системі
- Проект завершений

**_РЕЗУЛЬТАТ:_** Замовник залишив відгук про надані послуги

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _LeaveReview_EX_ProjectIsNotOver_ - Проект ще не завершено

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Користувач відкриває сторінку команди

**2.** Користувач переходить в розділ "Відгуки"

**3.** Система відкриває розділ з відгуками

**4.** Користувач натискає на кнопку "Залишити відгук"

**5.** Система відкриває вікно залишення відгуку

**6.** Користувач пише відгук та оцінює роботу команди

**7.** Користувач натискає на кнопку "Залишити відкук"

**8.** Система зберігає відгук (LeaveReview_EX_ProjectIsNotOver)

**9.** Система інформує користувача що відгук збережено

**---------**

**_ID:_** AddingDeveloper

**_НАЗВА:_** Додавання розробника

**_УЧАСНИКИ:_** Розробник, Тімлід, система

**_ПЕРЕДУМОВИ:_**

- Тімлід авторизувався у системі

**_РЕЗУЛЬТАТ:_** Розробника додано в систему

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _AddingDeveloper_EX_AlreadyOccupied_ - Розробник вже існує

- _AddingDeveloper_EX_ErrorData_ - Дані містять помилку

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

1. Тімлід відкриває меню розробників

2. Тімлід натискає "Додати розробника"

3. Система відкриває меню додавання розробника

4. Тімлід вводить дані розробника

5. Тімлід натискає кнопку "Додати"

6. Система перевіряє правильність даних (AddingDeveloper_EX_ErrorData)

7. Система перевіряє дані розробника (AddingDeveloper_EX_AlreadyOccupied)

8. Система додає розробника

9. Система висилає дані для авторизації розробнику на пошту


**---------**

**_ID:_** ChangeStatus

**_НАЗВА:_** Зміна статусу розробки проєкту

**_УЧАСНИКИ:_** Тімлід, система

**_ПЕРЕДУМОВИ:_**

- Тімлід авторизувався у системі
- Проєкт вже створено

**_РЕЗУЛЬТАТ:_** Статус проєкту змінився

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _ChangeStatus_EX_UnexistingProject_ - Такого проєкта не існує

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Тімлід відкриває меню проєктів

**2.** Тімлід натискає на кнопку "Змінити статус"

**3.** Система пропонує можливі статуси проєкту

**4.** Тімлід обирає потрібний статус

**5.** Тімлід натискає кнопку "Зберегти зміни"

**6.** Система змінює статус проєкту (ChangeStatus_EX_UnexistingProject)

**---------**

**_ID:_** AddTask

**_НАЗВА:_** Додавання нової задачі до проекту

**_УЧАСНИКИ:_** Тімлід, система

**_ПЕРЕДУМОВИ:_**

- Тімлід авторизувався у системі
- Проєкт вже створено

**_РЕЗУЛЬТАТ:_** Задача додана до проекту

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _AddTask_EX_AlreadyAdd_ - Така задача вже існує

- _AddTask_EX_ErrorData_ - Введені дані містять помилку

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Тімлід відкриває меню задач

**2.** Тімлід натискає "Додати задачу"

**3.** Система відкриває меню додавання задачі

**4.** Тімлід вводить дані для задачі

**5.** Тімлід натискає кнопку "Додати"

**6.** Система перевіряє правильність даних (AddTask_EX_ErrorData)

**7.** Система перевіряє дані задачі (AddTask_EX_AlreadyAdd)

**8.** Система додає задачу

**---------**

**_ID:_** DeleteDeveloper

**_НАЗВА:_** Видалення розробника

**_УЧАСНИКИ:_** Розробник, Тімлід, система

**_ПЕРЕДУМОВИ:_**

- Тімлід авторизувався у системі

**_РЕЗУЛЬТАТ:_** Розробника видалено

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _DeleteDeveloper_EX_NotExist_ - Даного розробника не існує

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

1. Тімлід відкриває меню розробників

2. Тімлід обирає потрібного розробника з списку

3. Система виділяє потрібного розробника

4. Тімлід натискає "Видалити"

5. Система просить підтверження

6. Тімлід натискає "Так"

7. Система перевіряє наявість розробника (DeleteDeveloper_EX_NotExist)

8. Система видаляє розробника


**---------**

**_ID:_** RemoveTask

**_НАЗВА:_** Видалення існуючої задачі в проєкті

**_УЧАСНИКИ:_** Тімлід, система

**_ПЕРЕДУМОВИ:_**

- Тімлід авторизувався у системі
- Проєкт вже створено

**_РЕЗУЛЬТАТ:_** Задача видалена з проєкту

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _RemoveTask_EX_NotExist_ - Такої задачі не існує

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Тімлід відкриває меню задач

**2.** Тімлід обирає потрібну задачу

**3.** Тімлід натискає кнопку "Видалити"

**4.** Система просить користувача підтвердити видалення завдання

**5.** Тімлід натискає кнопку "Підтвердити"

**6.** Система перевіряє наявість задачі (RemoveTask_EX_NotExist)

**7.** Система видаляє задачу

**---------**

**_ID:_** ChangeTaskStatus

**_НАЗВА:_** Зміна статусу завдання

**_УЧАСНИКИ:_** Розробник, система.

**_ПЕРЕДУМОВИ:_**

- Розробник авторизувався у системі
- Проєкт вже створено
- Задача вже призначена

**_РЕЗУЛЬТАТ:_** Статус задачі змінений

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _ChangeTaskStatus_EX_NotExist_ - Такої задачі не існує

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Розробник відкриває меню задач

**2.** Розробник обирає потрібну задачу

**3.** Розробник натискає кнопку "Змінити статус"

**4.** Система просить користувача вибрати статус завдання

**5.** Розробник натискає кнопку в залежності від статусу завдання

**6.** Система перевіряє наявість задачі (ChangeTaskStatus_EX_NotExist)

**7.** Система змінює стан задачі

**---------**

**_ID:_** SendingTaskForReview

**_НАЗВА:_** Надсилання завдання для огляду

**_УЧАСНИКИ:_** Розробник, система.

**_ПЕРЕДУМОВИ:_**

- Розробник авторизувався у системі
- Проєкт вже створено
- Задача зі статусом "Огляд коду"

**_РЕЗУЛЬТАТ:_** Задача надіслана на огляд

**_ВИКЛЮЧНІ СИТУАЦІЇ:_**

- _SendingTaskForReview_EX_NotExist_ - Такої задачі не існує

**_ОСНОВНИЙ СЦЕНАРІЙ:_**

**1.** Розробник відкриває меню задач

**2.** Розробник обирає потрібну задачу

**3.** Розробник натискає кнопку "Відправити код на огляд"

**4.** Система просить користувача підтвердити відправлення

**5.** Розробник натискає кнопку підтвердження

**6.** Система перевіряє наявість задачі (SendingTaskForReview_EX_NotExist)

**7.** Система надсилає код на огляд

## <a name='7'> </a>Короткий огляд продукту

**_G.I.T._** - представляє собою новаторський сервіс для ефективного управління проектами, який надає зручний інтерфейс для створення, відстеження, автоматизації та успішного завершення проектів.

**Основними користувачами нашого проекту будуть:**

**_Замовник_** - що є основним ініціатором та фінансовим спонсором проекту. Він визначає стратегічні цілі, формулює та уточнює вимоги, встановлює бюджет і критерії успіху проекту.

**_Тімлід_** - відповідальний за координацію всіх аспектів проекту та досягнення його цілей в межах визначених обмежень. До його обов'язків входить планування ресурсів, ухвалення стратегічних рішень, контроль за графіком та бюджетом, комунікація з усіма учасниками проекту. Тімлід відповідає за успішне завершення проекту.

**_Девелопер_** - це виконавець, який реалізує конкретні завдання, визначені замовником та тімлідом. До його обов'язків входить розробка, тестування та впровадження технічних рішень. Розробник відповідає за технічну складову проекту та виконання завдань відповідно до вимог.

Рамки проекту встановлють саме **_замовник_** та **_тімлід_**.

## <a name='8'> </a>Функціональність

Індивідуальні інтерфейси для кожного користувача спеціально налаштовані під його завдання та роль. Цей підхід дозволяє ефективно адаптувати систему до потреб користувачів, розподілити їх за функціональними обов'язками та автоматизувати доступ до необхідних інструментів. Такий індивідуальний підхід сприяє зручності та продуктивності роботи, а також полегшує взаємодію між користувачами всередині системи.

### Загальні функції інтерфейсу
Кожен користувач може зареєструватися та авторизуватися в системі.

1. Реєстрація користувача.
2. Авторизація користувача.

### Функціональність користувача "Замовник"

Користувач з правами "Замовник" має можливість створювати та управляти проектами, змінювати їх статус, видаляти, переглядати контактну інформацію керівника, відстежувати прогрес розробки, здійснювати оплату послуг та залишати відгуки.

1. Створення проекту.
2. Зміна статусу проекту.
3. Редагування характеристик проекту.
4. Видалення проекту.
5. Доступ до контактів керівника.
6. Відстеження прогресу розробки.
7. Оплата послуг.
8. Надання відгуку.

### Функціональність користувача "Тімлід"

Користувач з правами "Тімлід" може додавати та видаляти розробників, змінювати статус розробки, додавати завдання, змінювати їх статус, видаляти та призначати розробників на конкретні завдання.

1. Додавання розробника.
2. Видалення розробника.
3. Зміна статусу розробки.
4. Додавання завдання.
5. Зміна статусу завдання.
6. Видалення завдання.
7. Призначення розробників на завдання.

### Функціональність користувача "Девелопер"

Користувач з правами "Девелопер" може переглядати вміст завдання, змінювати їх статус та відправляти на перевірку.

1. Доступ до вмісту завдання.
2. Зміна статусу завдання.
3. Відправка завдання на перевірку.

## <a name='9'> </a>Практичність

1. **Інтерфейс, що спрощує роботу:**
  - Система повинна мати інтуїтивний інтерфейс, який дозволяє користувачам швидко освоювати її функції без     необхідності великої підготовки.
2. **Гнучкі налаштування:**
  - Система повинна надавати можливість налаштування під потреби конкретного проекту або команди, включаючи робочі процеси, ролі користувачів та структуру завдань.
3. **Швидкий ввід та оновлення даних:**
  - Користувачам має бути забезпечена можливість швидко вводити та оновлювати інформацію про проект, завдання та інші параметри без зайвої затрати часу.
4. **Доступність на мобільних платформах:**
  - Система повинна бути доступною на різних пристроях і платформах, щоб користувачі могли працювати з нею в будь-якому місці та часі.
5. **Спільна робота команди:**
  - Практичність системи полягає у можливості команди спільно працювати над проектами, обмінюватися інформацією та взаємодіяти в режимі реального часу.
6. **Аналіз та звітність:**
  - Система повинна надавати інструменти для аналізу продвиження проектів та створення звітів, що допоможуть у прийнятті кращих управлінських рішень.
7. **Інтеграція з іншими інструментами:**
  - Система повинна легко інтегруватися з іншими популярними інструментами, такими як електронна пошта, календарі, системи спільної роботи та інші.
8. **Надійність і безпека даних:**
  - Система повинна забезпечувати надійний доступ до даних та зберігання конфіденційної інформації.
9. **Масштабованість і готовність до зростання:**
  - Система повинна бути придатною для використання в різних проектах та компаніях, здатною масштабуватися з ростом потреб.

## <a name='10'> </a>Надійність

Основні вимоги до надійності системи включають:

- Здатність до неперервної роботи навіть в умовах негативних чинників.
- Швидка та ефективна обробка запитів від великої кількості користувачів одночасно.
- Регулярне створення резервних копій баз даних для запобігання можливої втрати інформації.
- Здатність до швидкого відновлення системи в разі аварійних ситуацій або втрати даних.
- Ефективний захист від вторгнень і вірусів для забезпечення безпеки даних та надійності функціоналу системи.

## <a name='11'> </a>Продуктивність

Ключові вимоги до продуктивності включають:

- Швидкість та негайна реакція на запити користувачів (заснована на точній бізнес-логіці системи та оптимізації кількості потоків та процесів, які обслуговують систему).
- Висока пропускна здатність (здатність до ефективної роботи з будь-якою кількістю одночасних користувачів).
- Ефективне використання ресурсів (пам'яті, мережевих з'єднань) для забезпечення оптимальної продуктивності.

## <a name='12'> </a>Експлуатаційна придатність

Критерії експлуатаційної придатності:

- Гнучкість масштабування (система повинна легко масштабуватися для інтеграції нового функціоналу).
- Захищеність даних (усі дані мають бути захищені, а системи, що працюють з ними, перевірені на відповідність стандартам безпеки).
- Надійність (система повинна забезпечувати стійку і стабільну роботу незалежно від зовнішніх умов).
- Простота оптимізації (здатність до постійного вдосконалення та розширення кодової бази з мінімальними зусиллями).
