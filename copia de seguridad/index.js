function hiddenA () {
    document.querySelector(".tarot-container-a").classList.add("displayHidden");
    document.querySelector(".main-menu-section").classList.remove("displayHidden");
}

function hiddenBToDaily () {
    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function hiddenDailyToResult () {
    document.querySelector(".tarot-container-daily").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily-result").classList.remove("displayHidden");
}

function returnToB () {
    document.querySelector('#result').scrollTo(0,0);
    document.querySelector(".tarot-container-daily-result").classList.add("displayHidden");
    document.querySelector(".main-menu-section").classList.remove("displayHidden");
}

var cards = [
    {
        "name": "El Loco",
        "number": 0,
        "descriptionDaily": "Disfrutas viajar en todos los niveles: mental, espiritual, emocional y físico. Eres alguien dispuesto a correr riesgos y no tan dispuesto a estar atado a una sola cosa por mucho tiempo. Puede encajar en casi todos los lugares a los que vaya y tener la capacidad de seguir adelante sin llevar mucho equipaje. Aportas entusiasmo creativo, inocencia y nuevas formas de ver las cosas a todas tus empresas. Las personalidades tontas son especialmente divertidas y suelen ser las favoritas de las fiestas.",
    },{ 
        "name": "El Mago",
        "number": 1,
        "descriptionDaily": "Visionario e inspirador, usted es la persona a la que la gente acude en busca de nuevas ideas. Tienes la asombrosa habilidad de convertir tus ideas en realidad, o al menos hacer que otros se entusiasmen tanto que lo hagan por ti. El enfoque es la clave de su éxito. Si pones tu mente en algo de manera seria, estás casi seguro de que se hará realidad. Las comunicaciones y el pensamiento claro y rápido son sus dones. La magia no es más que la manipulación de la energía a voluntad. En el mejor de los casos, los magos son verdaderos maestros de la manipulación.",
    },{ 
        "name": "La Suma Sacerdotisa",
        "number": 2,
        "descriptionDaily": "Nada puede crearte un momento de silencio, toma nota cuidadosamente de todo lo que te rodea. Sensible a las energías más sutiles, se puede confiar en usted para notar lo que la mayoría de nosotros se pierde. Su tranquila paciencia y comportamiento virtuoso a menudo lo colocan en un pedestal ante el cual la gente agradece inclinarse. Su intuición es fuerte y tiende a usar sus sentimientos al menos tanto como su fino intelecto cuando toma decisiones importantes. Los representados por la Suma Sacerdotisa tienen el don de ver un panorama completo sin dejarse abrumar por los detalles.",
    },{ 
        "name": "La Emperatriz",
        "number": 3,
        "descriptionDaily": "Estás ocupado dando a luz nuevas creaciones en forma de arte, comida, música o cualquier cosa que inspire los sentidos. Eres la sensualidad encarnada y cuando te enfocas en tu tarea, inusualmente prolífica. Tu naturaleza amable atrae a muchas almas descarriadas hacia ti y haces todo lo posible para ayudarlas a todas. Para la Emperatriz nada es más importante que la creación y la creación nace del amor.",
    },{ 
        "name": "El Emperador",
        "number": 4,
        "descriptionDaily": "Asertivo y confiado, tienes un fuerte sentido de tu propio dominio. Trabajas duro para crear el mundo en el que quieres vivir y tienes poca tolerancia con los advenedizos que llegan sin invitación. Una vez que te has propuesto algo, tu enfoque rara vez flaquea. Te rodea un aura de autoridad y, a menudo, te encuentras a cargo. Eres un apasionado de tus convicciones y pocos de los que te conocen desconocen tus creencias. En tu mejor momento eres dinámico, lógico y conoces tu propio poder. Realmente puedes hacer que las cosas sucedan, y ¡ay de aquellos que intenten detenerte!",
    },{ 
        "name": "El Sumo Sacerdote",
        "number": 5,
        "descriptionDaily": "Con los pies en la tierra y firmes en sus convicciones espirituales, las personas lo buscan para que les ayude con sus decisiones importantes. A menudo se te ve como una autoridad moral y es un papel que disfrutas. La familia, la tradición y la practicidad se destacan con la energía del Hierofante, al igual que un sentido altamente sintonizado de lo divino. Pasas mucho tiempo tratando de traerlo a la tierra para que el resto de nosotros aprendamos. A veces inflexible, tu sentido del bien y del mal está firmemente definido. Cuando se le pide que emita un juicio, el Hierofante rara vez rehuye el desafío.",
    },{ 
        "name": "Los Enamorados",
        "number": 6,
        "descriptionDaily": "Cuidar tus redes es un componente vital de tu personalidad. Te gusta tener gente a tu alrededor y te sientes más cómodo como parte de una pareja. Aunque a menudo está tranquilo en medio de una multitud, presta mucha atención a lo que sucede y encuentra mucho que decir más tarde cuando está seguro en casa con su otra mitad o sus confidentes cercanos. Tomar decisiones a veces puede ser una lucha y es posible que te encuentres dando vueltas un poco hasta que finalmente estés listo para comprometerte. Pero una vez que lo haces, generalmente lo dices en serio.",
    },{ 
        "name": "El Carro",
        "number": 7,
        "descriptionDaily": "Tu mejor momento cuando estás en movimiento. Nada te deprime más rápido que obligarte a permanecer en el mismo lugar durante demasiado tiempo. Trabajas duro y te mueves con el flujo de las cosas. Otros dependen de su estabilidad de fluidos. La gente aprecia tu fuerza y disposición para hacer el trabajo que esperas de los demás. Has logrado unificar los elementos opuestos dentro de ti y sabes lo que se necesita para comprometerse. La victoria es el fruto del trabajo de El Carro, ya que en última instancia eres reconocido por tu determinación, enfoque y lealtad constante.",
    },{ 
        "name": "La Fuerza",
        "number": 8,
        "descriptionDaily": "Tienes una naturaleza ardiente y, sin embargo, sabes cómo dirigir tu salvajismo interior para fomentar tu poder personal. Equilibrar la bestia interior con una perspectiva inocente y sabiduría compasiva te permite alcanzar tus metas. Tienes la capacidad de vivir con pasión, mientras permaneces mentalmente en paz. El coraje y la integridad son tus dones cuando te enfocas y te mantienes fiel a tu sabiduría interior. Hay más poder en el toque suave que en forzar un problema con ira e impetuosidad. La personalidad de la Fuerza tiene un fuerte deseo por la vida y una apreciación particular por sus ciclos eternos.",
    },{ 
        "name": "El Hermitaño",
        "number": 9,
        "descriptionDaily": "Las preguntas del espíritu te impulsan a mirar dentro de ti mismo para encontrar tu camino. Aunque a menudo está más contento solo, rara vez rechaza a las personas que buscan seriamente un consejo. Y suelen aparecer. En su búsqueda de la verdad, alienta a otros a mirar hacia adentro, tal como lo intenta. Tienes fe solo en lo que sabes por experiencia: la tuya y la de otros en los que confías. Reunir tus pensamientos y construir tu espíritu requiere tiempo y un silencio paciente. Pero vale la pena. A pesar de su solemnidad, el tipo Ermitaño normalmente ama la vida y disfruta de una buena carcajada.",
    },{ 
        "name": "La Rueda De La Fortuna",
        "number": 10,
        "descriptionDaily": "Las oportunidades y los nuevos horizontes mantienen su vida girando con cambios regulares y nuevas perspectivas. Reúne experiencias de todos los ámbitos de la vida y las moldea en nuevas perspectivas para su futuro. La comunicación creativa y la voluntad de seguir adelante son partes integrales de su personalidad. Quedarse atrapado en una rutina lo vuelve loco, y si alguna vez se siente atrapado, cuanto más rápido sacuda las cosas, mejor. El mundo nunca se detiene, y tú tampoco. Los tipos de la rueda de la fortuna esperan que les llegue la buena fortuna, y por lo general sucede.",
    },{ 
        "name": "La Justicia",
        "number": 11,
        "descriptionDaily": "El equilibrio es vital para su personalidad y esforzarse por mantenerlo es un enfoque principal. Tu respeto por la autoridad está directamente relacionado con cuán justa y honesta la percibes. No tienes tiempo para mentirosos y desprecias la injusticia en todas partes. Entiendes bien las lecciones del karma, reconociendo cómo la acción o el pensamiento más pequeño puede causar los cambios más grandes. Tu pasión por la justicia a nivel universal es igual solo a tu necesidad de mantener el equilibrio a nivel personal. Es importante que los tipos de personalidad de Justicia se tomen el tiempo para realinearse, rejuvenecer y regocijarse regularmente.",
    },{ 
        "name": "El Colgado",
        "number": 12,
        "descriptionDaily": "Eres una persona que reconoce la importancia del sacrificio y la paciencia. La paciencia es una virtud, permitir el tiempo necesario para ver todos los lados. El sacrificio es un requisito previo para la iluminación. A veces hay un propósito más elevado que nuestro yo inmediato, y eres particularmente bueno para verlo. Cuando te tomas tu tiempo y miras las cosas desde diferentes perspectivas, puedes descubrir tu verdadero camino. Observe atentamente y siempre sabrá cuándo es el momento adecuado para actuar. La personalidad del Colgado se siente más cómoda cuando logra alinear sus principios superiores con sus actitudes mentales y comportamientos físicos.",
    },{ 
        "name": "La Muerte",
        "number": 13,
        "descriptionDaily": "La transformación y la renovación son naturales para usted, no algo que deba evitar o asustar. Reconoces la importancia de dejar ir los elementos de tu vida que ya no son útiles o que te impiden el futuro que estás tratando de crear. Las nuevas oportunidades solo se pueden realizar cuando se despeja el desorden del pasado. Eres especialmente hábil para avanzar cuando llega el momento. Aferrarse al pasado o revolcarse en la pérdida de tiempos pasados solo estancará su crecimiento interior. La personalidad de la Muerte es consciente de que el ciclo constante de muerte y renacimiento es nada menos que la vida misma. Uno no es posible sin el otro.",
    },{ 
        "name": "La Templanza",
        "number": 14,
        "descriptionDaily": "Te esfuerzas por lograr la armonía entre tu ser emocional/espiritual y físico/mental. A veces esto es difícil, pero la disciplina y el autocontrol te enseñan a combinar estos opuestos para crear un todo hermoso. Puede traer las lecciones del pasado al presente de maneras nuevas e innovadoras. La personalidad de Templanza está especialmente en sintonía con los mensajes de lo divino y, en el mejor de los casos, sirven como puentes entre el espíritu y las llanuras terrenales. La vida fluye más suavemente cuando prestas atención a la voz de tu alma y la personalidad de Templanza puede ser especialmente hábil para hacerlo.",
    },{ 
        "name": "El Diablo",
        "number": 15,
        "descriptionDaily": "Intenso y a veces obsesivo. Te enfocas en algo que sigues haciendo hasta que está hecho. Estás más preocupado por lo que puedes ver y tocar que por las teorías de las hadas. Y no tienes mucha paciencia con aquellos que no quieren ensuciarse cuando sea el momento adecuado. Pero cuando juegas, juegas duro, y a nadie le gusta reírse de lo locos que estamos todos que a ti. Para la personalidad del Diablo, nada es tabú. En lo que a ti concierne, las personas pueden hacer lo que quieran, pero deben hacerlo como si lo dijeran en serio.",
    },{ 
        "name": "La Torre",
        "number": 16,
        "descriptionDaily": "Por mucho que intente mantener el mundo estructurado y estable, siempre parece derrumbarse a su alrededor. Justo cuando pones mortero en el último ladrillo en su lugar, cae un rayo y estás comenzando todo de nuevo. O tal vez eres tú quien está sacudiendo las cosas o actuando como un pararrayos para el loco mundo que te rodea. Hay pocas personas más capaces de resistir la tormenta que las que nacen con la Torre como símbolo. Tu fuerza y fortaleza son enormes, especialmente cuando las cosas se ponen difíciles. La experiencia te ha enseñado que nada dura para siempre, independientemente de lo permanente que parezca. Y de todos modos, a veces los muros se convierten más en una prisión que en un refugio.",
    },{ 
        "name": "La Estrella",
        "number": 17,
        "descriptionDaily": "Lleno de esperanza, incluso en las situaciones más sombrías, tu optimismo es contagioso. Las personas gravitan hacia tu personalidad compasiva y energizante. Tienes una gran fe en la capacidad del Universo para darnos lo que necesitamos cuando más lo necesitamos. Has visto lo feas que pueden ser las cosas, pero conservas una devoción inquebrantable por la belleza. La personalidad de la Estrella tiene el don del rejuvenecimiento. Eres capaz de reponerte a ti mismo y a los demás con tu gracia, encanto y amor por todas las criaturas del universo.",
    },{ 
        "name": "La Luna",
        "number": 18,
        "descriptionDaily": "A menudo hay un manto de misterio que te rodea, pero ciertamente no es porque no dejes que los demás sepan lo que piensas. Está dispuesto a hacer las preguntas difíciles y enfrentar directamente sus miedos. Tienes una personalidad tan profunda que hace que la gente quiera saber más. Tus amigos y socios a menudo tienen la sensación de que no estás revelando todo, incluso si hablas mucho. Las personalidades de la Luna, altamente intuitivas y, a menudo, psíquicas, suelen estar interesadas en lo oculto y/u otros temas del lado más oscuro.",
    },{ 
        "name": "El Sol",
        "number": 19,
        "descriptionDaily": "Eres el tipo de persona que la gente nota. Aunque juguetón y divertido, ciertamente no eres un peso ligero. El Sol es el centro de nuestro universo y, al igual que tú, disfrutas ser el centro del escenario compartiendo tu brillo con el mundo. Te resistes a los límites y requieres el dominio de tu propio destino. De hecho, es difícil para ti doblegarte a la voluntad de otro, y tu disposición alegre rápidamente se vuelve nublada si sientes que alguien está tratando de controlarte. Estás dispuesto a ser vulnerable, pero solo si eso significa que eres libre de ser tu verdadero yo. Decididamente artística e imaginativa, la personalidad del Sol brilla más cuando se le da la oportunidad de crear. Y crearán lo suficiente, grandes, brillantes y calientes para que todos los vean.",
    },{ 
        "name": "El Juicio",
        "number": 20,
        "descriptionDaily": "Los conceptos de resurrección y renovación son importantes para su vida. Alcanzando lo divino, encuentras fuerza en la reflexión honesta y la inspiración en los ciclos cambiantes de la vida. Las personas dependen de su integridad y sinceridad. Tienes un aura de sinceridad que pocos pueden igualar. Eres especialmente bueno en el manejo de la interacción de tu conciencia, inconsciente y conciencia superior. A menudo, una parte integral de su comunidad, la personalidad del Juicio se siente especialmente cómoda cuando ayuda a otros a encontrar sus propias fuentes de renovación.",
    },{ 
        "name": "El Mundo",
        "number": 21,
        "descriptionDaily": "Tienes una extraña habilidad para fusionar tu yo consciente con tu yo inconsciente. Entiendes que en última instancia son lo mismo y tus pensamientos y creatividad fluyen libremente de uno a otro. Puedes crear un universo en una taza de té. La estructura no te estorba. Solo te desafía a encontrar la libertad dentro de él. Estás entusiasmado y dispuesto a probarlo todo, porque todo vale la pena y es posible. Si puedes pensarlo, sabes que puede ser real. Abrazas la alegría de la vida y animas a todos a unirse a ti. La personalidad del Universo equilibra las contradicciones de la vida como un profesional y es más feliz cuando todos bailan.",
    },
]

function dailyResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionDaily + "</p>";
}

//CARD ANIMATION

const card = document.querySelector('.card__inner');

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});