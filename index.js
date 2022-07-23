const cardSelect = document.querySelectorAll('.cardSelect');

function hiddenWelcome () {
    document.querySelector(".tarot-container-a").classList.add("displayHidden");
    document.querySelector(".main-menu-section").classList.remove("displayHidden");
}

function mainToCardSelectDaily () {
    for (var i=0; i < cardSelect.length; i++) {
        cardSelect[i].setAttribute("onclick", "setTimeout(dailyToResult, 1000), dailyResult();");
    }

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function mainToCardSelectLove () {
    for (var i=0; i < cardSelect.length; i++) {
        cardSelect[i].setAttribute("onclick", "setTimeout(dailyToResult, 1000), loveResult();");
    }

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function mainToCardSelectYesnot () {
    document.querySelector('#textarea-send').setAttribute("onclick", "setTimeout(dailyToResult, 1000), yesnotResult();");

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".question-container").classList.remove("displayHidden");
}

function mainToCardSelectCareer () {
    for (var i=0; i < cardSelect.length; i++) {
        cardSelect[i].setAttribute("onclick", "setTimeout(dailyToResult, 1000), careerResult();");
    }

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily").classList.remove("displayHidden");
}

function mainToCardSelectNumeric () {
    document.querySelector('#date-send').setAttribute("onclick", "setTimeout(dailyToResult, 1000), numericResult();");

    document.querySelector(".main-menu-section").classList.add("displayHidden");
    document.querySelector(".numeric-container").classList.remove("displayHidden");
}

function dailyToResult () {
    document.querySelector(".tarot-container-daily").classList.add("displayHidden");
    document.querySelector(".numeric-container").classList.add("displayHidden");
    document.querySelector(".question-container").classList.add("displayHidden");
    document.querySelector(".tarot-container-daily-result").classList.remove("displayHidden");
}

function returnToMain () {
    //Reset Result Scroll
    document.querySelector('#result').scrollTo(0,0);
    //Reset Card Flip
    flipped();
    //Reset TextArea
    document.querySelector('#textarea-name').value = "";
    document.querySelector('#textarea-question').value = "";
    
    document.querySelector(".tarot-container-daily-result").classList.add("displayHidden");
    document.querySelector(".main-menu-section").classList.remove("displayHidden");
}

var cards = [
    {
        "name": "El Loco",
        "number": 0,
        "descriptionDaily": "Disfrutas viajar en todos los niveles: mental, espiritual, emocional y físico. Eres alguien dispuesto a correr riesgos y no tan dispuesto a estar atado a una sola cosa por mucho tiempo. Puede encajar en casi todos los lugares a los que vaya y tener la capacidad de seguir adelante sin llevar mucho equipaje. Aportas entusiasmo creativo, inocencia y nuevas formas de ver las cosas a todas tus empresas. Las personalidades tontas son especialmente divertidas y suelen ser las favoritas de las fiestas.",
        "descriptionLove": "Estás a punto de embarcarte en un nuevo viaje romántico. Si ya está en una relación, este podría ser un nuevo capítulo como un compromiso, una boda o incluso un bebé. Si eres soltero y buscas relacionarte, el Loco en una lectura de amor significa que podrás manifestar una nueva relación romántica con mucha facilidad y sin preocupaciones. El significado que debe extraerse de esto es estar abierto e invitar a personas nuevas e inesperadas en su vida. Es un buen momento para exponerse y tomar nuevas oportunidades con socios con los que de otro modo no consideraría salir. Esta carta te anima a confiar en lo desconocido y adoptar una perspectiva más optimista y esperanzadora, celebrando y recuperando a tu niño interior.",
        "descriptionCareer": "Esta carta sugiere que hay nuevas oportunidades en el horizonte y ahora puedes dar ese salto que siempre has querido.<br><br>¿No sabes si deberias aplicar para ese trabajo que tanto te gusta? ¿O desde hace tiempo has querido emprender tu propio negocio pero temes de los resultados? ¿Quieres ese ascenso pero nunca llegaste a postularte?<br><br>¡El Loco te está diciendo que lo hagas! Sigue lo que tu alma quiere y recuerda, tomar riesgos está de tu lado en este momento. Puedes avanzar rápida y fácilmente ahora mismo siempre que enfoques tu energia en ello.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Inocencia • Espontaneidad • Espíritu Libre • Ingenuidad •<br><br><strong>Planeta: </strong> Urano<br><strong>Letra Hebrea: </strong>  Tau<br><strong>Elemento: </strong>  Fuego<br><strong>Numerología: </strong>  22",
    },{ 
        "name": "El Mago",
        "number": 1,
        "descriptionDaily": "Visionario e inspirador, usted es la persona a la que la gente acude en busca de nuevas ideas. Tienes la asombrosa habilidad de convertir tus ideas en realidad, o al menos hacer que otros se entusiasmen tanto que lo hagan por ti. El enfoque es la clave de su éxito. Si pones tu mente en algo de manera seria, estás casi seguro de que se hará realidad. Las comunicaciones y el pensamiento claro y rápido son sus dones. La magia no es más que la manipulación de la energía a voluntad. En el mejor de los casos, los magos son verdaderos maestros de la manipulación.",
        "descriptionLove": "Representa a alguien suave y encantador, él o ella entrara a tu vida y te sorprenderá de una manera verdaderamente mágica, este es un romance vertiginoso que se siente como un cuento de hadas. Si aún no ha sucedido, pronto lo hará. ¿Resistirá esta relación la prueba del tiempo? Bueno, eso depende. La carta del tarot Mago a veces representa a un manipulador, alguien que usa su personalidad y carisma para engañar a quienes caen bajo su hechizo. ¿Qué dice tu intuición? Mire las cartas alrededor del Mago para determinar sus verdaderas intenciones. De todos modos, esta conexión será una que cambiará la vida.",
        "descriptionCareer": "Esta carta sugiere que hay oportunidades nuevas y emocionantes en el horizonte, y que tienes los poderes y habilidades para perseguirlas y tener éxito.<br><br>¿Dónde estás en lo que respecta a tu carrera? ¿Hay cosas que todavía quieres lograr?<br><br>El Mago te está diciendo que vayas tras tus sueños. Es hora de poner tus pasiones primero y elaborar un plan claro para tu destino. Si hay oportunidades para promociones o empresas comerciales, ¡aprovéchalas con toda tu energía! Tienes las herramientas para tener éxito, así que ponte ahí fuera y manifiesta tu futuro.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Poder • Habilidad • Concentración • Acción • Ingenio •<br><br><strong>Planeta Regente: </strong> Mercurio<br><strong>Letra Hebrea: </strong>  Aleph <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Aries<br><strong>Numerología: </strong>  1",
    },{ 
        "name": "La Suma Sacerdotisa",
        "number": 2,
        "descriptionDaily": "Nada puede crearte un momento de silencio, toma nota cuidadosamente de todo lo que te rodea. Sensible a las energías más sutiles, se puede confiar en usted para notar lo que la mayoría de nosotros se pierde. Su tranquila paciencia y comportamiento virtuoso a menudo lo colocan en un pedestal ante el cual la gente agradece inclinarse. Su intuición es fuerte y tiende a usar sus sentimientos al menos tanto como su fino intelecto cuando toma decisiones importantes. Los representados por la Suma Sacerdotisa tienen el don de ver un panorama completo sin dejarse abrumar por los detalles.",
        "descriptionLove": "Es posible que te sientas insatisfecho con muchas áreas de tu vida, incluido el amor. Probablemente sientas que no puedes lograr la intimidad sin importar cuánto lo intentes.<br><br>Afortunadamente, hay una solución fácil: ¡deja de intentarlo! No estamos diciendo que renuncies a la vida o a tus relaciones, sino que simplemente des un paso atrás y dejes que florezca lo que ya es.<br><br>Si nos obligamos a comprometernos o 'estar contentos' antes de que nosotros estemos listos, el resentimiento comienza a acumularse. Realmente está bien ser pasivo y paciente.<br><br>▸ Enfócate en tus propios deseos y necesidades<br>▸ Deja de intentarlo y da un paso atrás<br>▸ Ser pasivo y paciente",
        "descriptionCareer": "Buscas conocimiento e inspiracion. Pronto aparecerán nuevas ideas y objetivos de trabajo y esto puede provocar un cambio de carrera.<br><br>Piensa en tus verdaderos sueños y deseos internos. ¿Qué es lo que realmente esperas de tu vida laboral? ¿Lo estás consiguiendo ahora mismo? ¿O necesita cambiar las cosas y seguir un nuevo camino?<br><br>Si has de tomar decisiones importantes en el ámbito laboral, escucha tu intuición. Amigos y familiares podrian tratar de ayudar con consejos, pero por ahora deberas buscar la respuesta en ti. Tómate un tiempo para meditar sobre lo que realmente quieres.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Intuición • Misterio • Mente Subconsciente • Actitud Velada • Voz Interior •<br><br><strong>Asociación: </strong> La Luna<br><strong>Letra Hebrea: </strong>  Beth <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Escorpio<br><strong>Numerología: </strong>  2",
    },{ 
        "name": "La Emperatriz",
        "number": 3,
        "descriptionDaily": "Estás ocupado dando a luz nuevas creaciones en forma de arte, comida, música o cualquier cosa que inspire los sentidos. Eres la sensualidad encarnada y cuando te enfocas en tu tarea, inusualmente prolífica. Tu naturaleza amable atrae a muchas almas descarriadas hacia ti y haces todo lo posible para ayudarlas a todas. Para la Emperatriz nada es más importante que la creación y la creación nace del amor.",
        "descriptionLove": "La Emperatriz representa la relación perfecta con uno mismo y con los demás.<br><br>Si deseas una conexión amorosa sana, íntegra y armoniosa, la Emperatriz en una lectura de amor es una buena señal. Sin embargo, esto no es algo que puedas manifestar a menos que primero te asegures de estar bien contigo.<br><br>¿Te aceptas como eres? ¿Aceptas tus defectos? ¿Estás lleno de confianza o todavía estás luchando con la vergüenza y la culpa? El tipo de relación que brinda la Emperatriz es un subproducto del autocuidado.<br><br>Vale la pena señalar nuevamente que la emperatriz tiene un fuerte vínculo con el 'rol maternal'. Si ya es madre o desea serlo pronto, esto no le sorprende. Si aún no está listo para asumir el papel de padre, considere convertirse en mentor.<br><br>▸ Asegúrate de estar bien contigo<br>▸ Practica el autocuidado<br>▸ Cuida de los demás con amor y compasión",
        "descriptionCareer": "¿Estas prosperando en tu carrera? Si no es ahora, probablemente lo hará pronto. La Emperatriz también podría anunciar una época de intensificación de la pasión y la creatividad en el trabajo. Entonces, si tiene su creatividad fluyendo, ahora es el momento de ponerla a trabajar.<br><br>Hay muchas posibilidades de que lo que pones ahora en tu energía valga la pena. Tambien podria significar que tienes compañeros de trabajo que te apoyan y te cuidan, o que se sienten particularmente comodos contigo.<br><br>Quizas sea un buen momento para renovar tu oficina o lugar de trabajo, deja que tu creatividad fluya.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Fertilidad • Belleza • Naturaleza • Dependencia • Servilismo •<br><br><strong>Planeta: </strong> Venus<br><strong>Letra Hebrea: </strong>  Ghimed <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Libra<br><strong>Numerología: </strong>  3",
    },{ 
        "name": "El Emperador",
        "number": 4,
        "descriptionDaily": "Asertivo y confiado, tienes un fuerte sentido de tu propio dominio. Trabajas duro para crear el mundo en el que quieres vivir y tienes poca tolerancia con los advenedizos que llegan sin invitación. Una vez que te has propuesto algo, tu enfoque rara vez flaquea. Te rodea un aura de autoridad y, a menudo, te encuentras a cargo. Eres un apasionado de tus convicciones y pocos de los que te conocen desconocen tus creencias. En tu mejor momento eres dinámico, lógico y conoces tu propio poder. Realmente puedes hacer que las cosas sucedan, y ¡ay de aquellos que intenten detenerte!",
        "descriptionLove": "Si eres soltero, ¡prepárate para enamorarte pronto! La carta del tarot Emperador en una lectura de amor y relación significa acción, compromiso y estabilidad.<br><br>Conocido por su autoridad y naturaleza paternal, el Emperador a menudo indica una relación romántica con una persona mayor, que te colmará de amor, atención y apoyo.<br><br>Si ya estás en una relación, la carta del tarot del Emperador es una buena señal, ya que representa la monogamia y las relaciones duraderas. Te dice que tu pareja está contigo a largo plazo y que tu relación será estable.<br><br>¿Estás pasando por un momento difícil con tu ser querido? Si este es el caso, esta carta te dice que la situación mejorará pronto.<br><br>▸ Prepárate para enamorarte pronto si estás soltero<br>▸ Si estás en una relación, podria ser duradera<br>▸ Los problemas de relación pronto terminarán o mejorarán",
        "descriptionCareer": "Profesionalmente eres capaz de hacerte cargo y liderar. El Emperador indica que puedes ser visto como alguien con poder o control sobre otras personas a su alrededor en el trabajo, pero también tiene responsabilidad y cualidades de liderazgo.<br><br>Esta carta tambien presagia que tu trabajo es notado y apreciado, lo que te traerá grandes recompensas a cambio.<br><br>Si está buscando trabajo, podrias encontrar uno que se adapte a ti y que funcione en tu horario diario. Eres perseverante y comprometido con tu carrera, solo recuerda tambien serlo en otros aspectos de tu vida.<br><br>También podría indicar que alcanzaras estabilidad en tu trabajo y carrera.",   
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Autoridad • Figura Paterna • Estructura • Rigidez • Control •<br><br><strong>Planeta: </strong> Júpiter<br><strong>Letra Hebrea: </strong>  Daleth <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Aries<br><strong>Numerología: </strong>  4",
    },{ 
        "name": "El Sumo Sacerdote",
        "number": 5,
        "descriptionDaily": "Con los pies en la tierra y firmes en sus convicciones espirituales, las personas lo buscan para que les ayude con sus decisiones importantes. A menudo se te ve como una autoridad moral y es un papel que disfrutas. La familia, la tradición y la practicidad se destacan con la energía de El Sumo Sacerdote, al igual que un sentido altamente sintonizado de lo divino. Pasas mucho tiempo tratando de traerlo a la tierra para que el resto de nosotros aprendamos. A veces inflexible, tu sentido del bien y del mal está firmemente definido. Cuando se le pide que emita un juicio, El Sumo Sacerdote rara vez rehuye el desafío.",
        "descriptionLove": "Compromiso total, por lo tanto El Sumo Sacerdote en un contexto de amor es una muy buena señal. Se asocia con relaciones tradicionales y sólidas e indica que usted y su pareja están en la misma página sobre casi todo. Esta no es solo una relación normal, sino una que se siente como 'destinada a ser' y casi sagrada.<br><br>Si eres soltero, el Hierofante en una lectura de tarot de amor indica que alguien en tu círculo íntimo te está vigilando. Este podría ser un amigo en el que ha estado interesado durante un tiempo, pero parecía estar fuera de su alcance. ¡Prepárate para que una de tus amistades se convierta en un romance lleno de romance y fidelidad!<br><br>Al ser vulnerable y honesto, ¡te ganarás el respeto de los demás! Incluso si son de un entorno totalmente diferente o no están de acuerdo con sus valores.",
        "descriptionCareer": "El Sumo Sacerdote tiene que ver con trabajar con otros y aprender de los que están por encima de usted, así que tenga esto en cuenta en su lugar de trabajo. La cooperación podria traerte recompensas. Trabajar en equipo sera muy util en este momento. Manten el statu quo, sugerir o probar ideas nuevas no convencionales podrian no ser lo indicado ahora.<br><br>Escucha a tus mentores y expertos. Esta carta esta conectada con el aprendizaje y la enseñanza, ¿qué es lo que necesitas aprender para tener éxito? Manten contacto con personas que pueden impulsar tu carrera.<br><br>En algunos casos, esta carta sugirere que debes enseñar a otros. Tal vez ya has alcanzado el exito, recuerda dar asi como recibes. ¿Hay alguien en tu lugar de trabajo a quien puedas guiar?",    
        "descriptionYesNot": "Quizás",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Religión • Identificación Social • Creencias • Statu Quo • Restricción •<br><br><strong>Planeta: </strong> Júpiter<br><strong>Letra Hebrea: </strong>  Heth <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Tauro<br><strong>Numerología: </strong>  5",
    },{ 
        "name": "Los Enamorados",
        "number": 6,
        "descriptionDaily": "Cuidar tus redes es un componente vital de tu personalidad. Te gusta tener gente a tu alrededor y te sientes más cómodo como parte de una pareja. Aunque a menudo está tranquilo en medio de una multitud, presta mucha atención a lo que sucede y encuentra mucho que decir más tarde cuando está seguro en casa con su otra mitad o sus confidentes cercanos. Tomar decisiones a veces puede ser una lucha y es posible que te encuentres dando vueltas un poco hasta que finalmente estés listo para comprometerte. Pero una vez que lo haces, generalmente lo dices en serio.",
        "descriptionLove": "Si eres soltero, agárrate fuerte porque esta carta te dice que un romance al rojo vivo está en camino. Incluso existe la posibilidad de elegir entre dos amantes diferentes.<br><br>Si está en una relación o ya está comprometido, esta tarjeta indica una conexión de almas hermosa con un ser querido.<br><br>Conseguir esta carta en una lectura de Amor es señal de que puedes dejar claros tus sentimientos e intenciones con la confianza de que serán correspondidos.<br><br>También indica deseabilidad y armonía entre las personas que se aman, por lo que si has estado deseando la renovación de tu relación, ahora es momento adecuado.<br><br>▸ Si eres soltero, prepárate para un fuerte romance<br>▸ Si estás en una relación, esta es una conexión del alma<br>▸ ¿Estás deseando renovarte? Si es así, esto sucederá pronto",
        "descriptionCareer": "Tendras que tomar decisiones. Y no cualquier elección, sino una que tendrá bastante importancia. Al considerar las opciones, asegúrese de que su corazón esté al cien por cien en ello.<br><br>Si amas lo que haces, esta carta sugiere que estas en el lugar indicado. Todo lo que necesitas hacer es entregarte con pasión. Si en algun momento sientes que fallas, recuerda que estos son curvas de aprendizaje.<br><br>Por otro lado esta carta te recuerda que no vivas en un mundo de ilusión. Cuando necesites tomar decisiones no te quedes nadando en la duda. Ten un conocimiento claro de los factores, asi como de tus sueños.",    
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Unión • Similitud • Opciones • Desequilibrio • Sentimiento •<br><br><strong>Estación: </strong> Otoño<br><strong>Letra Hebrea: </strong>  Vau <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Virgo<br><strong>Numerología: </strong>  6",
    },{ 
        "name": "El Carro",
        "number": 7,
        "descriptionDaily": "Tu mejor momento cuando estás en movimiento. Nada te deprime más rápido que obligarte a permanecer en el mismo lugar durante demasiado tiempo. Trabajas duro y te mueves con el flujo de las cosas. Otros dependen de su estabilidad de fluidos. La gente aprecia tu fuerza y disposición para hacer el trabajo que esperas de los demás. Has logrado unificar los elementos opuestos dentro de ti y sabes lo que se necesita para comprometerse. La victoria es el fruto del trabajo de El Carro, ya que en última instancia eres reconocido por tu determinación, enfoque y lealtad constante.",
        "descriptionLove": "Puede representar problemas de control o ser presionado para estalecerse en las relaciones.<br><br>También representa discusiones tontas, competencia, así como celos. Si esto es algo que está sucediendo en tus relaciones actualmente, deberás tomar una posición.<br><br>Si hay una manera de comunicarse y superar tus problemas, debes hacerlo. Sin embargo, nunca debes permitir que te maltraten mientras doblegan tu voluntad.<br><br>Si eres soltero o estás tratando de sanar de una relación herida, la carta de El Carro en este contexto, a menudo representa que el cuidado y amor personal debe estar presente en nuestra vida.<br><br>¿Hay miedos o sistemas de creencias negativas que te están desconectando del amor que deseas y mereces?<br><br>Al descubrir cuáles son estos obstáculos, podrás avanzar en un camino que conduce a que se cumplan todos tus deseos, incluidos los de naturaleza romántica.<br><br>▸ En las relaciones: toma una posición<br>▸ Comunica y supera tus problemas<br>▸ Practica el autocuidado<br>▸ Averigua si hay algo que te impide amar",
        "descriptionCareer": "Es una carta de progreso y logro y, por lo tanto, significa que está en el camino correcto con respecto a sus objetivos profesionales.<br><br>Si está buscando una promoción o comenzar una nueva carrera, ahora es el momento de hacerlo. Estás muy motivado en este momento y te sientes empeñado en el éxito. ¡Abraza este sentimiento y actúa! Permanece enfocado en tu verdadera vocación y no te dejes llevar solo por las recompensas materiales. Cuando se trata de tu carrera, sigue tu pasión y no lo que parece bueno para ti en este momento.<br><br>Tienes el poder de triunfar, superando cualquier obstáculo en tu camino.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Voluntad • Afirmación • Determinación • Agresión • Incertidumbre •<br><br><strong>Planeta: </strong> Marte<br><strong>Letra Hebrea: </strong>  Zaín <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Cáncer<br><strong>Numerología: </strong>  7",
    },{ 
        "name": "La Fuerza",
        "number": 8,
        "descriptionDaily": "Tienes una naturaleza ardiente y, sin embargo, sabes cómo dirigir tu salvajismo interior para fomentar tu poder personal. Equilibrar la bestia interior con una perspectiva inocente y sabiduría compasiva te permite alcanzar tus metas. Tienes la capacidad de vivir con pasión, mientras permaneces mentalmente en paz. El coraje y la integridad son tus dones cuando te enfocas y te mantienes fiel a tu sabiduría interior. Hay más poder en el toque suave que en forzar un problema con ira e impetuosidad. La personalidad de la Fuerza tiene un fuerte deseo por la vida y una apreciación particular por sus ciclos eternos.",
        "descriptionLove": "La carta del tarot de la Fuerza en un contexto de amor a menudo aparece cuando tienes problemas de relación, ya sea con la familia, un amigo o tu amante.<br><br>Sin embargo, esto no es algo malo. Esta carta representa tu capacidad para aceptar a los demás tal como son, practicar la paciencia y demostrar la fuerza del amor.<br><br>¿Qué puedes hacer para ser más abierto y amoroso? ¿Hay heridas del pasado que necesitas perdonar? Evita la tendencia a cerrarte cuando te enfrentes al dolor.<br><br>Encuentra formas de abrir tu corazón aún más durante estos tiempos. La meditación, el trabajo voluntario y pasar tiempo haciendo las cosas que amas son excelentes opciones.<br><br>▸ Estás teniendo problemas de relación<br>▸ Demuestra la fuerza del amor<br>▸ Encuentra maneras de abrir tu corazón",
        "descriptionCareer": "Hay algo que has querido hacer con tu carrera, deja que tu pasión te impulse a dar ese paso. Has cultivado las habilidades. Y ahora es el momento de profundizar y encontrar el coraje que necesitas para dar un salto adelante.<br><br>¿Estás buscando cambiar de trayectoria? Esta carta predice que es un buen momento para hacerlo. Si buscas un ascenso, ten confianza y llama la atencion con buenas practicas en tu espacio laboral, tus esfuerzos seran notados. <br><br>Todo lo que necesitas hacer es tener el coraje de seguir tus sueños. Da el salto de fe.<br>",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "",
        "descriptionNumeric": "• Fortaleza • Coraje • Compasión • Inseguridad • Auto-Disciplina •<br><br><strong>Planeta: </strong> Saturno<br><strong>Letra Hebrea: </strong>  Kath <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Leo<br><strong>Numerología: </strong>  11 y 2",
    },{ 
        "name": "El Ermitaño",
        "number": 9,
        "descriptionDaily": "Las preguntas del espíritu te impulsan a mirar dentro de ti mismo para encontrar tu camino. Aunque a menudo está más contento solo, rara vez rechaza a las personas que buscan seriamente un consejo. Y suelen aparecer. En su búsqueda de la verdad, alienta a otros a mirar hacia adentro, tal como lo intenta. Tienes fe solo en lo que sabes por experiencia: la tuya y la de otros en los que confías. Reunir tus pensamientos y construir tu espíritu requiere tiempo y un silencio paciente. Pero vale la pena. A pesar de su solemnidad, el tipo Ermitaño normalmente ama la vida y disfruta de una buena carcajada.",
        "descriptionLove": "Cuando se trata de amor y relaciones, esta no es una carta de 'romance' positiva. No siempre significa el final de una relación o soltería, aunque puede. Si eres soltero y quieres amor, asegúrate de estar realmente listo para una relación.<br><br>¿Te cuesta buscar la validación de los demás? Trabaja en eso. Si tiene problemas de codependencia o seguridad, dedique tiempo a corregirlos, de esta manera puedes atraer una pareja con una vibración positiva. De lo contrario, atraerás a alguien que refleje esos mismos problemas.<br><br>Si estás comprometido y quieres seguir así, genial. Sin embargo, el mismo concepto de esta carta podria afectarte.<br><br>Asegúrate de que estas invirtiendo tanta energía en usted como en su pareja y familia. No te pierdas tanto en tu matrimonio que descuides la relación contigo mismo.",
        "descriptionCareer": "Esta carta sugiere que hay otros aspectos de tu vida que requieren atencion, tu carrera o trabajo deberan esperar.<br><br>Si eres una persona trabajadora o estas muy enfocado en tus estudios, El Ermitaño indica que debes tomarte un descanso. El exito es muy importante para ti, pero una buena salud mental y fisica tambien es parte de este.<br><br>Podrias sentirse atraído por explorar tu lado espiritual o encontrar nuevas formas de trabajar. Tu vida laboral y emocional deben encontrar un equilibrio, este es un buen momento para hacerlo.<br><br>Emprenderas un viaje de autodescubrimiento.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Espiritualidad • Neutralidad • Mensaje Profundo •<br><br><strong>Estación: </strong> Otoño<br><strong>Letra Hebrea: </strong>  Teth <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Virgo<br><strong>Numerología: </strong>  9",
    },{ 
        "name": "La Rueda De La Fortuna",
        "number": 10,
        "descriptionDaily": "Las oportunidades y los nuevos horizontes mantienen su vida girando con cambios regulares y nuevas perspectivas. Reúne experiencias de todos los ámbitos de la vida y las moldea en nuevas perspectivas para su futuro. La comunicación creativa y la voluntad de seguir adelante son partes integrales de su personalidad. Quedarse atrapado en una rutina lo vuelve loco, y si alguna vez se siente atrapado, cuanto más rápido sacuda las cosas, mejor. El mundo nunca se detiene, y tú tampoco. Los tipos de la rueda de la fortuna esperan que les llegue la buena fortuna, y por lo general sucede.",
        "descriptionLove": "¿Ya estás comprometido? Si eres feliz en tu relación y quieres que continúe, la Rueda de la Fortuna en el amor y las relaciones sugiere que un evento positivo los acercará aún más.<br><br>La agitación y un cambio completo pueden ser su mejor apuesta. Dejar que tu Ser Superior sea tu guía siempre es una opción sólida.<br><br>Si eres soltero, pronto conocerás a tu alma gemela, por casualidad. No sabrás cuándo o dónde aparecerá esta persona, pero cuando lo haga, ¡verás que es el destino!<br><br>En un contexto de relación, esta carta también se conoce como la rueda del karma. Este es un gran recordatorio de que 'cosechas lo que siembras'. Eventualmente, enfrentará las consecuencias de tus acciones.<br><br>Da el tipo de energía que también quieres recibir de los demás.",
        "descriptionCareer": "Se avecina un cambio en tu situación laboral, ¡y este será positivo! Si está buscando cambiar de carrera o solicitar un nuevo trabajo, hágalo ahora. El universo es abundante y esta a tu favor.<br><br>Hay grandes energias detras de ti en este momento, debes tomar accion rapida si deseas aprovecharla. ¡Sigue lo que tu corazón te dice y arriésgate! Pronto cosecharás las recompensas que has estado buscando.<br><br>Si financieramente has estado teniendo problemas, La Rueda De La Fortuna sugiere un cambio en sus circunstancias. ¡El dinero podría estar en camino a tus manos!",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Buena Suerte • Karma • Cambios • Mala Suerte • Energías Negativas •<br><br><strong>Planeta: </strong> Júpiter<br><strong>Letra Hebrea: </strong>  Yoth <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Capricornio<br><strong>Numerología: </strong>  10",
    },{ 
        "name": "La Justicia",
        "number": 11,
        "descriptionDaily": "El equilibrio es vital para su personalidad y esforzarse por mantenerlo es un enfoque principal. Tu respeto por la autoridad está directamente relacionado con cuán justa y honesta la percibes. No tienes tiempo para mentirosos y desprecias la injusticia en todas partes. Entiendes bien las lecciones del karma, reconociendo cómo la acción o el pensamiento más pequeño puede causar los cambios más grandes. Tu pasión por la justicia a nivel universal es igual solo a tu necesidad de mantener el equilibrio a nivel personal. Es importante que los tipos de personalidad de Justicia se tomen el tiempo para realinearse, rejuvenecer y regocijarse regularmente.",
        "descriptionLove": "En el campo del amor y las relaciones, la carta del tarot de la Justicia representa decisiones y elecciones. ¿Conoces tu valor? Conformarte con menos de lo que mereces, ya sea soltero o comprometido, nunca es una opción.<br><br>A veces, esto significa permanecer soltero incluso cuando ves a todos los demás comprometiéndose o casándose. Otras veces significa, dejar una relación que alguna vez apreciaste. La justicia te insta a ser fiel a ti mismo primero y luego seguir adelante.<br><br>Si está pasando por el final de una relación, podría estar avecinándose una batalla legal. Es difícil decir si las cosas funcionarán (o no) a tu favor. Aún así, la Justicia puede representar lecciones de vida que te ayudarán a elevarte a un plano superior sin importar el resultado.",
        "descriptionCareer": "Esta carta sugiere que cualquier problema de injusticia en su lugar de trabajo pronto se resolverá. Si ha sido honesto y respetuoso con sus compañeros de trabajo, entonces no tiene de qué preocuparse. Sin embargo, si ha estado involucrado en dramas y conflictos, es posible que pronto enfrente repercusiones.<br><br>Tambien puede significar una necesidad de equilibrio entre su carrera profesional y su vida personal. ¿Estás demasiado involucrado en tu carrera y te olvidas de relajarte? ¿Quizás tus amigos o familiares te sienten muy distante ya que pasas mucho tiempo afuera?<br><br>Tómate un tiempo fuera de tu oficina y disfrutalo con tus seres queridos y contigo mismo. El trabajo es importante para ti, ¡pero no lo es todo!",
        "descriptionYesNot": "Quizás",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Verdad • Causa y Efecto • Honestidad • Rendir Cuentas • Karma •<br><br><strong>Planeta: </strong> Venus<br><strong>Letra Hebrea: </strong>  Cheth <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Libra<br><strong>Numerología: </strong>  8",
    },{ 
        "name": "El Colgado",
        "number": 12,
        "descriptionDaily": "Eres una persona que reconoce la importancia del sacrificio y la paciencia. La paciencia es una virtud, permitir el tiempo necesario para ver todos los lados. El sacrificio es un requisito previo para la iluminación. A veces hay un propósito más elevado que nuestro yo inmediato, y eres particularmente bueno para verlo. Cuando te tomas tu tiempo y miras las cosas desde diferentes perspectivas, puedes descubrir tu verdadero camino. Observe atentamente y siempre sabrá cuándo es el momento adecuado para actuar. La personalidad del Colgado se siente más cómoda cuando logra alinear sus principios superiores con sus actitudes mentales y comportamientos físicos.",
        "descriptionLove": "Esta carta simboliza la infelicidad y la rutina en las relaciones de cualquier tipo. Es hora de deshacerte de cualquier conexión tóxica y solo enfocarte en las que te dan paz y alegría.<br><br>Si estas pensando en poner fin a una relación romántica o una amistad, no hay necesidad de apresurarse. Sin embargo, necesitas meditar tu situación.<br><br>¿Existe algo que puedas mejorar? Dale una oportunidad. ¿Has hecho todo lo que puedes hacer? Camina hacia un lugar de aceptación. Este puede ser un momento que representará dejar el pasado y comenzar a tomar un camino mejor.",
        "descriptionCareer": "Hay incertidumbre en el aspecto laboral. Es posible que las cosas no sucedan tan rápido como esperaba con respecto a la promoción y el éxito, y esto te genera preocupación.<br><br>En nuestra vida experimentamos ciclos constantemente. Todo sucede en su debido momento junto al ritmo del universo. Podrias pensar que no avanzas lo suficientemente rapido, pero habrá una razón para esto. Aprovecha las pausas para resolver otros asuntos.<br><br>Dificultades para tomar una decisiones, reconsideraras tus siguientes pasos. El tiempo ayudará a despejar tu mente.",
        "descriptionYesNot": "Quizás",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Observar • Suspenso • Postergación • Soltar • Sacrificar •<br><br><strong>Planeta: </strong> Neptuno<br><strong>Letra Hebrea: </strong>  Lameth <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Libra<br><strong>Numerología: </strong>  12",
    },{ 
        "name": "La Muerte",
        "number": 13,
        "descriptionDaily": "La transformación y la renovación son naturales para usted, no algo que deba evitar o asustar. Reconoces la importancia de dejar ir los elementos de tu vida que ya no son útiles o que te impiden el futuro que estás tratando de crear. Las nuevas oportunidades solo se pueden realizar cuando se despeja el desorden del pasado. Eres especialmente hábil para avanzar cuando llega el momento. Aferrarse al pasado o revolcarse en la pérdida de tiempos pasados solo estancará su crecimiento interior. La personalidad de la Muerte es consciente de que el ciclo constante de muerte y renacimiento es nada menos que la vida misma. Uno no es posible sin el otro.",
        "descriptionLove": "Existen problemas, especialmente si te preguntas si debes quedarte o irte. Pero la carta de La Muerte no tiene que representar una relación actual.<br><br>De hecho, también puede sugerir la necesidad de dejar atrás un amor o dolor pasado que está afectando tu presente. Esto es especialmente cierto para las personas solteras que desean comenzar a salir nuevamente.<br><br>Si su relación es tóxica o usted y su pareja no son compatibles, puede ser hora de aceptar esto y seguir adelante.<br><br>Por otro lado, si realmente crees que has encontrado a tu alma gemela, deberias enterrar el pasado y abrazar este nuevo comienzo para que no este contaminado con los problemas del ayer.",
        "descriptionCareer": "Esta carta aparecerá cuando existe disconformidad con el trabajo y está debatiendo un cambio de carrera. Un trabajo puede brindar estabilidad y los ingresos te hacen sentir seguro, pero si no eres realmente feliz, el esfuerzo no lo vale. Si te aburres y estresas esto afectará tu bienestar espiritual y emocional.<br><br>La Muerte te envia un mensaje. El universo te escucha, es momento de hacer cambios, ¡encuentra la fuerza para hacerlo! El camino puede que sea dificil, pero pronto te darás cuenta que tu decisión fue la mas acertada. ¡Vives en un mundo abundate, siempre hay nuevas y emocionantes oportunidades!",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Transformación • Transición • Ciclos Finales • Inicio •<br><br><strong>Planeta: </strong> Plutón<br><strong>Letra Hebrea: </strong>  Mem <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Escorpio<br><strong>Numerología: </strong>  13 o 4",
    },{ 
        "name": "La Templanza",
        "number": 14,
        "descriptionDaily": "Te esfuerzas por lograr la armonía entre tu ser emocional/espiritual y físico/mental. A veces esto es difícil, pero la disciplina y el autocontrol te enseñan a combinar estos opuestos para crear un todo hermoso. Puede traer las lecciones del pasado al presente de maneras nuevas e innovadoras. La personalidad de Templanza está especialmente en sintonía con los mensajes de lo divino y, en el mejor de los casos, sirven como puentes entre el espíritu y las llanuras terrenales. La vida fluye más suavemente cuando prestas atención a la voz de tu alma y la personalidad de Templanza puede ser especialmente hábil para hacerlo.",
        "descriptionLove": "En el contexto del amor, esta es una carta muy prometedora. La templanza representa la armonía, lo que significa que una relación pacífica y beneficiosa está en el horizonte.<br><br>Si eres soltero, prepárate para conocer a alguien que encajara muy bien en tu vida. Si ya está comprometido, esta unión alcanzará niveles más altos.<br><br>La única excepción aquí es cuando estás involucrado en una relación o matrimonio donde hay muchas peleas. Si este es el caso, deberá adoptar un enfoque muy diferente al que está sucediendo en el presente.<br><br>Cuando las cosas no van bien, tendemos a señalar con el dedo a nuestra pareja y nos quejamos de cada falla y defecto. Esto es inútil ya que no tenemos la capacidad de cambiar a otra persona.<br><br>En lugar de continuar con la batalla, deje a un lado el orgullo y encuentre un punto medio. Fomentar la cooperación con su cónyuge, puede significar la diferencia entre el éxito y el fracaso.<br>",
        "descriptionCareer": "Si has pensado en emprender alguna acción en tu carrera, por ahora deberás tener paciencia. Sabes dónde quieres estar y sabes cómo llegar allí, ¡entonces no te apresures y confía en ti mismo!<br><br>Tienes mucho que ofrecer, si colocas la cantidad correcta de energia todo saldrá bien.<br><br>Pueden crearse problemas en tu lugar de trabajo, con emociones muy altas entre compañeros. No tomes partido y se diplomatico en situaciones como estas. Posees el conocimiento y la comprensión para resolver conflictos, lograrás grandes cosas de manera tranquila y cooperativa.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Paciencia • Balance • Moderación • Tenacidad • Carencia •<br><br><strong>Planeta: </strong> Júpiter<br><strong>Letra Hebrea: </strong>  Nun <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Sagitario<br><strong>Numerología: </strong>  14 y 7",
    },{ 
        "name": "El Diablo",
        "number": 15,
        "descriptionDaily": "Intenso y a veces obsesivo. Te enfocas en algo que sigues haciendo hasta que está hecho. Estás más preocupado por lo que puedes ver y tocar que por las teorías de las hadas. Y no tienes mucha paciencia con aquellos que no quieren ensuciarse cuando sea el momento adecuado. Pero cuando juegas, juegas duro, y a nadie le gusta reírse de lo locos que estamos todos que a ti. Para la personalidad del Diablo, nada es tabú. En lo que a ti concierne, las personas pueden hacer lo que quieran, pero deben hacerlo como si lo dijeran en serio.",
        "descriptionLove": "Las noticias no son buenas. En el amor y las relaciones, El Diablo representa a alguien que es egoísta, abusivo e infiel, tan atrapado en deseos lujuriosos que no importa mucho más.<br><br>La adicción y los problemas de salud mental también pueden estar jugando un papel en la desaparición de la relación.<br><br>Si este es el caso, ambos deberán buscar el tipo de ayuda adecuado para sus luchas individuales. Su relación no está necesariamente condenada, pero sanarla será ahora tu prioridad maxima.<br><br>Tal vez seas soltera(o) y sientas que nunca encontrarás al indicado(a). Tal vez estés comprometido y, por una u otra razón, las cosas no se muevan en la dirección correcta.<br><br>No te apresures en renunciar al amor. En su lugar, considera pasar un tiempo contigo mismo y ten salidas individuales para despejar tu mente.",
        "descriptionCareer": "La carta de El Diablo sugiere insatisfacción con tu trabajo. Quizás estés sintiendo que no tienes pocas oportunidades en este momento. Podrias sentir que está atrapado en un trabajo que poco a poco está socavando la confianza en ti mismo y en tu autoestima.<br><br>¡Afortunadamente tienes una salida y hay tantas opciones diferentes para ti! Ahora es el momento de mirar sus objetivos profesionales y preguntarse cuáles son sus sueños. La vida es demasiado corta para estar en un trabajo que odias y que te consume.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Masoquismo • Adicción • Materialismo • Pasiones • Conflictos •<br><br><strong>Planeta: </strong> Saturno<br><strong>Letra Hebrea: </strong>  Samech <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Capricornio<br><strong>Numerología: </strong>  15 y 6",
    },{
        "name": "La Torre",
        "number": 16,
        "descriptionDaily": "Por mucho que intente mantener el mundo estructurado y estable, siempre parece derrumbarse a su alrededor. Justo cuando pones mortero en el último ladrillo en su lugar, cae un rayo y estás comenzando todo de nuevo. O tal vez eres tú quien está sacudiendo las cosas o actuando como un pararrayos para el loco mundo que te rodea. Hay pocas personas más capaces de resistir la tormenta que las que nacen con la Torre como símbolo. Tu fuerza y fortaleza son enormes, especialmente cuando las cosas se ponen difíciles. La experiencia te ha enseñado que nada dura para siempre, independientemente de lo permanente que parezca. Y de todos modos, a veces los muros se convierten más en una prisión que en un refugio.",
        "descriptionLove": "En las relaciones, La Torre suele predecir el final de una amistad, una ruptura o un divorcio. Cuando obtienes esta carta, las probabilidades de éxito no son buenas.<br><br>Puede estar relacionado con el engaño de algún tipo y el eventual descubrimiento de la verdad. Quizas existan momentos de ira y crisis emocionales. Este definitivamente no será el tipo de final amistoso que la mayoría de la gente espera al cerrar un capítulo.<br><br>Perder a la persona que amas o con quien esperabas construir un futuro puede ser una experiencia dolorosamente humillante. Pero si las cosas no están destinadas a ser, esta será una transición necesaria.<br><br>A veces, la parte más difícil es el cambio inicial. Recuerda, es mucho mejor aceptar la verdad y que vivir una mentira.",
        "descriptionCareer": "Fuertes transiciones se aproximan. Hay una interrupción en tu vida laboral, con un cambio de poder y responsabilidad.<br><br>Es posible que las cosas funcionen a una velocidad lenta en este momento con respecto a tu carrera, existe una resistencia natural por lo no conocido pero los cambios son necesarios y nos ayudan a crecer y tener éxito.<br><br>Esta carta presagia interrupciones y mucho estres en tu vida laboral, incluso es posible quedar o permanecer desempleado. Sin embargo, esta situación te guia a un camino más acorde a ti en tu vida que te permitirá prosperar.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Agitación • Revelaciones • Cambios Repentinos • Evitar Riesgos • Miedos •<br><br><strong>Planeta: </strong> Marte<br><strong>Letra Hebrea: </strong>  Hain <br><strong>Elemento: </strong>  Tierra<br><strong>Signo: </strong>  Capricornio<br><strong>Numerología: </strong>  16",
    },{ 
        "name": "La Estrella",
        "number": 17,
        "descriptionDaily": "Lleno de esperanza, incluso en las situaciones más sombrías, tu optimismo es contagioso. Las personas gravitan hacia tu personalidad compasiva y energizante. Tienes una gran fe en la capacidad del Universo para darnos lo que necesitamos cuando más lo necesitamos. Has visto lo feas que pueden ser las cosas, pero conservas una devoción inquebrantable por la belleza. La personalidad de la Estrella tiene el don del rejuvenecimiento. Eres capaz de reponerte a ti mismo y a los demás con tu gracia, encanto y amor por todas las criaturas del universo.",
        "descriptionLove": "Cuando se trata de amor, La Estrella tiene un mensaje claro: suelta tus cargas.<br><br>Sin saberlo, a menudo dejamos que el miedo y las heridas del pasado guíen nuestras relaciones actuales. Si un amigo o amante nos traiciona, podríamos tener problemas para confiar en otras personas en nuestras vidas. Es posible que deseemos acercarnos a los demás, pero dudamos porque tenemos miedo de sentir el mismo aguijón que sentimos una vez.<br><br>Centrarse en el pasado, ser paranoico y negarse a ser vulnerable solo atrae más de lo que no queremos.<br><br>Si quieres encontrar el amor o hacer crecer una relación actual, practica el arte de dejar ir. Hacerlo traerá tanto armonía como felicidad.",
        "descriptionCareer": "Esta carta auguria suerte, logros, premios e incluso fama. Eres un gran trabajador y has seguido diligentemente tus objetivos desde hace un tiempo. A veces sientes que todo el trabajo que has puesto en tu carrera nunca dará sus frutos. ¡Pero pronto esto cambiará!<br><br>Las oportunidades y el éxito se avecinan y cosecharás las recompensas por las que has estado trabajando tan duro. Mantén tu cabeza en alto y tu mente enfocada en lo que quieres lograr.<br><br>Cuando las cosas buenas se te presenten, ¡debes recordar celebrar tus logros! Tómese el tiempo para recompensarse y tomar un pequeño descanso del trabajo.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Esperanza • Renovación • Inspiración• Tristeza • Distorsión •<br><br><strong>Planeta: </strong> Mercurio<br><strong>Letra Hebrea: </strong>  Peth <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Acuario<br><strong>Numerología: </strong>  17 y 8",
    },{ 
        "name": "La Luna",
        "number": 18,
        "descriptionDaily": "A menudo hay un manto de misterio que te rodea, pero ciertamente no es porque no dejes que los demás sepan lo que piensas. Está dispuesto a hacer las preguntas difíciles y enfrentar directamente sus miedos. Tienes una personalidad tan profunda que hace que la gente quiera saber más. Tus amigos y socios a menudo tienen la sensación de que no estás revelando todo, incluso si hablas mucho. Las personalidades de la Luna, altamente intuitivas y, a menudo, psíquicas, suelen estar interesadas en lo oculto y/u otros temas del lado más oscuro.",
        "descriptionLove": "Esta carta suele significar falta de comunicación. Podrías estar teniendo discusiones más frecuentes con tu pareja debido a esto. Como resultado, su relación sufrirá falta de armonía y también será tensa.<br><br>Tendrás que canalizar gran parte de esa energía negativa en motivación para traer armonía a su relación una vez más. Permite que la luz de La Luna guie tu camino.<br><br>Si eres soltero, alguien que te interesa puede no ser todo lo que parece. Puede que te este engañando intencionalmente o se oculta detras de una mascara. Asegúrate de tomarte el tiempo para conocer verdaderamente a esta persona antes de sumergirte demasiado en una nueva relación con ella.",
        "descriptionCareer": "La Luna a menudo aparecerá cuando estés confundido y ansioso acerca de tu dirección en la vida. Preguntate, ¿eres feliz en tu trabajo en este momento? ¿Te sientes defraudado y desilusionado con tu carrera? ¿Tu corazón no está en lo que haces ahora?<br><br>Esta carta aparecerá a menudo cuando tengas un trabajo bien pagado pero, en última instancia, sin alma. Hay más en la vida que el éxito y las riquezas materiales. Si estás viviendo la vida simplemente por dinero, estás bajo una ilusión. Para ser verdaderamente feliz, debes estar espiritual y emocionalmente realizado.",
        "descriptionYesNot": "No",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Miedo • Ansiedad • Subconsciente • Ilusión • Confusión •<br><br><strong>Asociación: </strong> La Luna<br><strong>Letra Hebrea: </strong>  Tzade <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Piscis<br><strong>Numerología: </strong>  18 y 9",
    },{ 
        "name": "El Sol",
        "number": 19,
        "descriptionDaily": "Eres el tipo de persona que la gente nota. Aunque juguetón y divertido, ciertamente no eres un peso ligero. El Sol es el centro de nuestro universo y, al igual que tú, disfrutas ser el centro del escenario compartiendo tu brillo con el mundo. Te resistes a los límites y requieres el dominio de tu propio destino. De hecho, es difícil para ti doblegarte a la voluntad de otro, y tu disposición alegre rápidamente se vuelve nublada si sientes que alguien está tratando de controlarte. Estás dispuesto a ser vulnerable, pero solo si eso significa que eres libre de ser tu verdadero yo. Decididamente artística e imaginativa, la personalidad del Sol brilla más cuando se le da la oportunidad de crear. Y crearán lo suficiente, grandes, brillantes y calientes para que todos los vean.",
        "descriptionLove": "El Sol denota pasión y alegría en tu vida. Este es el momento de deleitarse con el amor que tú y tu pareja comparten. Si han estado comprometidos durante un largo período de tiempo, es fácil olvidar lo que los unió en primer lugar.<br><br>El Sol dice que es hora de revitalizar la pasión en su relación. Como resultado, la química entre tú y tu pareja será más fuerte que nunca. Tambien sera un buen momento para crear compromisos mas formales.<br><br>Si eres soltero, no te preocupes. Esta carta te insta a encontrar la felicidad y la comodidad al vivir una vida de soltero.<br><br>Tu alegría es tan contagiosa que cuando alguien te ve, también adquiere confianza. ",
        "descriptionCareer": "¡Esta carta simboliza el éxito, momentos muy positivos te esperan! Tus objetivos están a tu alcance en este momento, así que sigue avanzando y pronto alcanzarás tus sueños.<br><br>Habrán nuevas oportunidades en tu camino con respecto al trabajo, así que recuerda mantener tu mente abierta.<br><br>Eres una persona muy solidaria y siempre puedes animar a la gente, y todos los que te rodean realmente lo aprecian. Extiende tu energia y mantente brillando.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Emoción • Éxito • Positividad • Felicidad • Pureza •<br><br><strong>Asociación: </strong> El Sol<br><strong>Letra Hebrea: </strong>  Qoph <br><strong>Elemento: </strong>  Fuego<br><strong>Signo: </strong>  Leo<br><strong>Numerología: </strong>  19 y 1",
    },{ 
        "name": "El Juicio",
        "number": 20,
        "descriptionDaily": "Los conceptos de resurrección y renovación son importantes para su vida. Alcanzando lo divino, encuentras fuerza en la reflexión honesta y la inspiración en los ciclos cambiantes de la vida. Las personas dependen de su integridad y sinceridad. Tienes un aura de sinceridad que pocos pueden igualar. Eres especialmente bueno en el manejo de la interacción de tu conciencia, inconsciente y conciencia superior. A menudo, una parte integral de su comunidad, la personalidad del Juicio se siente especialmente cómoda cuando ayuda a otros a encontrar sus propias fuentes de renovación.",
        "descriptionLove": "Es hora de considerar lo que realmente necesitas en una relación. Si esta relación es importante para ti, deben apreciarse el uno al otro.<br><br>¿Tal vez tú y tu pareja se están juzgando con demasiada dureza? ¿O tal vez sigues recordando viejos tiempos y no puedes valorar tu relación como es en este momento?<br><br>La comunicación es vital, descubra aquello que es mejor para ambos.<br><br>Si eres soltero, no te lances de cualquier manera a la primera relación que se presente. En su lugar, reflexiona y piensa lo que realmente estas buscando en una pareja.<br><br>Esta carta te aconseja no juzgar e intentar salir con alguien fuera de sus preferencias habituales. Tal vez algo hermoso florezca cuando te abras a alguien con una visión o antecedentes completamente diferentes que de otro modo te habrías perdido.",
        "descriptionCareer": "Momento de despertar. ¿Te sientes empujado hacia una carrera diferente? Ese podría ser el propósito de llamarte. O tal vez nuevos cambios te llevan a tomar diferentes caminos. Esto puede ser estresante a veces, pero debes tomar el control para que no sea peor.<br><br>¿Ha sido su lugar de trabajo un lugar de tensión recientemente? Tus acciones están impactando a quienes te rodean. Evaluate y realiza una revisión imparcial de cómo tu comportamiento podría estar afectando a los demás. Luego, observa dónde podrías mejorar.<br><br>Esta carta se trata menos de emitir un juicio severo y más de ser consciente de nuestras acciones y asumir la responsabilidad de ellas.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Renacimiento • Llamado Interno • Absolución • Decisiones Finales • Triunfo •<br><br><strong>Asociación: </strong> Plutón<br><strong>Letra Hebrea: </strong>  Resh <br><strong>Elemento: </strong>  Aire<br><strong>Signo: </strong>  Piscis<br><strong>Numerología: </strong>  20 y 2",
    },{ 
        "name": "El Mundo",
        "number": 21,
        "descriptionDaily": "Tienes una extraña habilidad para fusionar tu yo consciente con tu yo inconsciente. Entiendes que en última instancia son lo mismo y tus pensamientos y creatividad fluyen libremente de uno a otro. Puedes crear un universo en una taza de té. La estructura no te estorba. Solo te desafía a encontrar la libertad dentro de él. Estás entusiasmado y dispuesto a probarlo todo, porque todo vale la pena y es posible. Si puedes pensarlo, sabes que puede ser real. Abrazas la alegría de la vida y animas a todos a unirse a ti. La personalidad del Universo equilibra las contradicciones de la vida como un profesional y es más feliz cuando todos bailan.",
        "descriptionLove": "El Mundo representa la total realización de lo que deseemos hacer y tener. Si el amor y el romance son lo que más deseas, este es tu mejor momento.<br><br>Esta fase de tu vida será una en la que reunirás todas las partes y lograrás una sensación de equilibrio y plenitud.<br><br>Si eres soltero y quieres continuar con ese estilo de vida, no hay nada de malo en esto. Pero si quieres conocer a tu alma gemela, la carta Mundo sugiere que la relación podría ser una que se desarrolle a distancia (al menos al principio).<br><br>Si ya está comprometido, esta podría ser una oportunidad para que ustedes dos trabajen al unísono y creen una hermosa vida juntos. Si ha tenido problemas con la intimidad, las cosas mejorarán pronto.",
        "descriptionCareer": "El Mundo sugiere que has completado tus objetivos laborales, o que estaras cerca de completarlos. Lo más probable es que tengas un trabajo en el que te sientas bien, allí estimulas tu intelecto y espiritualidad. Tal vez ha habido desafíos, pero recientemente los superaste y descubriste qué necesita hacer exactamente para tener éxito.<br><br>Si te sientes realizado y estas teniendo buenos resultados, recuerda tambien celebrarlo y tomarte un momento para descansar.<br><br>Probablemente estés mirando hacia adelante en la vida, hacia la siguiente etapa de tucarrera. Esto es natural y significa que podrás progresar más. Pero recuerda reconocer tus logros.",
        "descriptionYesNot": "Si",
        "descriptionMoney": "",
        "descriptionHealth": "",
        "descriptionNumeric": "• Realización • Viajes • Logros • Suerte • Integración •<br><br><strong>Asociación: </strong> Saturno<br><strong>Letra Hebrea: </strong>  Shin <br><strong>Elemento: </strong>  Agua<br><strong>Signo: </strong>  Escorpio<br><strong>Numerología: </strong>  21 y 3",
    },
]

function dailyResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionDaily + "</p>";

    setTimeout(flipped, 2000);
}

function loveResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionLove + "</p>";

    setTimeout(flipped, 2000);
}

function yesnotResult() {
    var number =  Math.floor(Math.random() * 22);
    var question = document.querySelector('#textarea-question').value
    var name = document.querySelector('#textarea-name').value

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<h1>" + cards[number].descriptionYesNot + "</h1>" + "<br><p><i>'" + question + "'</i></p>" + "<br><p>-" + name + "</p>";

    setTimeout(flipped, 2000);
}

function careerResult() {
    var number =  Math.floor(Math.random() * 22);

    var cardResult = document.querySelector(".daily-card-result2 img");
    var descriptionResult = document.querySelector(".daily-text-content");

    cardResult.src="./images/card" + number + ".png";
    descriptionResult.innerHTML = "<p>" + cards[number].descriptionCareer + "</p>";

    setTimeout(flipped, 2000);
}

function numericResult() {
    let cardResult = document.querySelector(".daily-card-result2 img"),
        descriptionResult = document.querySelector(".daily-text-content"),
        days = String(document.getElementById('dias').value),
        months = String(document.getElementById('meses').value),
        years = String(document.getElementById('years').value),
    
        total = String(days + months + years),
        resTotal = 0;

    total.split('').forEach(c => resTotal += parseInt(c));
    
    if (resTotal < 22) {
        cardResult.src="./images/card" + resTotal + ".png";
        descriptionResult.innerHTML = "<h1>" + resTotal + "</h1>" + "<br><p>" + cards[resTotal].descriptionNumeric + "</p>";
    } else if (resTotal == 22) {
        cardResult.src="./images/card" + 0 + ".png";
        descriptionResult.innerHTML = "<h1>" + 22 + "</h1>" + "<br><p>" + cards[resTotal].descriptionNumeric + "</p>";
    } else {
      let resTotal2 = 0;
      String(resTotal).split('').forEach(c => resTotal2 += parseInt(c));
        if (resTotal2 < 22) {
            cardResult.src="./images/card" + resTotal2 + ".png";
            descriptionResult.innerHTML = "<h1>" + resTotal2 + "</h1>" + "<br><p>" + cards[resTotal2].descriptionNumeric + "</p>";
        } else {
            cardResult.src="./images/card" + 0 + ".png";
            descriptionResult.innerHTML = "<h1>" + 22 + "</h1>" + "<br><p>" + cards[0].descriptionNumeric + "</p>";
        }
    }
    setTimeout(flipped, 2000);
}

//CARD ANIMATION
function flipped() {
    const card = document.querySelector('.card__inner');
    card.classList.toggle('is-flipped');
}

//TAROT NUMERICO

//Months Array
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
var dayOfMonth = range(1, 31);

let groupDays = document.createElement('optgroup');
document.getElementById('dias').appendChild(groupDays);

dayOfMonth.forEach(dayOfMonth => {
let option = document.createElement('option');
groupDays.appendChild(option);

option.innerHTML += dayOfMonth;
});

//Years Array
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
};
var years = range(1922, 2022);
years.sort(function(a, b){return b - a});

let groupYears = document.createElement('optgroup');
document.getElementById('years').appendChild(groupYears);

years.forEach(years => {
let option = document.createElement('option');
groupYears.appendChild(option);

option.innerHTML += years;
});