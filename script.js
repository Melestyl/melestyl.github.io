let refFirst, refSecond, refNick, refPass, refLeft, refRight, refImage;
let alreadyPrinted = false;

const imgs = [];
imgs.links = [ /* !! None of the images is mine !! */
    "https://images5.alphacoders.com/432/thumb-1920-432951.jpg",
    "https://voyage-onirique.com/wp-content/uploads/2020/03/backiee-138908-landscape-scaled.jpg",
    "https://images.unsplash.com/photo-1563008887-170b34916b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF5c2FnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://voyage-onirique.com/wp-content/uploads/2019/01/WallpaperStudio10Mont-st-michel-211506-1920x1080.jpg",
    "https://i.pinimg.com/originals/2a/e3/1e/2ae31ef48e226c6b3bf738598df38a5d.png",
    "https://fotomelia.com/wp-content/uploads/edd/2015/05/fond-d-%C3%A9ran-hd-wallpaper-paysage-coucher-de-soleil-sunset-images-gratuites-1560x878.png",
]
imgs.current = 0;
imgs.before = function () {
    if (imgs.current === 0)
        imgs.current = imgs.links.length;
    return --imgs.current;
}
imgs.after = function () {
    if (imgs.current === imgs.links.length - 1)
        imgs.current = -1;
    return ++imgs.current;
}

function init() {
    refFirst = document.getElementById("first_step");
    refSecond = document.getElementById("second_step");
    refNick = document.getElementById("nickname");
    refPass = document.getElementById("password");
    refLeft = document.getElementById("left");
    refRight = document.getElementById("right");
    refImage = document.getElementById("image");

    refLeft.addEventListener("click", function () {
        refImage.src = imgs.links[imgs.before()];
        /* console.log(imgs.before()); */
    })
    refRight.addEventListener("click", function () {
        refImage.src = imgs.links[imgs.after()];
        /* console.log(imgs.after()); */
    })
}

function verify() {
    if (refNick.value === "admin" && refPass.value === "root") {
        refFirst.style.display = "none";
        refSecond.style.display = "flex";
    } else {
        if (!alreadyPrinted) {
            const warning = document.createElement("p");
            warning.innerHTML = "Mauvais identifiant ou mot de passe.";
            warning.style.color = "red";
            refFirst.appendChild(warning);
            alreadyPrinted = true;
        }
    }
}