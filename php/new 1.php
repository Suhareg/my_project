<!Doctype html>
<html>
<head>
<title>Тестовое задание</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="style/style.css" type="text/css" rel="stylesheet" />
<link href="style/jquery-ui-1.9.2.custom.css" type="text/css" rel="stylesheet" />
<link href="style/jquery-ui-1.9.2.custom.min.css" type="text/css" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900" rel="stylesheet">
<script src="js/jquery-1.8.3.js" type="text/javascript"></script>
<script src="js/jquery-ui-1.9.2.custom.js" type="text/javascript"></script>
<script src="js/jquery-ui-1.9.2.custom.min.js" type="text/javascript"></script>
</head>
<body>
<div id="container">
<header>
<img src="img/logo.gif">
<span>Тайное<p>Мировое</p><p>Правительство</p></span>
<div id="menu">
<div id="polosa1"></div>
<div id="polosa2"></div>
<div id="polosa3"></div>
</div>
<ul id="menumob">
<img src="img/krest.png" id="otmena">
<li class="phone"><a href="tel:+16666666666" id="tel">+1 666 666 66 66</li>
<li class="ovlasti"><a href="#">О власти рептилоидов</a></li>
<li class="dollar"><a href="#">Крах доллара</a></li>
<li class="zogovor"><a href="#">Теории заговоров</a></li>
</ul>
</header>
<div id="calc">
<form name="calc" action="php/calc.php" method="post">
<h2>ПОДПИСАТЬСЯ НА ЕЖЕМЕСЯЧНЫЕ ВЗНОСЫ НА <p>СТРОИТЕЛЬСТВО СЕКРЕТНОЙ БАЗЫ В АНТАРКТИДЕ</p></h2>
<div id="data">
<span id="data1">Дата вклада</span>
<input type="text" id="date" name="date">
</div>
<div id="vklad">
<span id="vklad1">Срок вклада</span>
<select>
  <option>1 год</option>
  <option>2 года</option> 
  <option>3 года</option> 
  <option>4 года</option> 
  <option>5 лет</option> 
</select>
</div>
<div id="prodlenie">
<span id="prodlenie1">Автоматическое продление</span>
<input type="radio" id="radio1">
<label for="radio1" name="radio"><span>Да</span></label>
<input type="radio" name="radio" checked id="radio2">
<label for="radio2"><span>Нет</span></label>
</div>
<div id="summa">
<span id="summa1">Сумма вклада</span>
<input type="text" id="summ" value="1000" name="summ">
</div>
<div id="p1">
<span id="min">1000р</span>
<input type="range" id="polzunok1" min="1000" max="3000000" step="1000" value="1000">
<span id="max">3000000р</span>
</div>
<div id="popolnenie">
<span id="popolnenie1">Пополнение вклада</span>
<input type="radio" id="radio3">
<label for="radio3"><span>Да</span></label>
<input type="radio" id="radio4" checked name="radio3">
<label for="radio4" name="radio4"><span>Нет</span></label>
</div>
<div id="mesyac">
<span id="mesyac1">Сумма в месяц</span>
<input type="text" id="summ1" value="1000" name="summ1">
</div>
<div id="p2">
<span id="min1">1000р</span>
<input type="range" id="polzunok2" min="1000" max="3000000" step="1000" value="1000">
<span id="max1">3000000р</span>
</div>
<div id="itog">Мой вклад в деятельность тайного<p>мирового правительства составит:</p></div>
<div id="cifra">12 000 р</div>
<input type="submit" value="Подписаться">
</form>
</div>
<div id="row"></div>
</div>
<footer>
<a href="#" id="oborganiz">Об организации</a>
<a href="#" id="kloni">Клоны президентов</a>
<a href="#" id="polit">Политика конфиденциальности</a>
<div>Сделано анонимно</div>
</footer>
</div>
<script src="js/ind.js" type="text/javascript"></script>
</body>
</html>