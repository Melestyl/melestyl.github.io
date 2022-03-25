let nickDivRef, nick, letsgoRef, gameDivRef, endDivRef, textRef, imageRef, outputRef, current, monstersTab;
let monst = 0;

const init = () => {
	nickDivRef = document.getElementById("nickdiv");
	letsgoRef = document.getElementById("letsgo");
	gameDivRef = document.getElementById("gamediv");
	endDivRef = document.getElementById("enddiv");
	textRef = document.getElementById("text");
	imageRef = document.getElementById("enemyimg");
	outputRef = document.getElementById("output");

	monstersTab = [
		new Monster("Gobelin",
			"Un petit gobelin sans grosse défence, mais il barre la route.",
			"Meow",
			2,
			"https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Zoom%20Produit%20technique/2/6/0/0885561160062/tsp20121030152047/Vivid-The-Hobbit-Figurine-Gobelin.jpg"),
		new Monster("Gobelin un peu plus méchant",
			"Un petit gobelin sans grosse défence, mais il barre la route.",
			"Grrr",
			5,
			"https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Zoom%20Produit%20technique/2/6/0/0885561160062/tsp20121030152047/Vivid-The-Hobbit-Figurine-Gobelin.jpg"),
		new Monster("Ta mère",
			"Elle te dit que tu as oublié ton gouter.",
			"Tu as oublié ton gouter",
			1,
			"https://t4.ftcdn.net/jpg/00/40/31/07/360_F_40310720_iN9GnfZaRb5iojnz0wbXlwWdWtbxxp1W.jpg"),
		new Monster("Ta belle-mère",
			"C'est pas encore le boss, mais c'est un ennemi redoutable.",
			"Tu as intéret à prendre soin de ma fille",
			3,
			"https://previews.123rf.com/images/poznyakov/poznyakov1707/poznyakov170700224/82401443-woman-alcoholism-is-social-problem-female-drinking-is-cause-of-nervous-stress-green-alcohol-bottle-o.jpg"),
		new Monster("Son crush",
			"Toi mais en mieux.",
			"Je t'aimeeeee",
			20,
			"https://previews.123rf.com/images/yuriyzhuravov/yuriyzhuravov1703/yuriyzhuravov170300209/75170821-surfer-mann-mit-surfbrett-an-der-k%C3%BCste-.jpg"),
		new Monster("Prof de maths",
			"Adore etre sadique dans tous les DS et interros qu'elle donne.",
			"Soient alpha, beta, gamma appartenant à R, tels que alpha*f(1) + beta*f(1) = gamma*f(0). On montre par récurrence que la contraposée du corollaire donne un résultat absurde," +
			" que nous pourrons généraliser dans une loi empirique.",
			3,
			"https://www.reussirmavie.net/photo/art/grande/63205800-45615256.jpg?v=1647963366"),
		new Monster("Tom, le créateur du site",
			"Un gars qui a suffisamment de temps à perdre pour créer ce site, car il est étudiant en ingénierie informatique et industrielle, et qu'il aime bien l'info.",
			" Je suis en train de finir ce site pendant un cours de maths, je devrais écouter plutot...",
			50,
			"https://avatars.githubusercontent.com/u/37739581?v=4"),
		new Monster("Voisin de table",
			"Il veut absolument que je travaille à la place de faire mon petit site tout nul, mais moi j'ai envie de finir, il faut que j'ajoute plus de monstres !",
			"'Vous faites des maths ?'",
			2,
			"https://avatars.githubusercontent.com/u/93975847?v=4"),
		new Monster("FINAL BOSS",
			"IL VA MANGER TOUTE TA FAMILLE SI TU NE LE BATS PAS TOUT DE SUITE, VITE VITE, TU DOIS L'ARRETER, IL FAUT TOUT DE SUITE LE STOPPER." +
			" IL EST DÉJÀ DANS TA CHAMBRE SOUS TON LIT, ET DANS LE NOIR, LA NUIT, IL VA ",
			"grouuuuuuuuuuuuuuuu",
			30,
			"https://i.ytimg.com/vi/fLEaeeID_AU/mqdefault.jpg"),
		new Monster("Toi-meme",
			"Le boss final était en fait un chat sans défense, et depuis le début de l'aventure, tu as combattu ta mère, ta belle-mère, un de tes profs, et moi-meme (Tom), ..." +
			" En fait, depuis le début, c'est toi le monstre.",
			"Click",
			50,
			"https://studybreaks.com/wp-content/uploads/2021/12/Image-from-iOS-1-2.jpg"),
	];

	updateMonster();
};

class Monster {
	constructor(nom, desc, sound, life, img) {
		this.nom = nom;
		this.desc = desc;
		this.sound = sound;
		this.life = life;
		this.maxlife = life;
		this.img = img;
	}
	Sound() {
		outputRef.innerHTML = this.sound + " !!!!";
	}
	Desc() {
		outputRef.innerHTML = this.desc;
	}
	Pv() {
		outputRef.innerHTML = "<p>Points de vie :</p>" +
			"<progress value='" + this.life / this.maxlife + "'></progress>";
	}
	Attack() {
		this.life--;
		if (this.life === 0)
			updateMonster();
		else
			this.Pv();
	}
	Update() {
		textRef.innerHTML = "Vous avez face à vous un " + this.nom;
		imageRef.src = this.img;
		outputRef.innerHTML = this.desc;
	}
}

const updateMonster = () => {
	current = monstersTab[monst];
	if (monst!==monstersTab.length)
		monst++;
	else
		finishGame();
	current.Update();
};

const startGame = () => {
	nick = document.getElementById("nick").value;
	nickDivRef.style.display = "none";
	gameDivRef.style.display = "flex";
};

const finishGame = () => {
	gameDivRef.style.display = "none";
	endDivRef.style.display = "block";
	endDivRef.innerHTML = `<h1>Bravo <span style="color: rgb(255,239,115)">${nick}</span> !</h1><br />`;
	endDivRef.innerHTML += "<p>Tu as su triompher de tous les ennemis qui sont passés sur ton chemin." +
		" Grace à toi, le monde est sauvé et tu as pu retrouver ta princesse adorée." +
		" Vous eurent beaucoup d'enfants et vécurent heureux." +
		"<br />Jusqu'au jour où un dangereux dragon est venu te voir, pour te demander la main de ta princesse..." +
		" Tu lui répondais <strong>NON</strong>, mais il n'abandonnait pas." +
		" A suivre..." +
		"<span style='color: black'>Ou pas ?</span></p>";
};