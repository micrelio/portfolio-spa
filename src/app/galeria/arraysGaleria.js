var count = 0;
var res = 0;
// var todos = [
//   logos = ["/src/assets/images/logos/igr.jpg",
//     "/src/assets/images/logos/igre.png",
//     "/src/assets/images/logos/john.png"],
//   posters = ["/src/assets/images/posters/quiromasajista.jpg"],
//   folletos = ["/src/assets/images/folletos/igreCampana2019.jpg",
//     "/src/assets/images/folletos/igreAntoniaCampaña2019.jpg",
//     "/src/assets/images/folletos/igreCampaña2019B.jpg",
//     "/src/assets/images/folletos/unChalecoUnaVida.jpg"],
//   postales = ["/src/assets/images/postales/postalIgre.jpg",
//     "/src/assets/images/postales/postalIgreCorreo.jpg"],
//   pngs = ["/src/assets/images/png/antonia.png",
//     "/src/assets/images/png/banderaEuropaDesvanecida.png",
//     "/src/assets/images/png/banderaEsquina.png",
//     "/src/assets/images/png/europaRedondo.png",
//     "/src/assets/images/png/igreNavidad.png"],
//     Google=["https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
//     "https://cnnespanol2.files.wordpress.com/2019/12/mejores-imagenes-del-ancc83o-noticias-2019-galeria10.jpg?quality=100&strip=info&w=320&h=240&crop=1",
//     "https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg",
//   "https://us.123rf.com/450wm/nexusplexus/nexusplexus1803/nexusplexus180301586/97569029-imagen-de-fondo-abstracto-con-planetas-espaciales-y-paisaje-natural-.jpg?ver=6",],


// ];


var Galeria = {
        Logos: ["../../assets/images/imagenesPropias/logos/igr.jpg",
            "../../assets/images/imagenesPropias/logos/igre.png",
            "../../assets/images/imagenesPropias/logos/john.png"
        ],
        Posters: ["../../assets/images/imagenesPropias/posters/quiromasajista.jpg", ],
        Folletos: ["../../assets/images/imagenesPropias/folletos/igreCampana2019.jpg",
            "../../assets/images/imagenesPropias/folletos/igreAntoniaCampaña2019.jpg",
            "../../assets/images/imagenesPropias/folletos/igreCampaña2019B.jpg",
            "../../assets/images/imagenesPropias/folletos/unChalecoUnaVida.jpg",
        ],
        Postales: ["../../assets/images/imagenesPropias/postales/postalIgre.jpg",
            "../../assets/images/postales/imagenesPropias/postalIgreCorreo.jpg",
        ],
        Pngs: ["../..//assets/images/imagenesPropias/png/antonia.png",
            "../../assets/images/imagenesPropias/png/banderaEuropaDesvanecida.png",
            "../../assets/images/imagenesPropias/png/banderaEsquina.png",
            "../../assets/images/imagenesPropias/png/europaRedondo.png",
            "../../assets/images/imagenesPropias/png/igreNavidad.png",
        ],
        Google: ["https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
            "https://cnnespanol2.files.wordpress.com/2019/12/mejores-imagenes-del-ancc83o-noticias-2019-galeria10.jpg?quality=100&strip=info&w=320&h=240&crop=1",
            "https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg",
            "https://us.123rf.com/450wm/nexusplexus/nexusplexus1803/nexusplexus180301586/97569029-imagen-de-fondo-abstracto-con-planetas-espaciales-y-paisaje-natural-.jpg?ver=6",
        ],
        Mas: ["https://cr00.epimg.net/radio/imagenes/2020/02/26/entretenimiento/1582741709_730119_1582741931_noticia_normal.jpg",
            "https://www.cinemascomics.com/wp-content/uploads/2017/12/dragon-ball-super-universo-7.jpg",
            "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/d/dragon-ball-super-episode-goku-ultra-instinct.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuSWoybxjqh4_PnpKSpD9hxQwnb3SiPknNIyY-Atq1b_4Lfxfv&usqp=CAU",
        ],
        // Galeria: [],

    },

    Nombres = ["Logos", "Posters", "Folletos", "Postales", "Pngs", ];



// @Input() sum = true;
// inputValue = 0;
//timer para que cambie la imagen a la vez que se carga si no carga la foto y despues la cambia, retrasando la aparicion de alguna
//function cambiar(id) {
//  let h = id;
//  setTimeout(() => {
//   time(h);
// }, 3000);
//}
//function time(j){
//    seleccion = j;
//}