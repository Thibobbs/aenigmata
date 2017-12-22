export const environment = {
  "ailes": [
    {
      "name": "Aile Denon",
      "salles": [
        {
          "name": "Salle 6",
          "style": "Peinture italienne",
          "oeuvres": [
            {
              "name": "un Portrait de François 1er",
              "artist": "Tiziano Vecellio",
              "date": 1539,
              "anecdote": "Le peintre s’est servi d’une pièce de monnaie comme modèle : drôle de modèle.",
              "indice": "Trouves l'homme qui porte ce médaillon.",
              "img": "francois1er.jpg",
              "extract": "francois1er.png",
              "id": "francois",
              "locked": false,
              "done": false
            },
            {
              "name": "La Joconde",
              "artist": "Léonard De Vinci",
              "date": "Entre 1503 et 1506",
              "anecdote": "La Joconde a perdu ses sourcils et ses cils avec le vieillissement de la peinture.",
              "indice": "Au-dessus de l’épaule d’une femme se trouve un pont avec des arches.",
              "img": "joconde.jpg",
              "extract": "joconde.png",
              "id": "monalisa",
              "locked": true,
              "done": false
            },
            {
              "name": "Les noces de Cana",
              "artist": "Véronèse",
              "date": "Entre 1562 et 1563",
//              "anecdote": "Ce tableau immense a été enlevé aux Vénitiens lors de l’une des bataille de Napoléon en Italie. Le Louvre n’a jamais pu rendre le tableau car il est trop grand pour être transporté.",//
              "anecdote": "Ce tableau immense a été volé en Italie. Le musée n’a jamais pu le rendre : trop grand !",//
              "indice": "Deux chiens attendent sagement au milieu de l’oeuvre malgré la grande fête qui se déroule.",
              "img": "cana.jpg",
              "extract": "cana.png",
              "id": "cana",
              "locked": true,
              "done": false
            }
          ]
        },
        {
          "name": "Salle 77",
          "style": "Peinture française",
          "oeuvres": [
            {
              "name": "La Mort de Sardanapale",
              "artist": "Eugène Delacroix",
              "date": 1827,
//              "anecdote": "Ce chef-d’oeuvre fut refusé par les juges. Très déçu, le peintre cacha son tableau pendant 20 ans avant de le vendre à un collectionneur.",//
              "anecdote": "Le tableau fut refusé par les jusges. Très déçu, le peintre le cacha pendant 20 ans avant de le vendre.",//
              "indice": "Un cheval semble vouloir s’échapper en bas à gauche.",
              "img": "sardanapale.jpg",
              "extract": "sardanapale.png",
              "id": "mort",
              "locked": false,
              "done": false
            },
            {
              "name": "Le Cuirassier blessé quittant le feu ",
              "artist": "Théodore Géricault",
              "date": 1814,
              "anecdote": "Le cheval est déformé : pattes longue et corps petit. Le peintre l’a copié d’un autre tableau.",
              "indice": "Un cheval s’agite et a l’air complètement effray, tout comme son cavalier.",
              "img": "leCuirassier.jpg",
              "extract": "leCuirassier.png",
              "id": "corazziere",
              "locked": true,
              "done": false
            },
            {
              "name": "La Liberté guidant le peuple",
              "artist": "Eugène Delacroix",
              "date": 1830,
//              "anecdote": "Attention cette oeuvre ne représente pas la Révolution Française de 1789 et Louis XVI n’est pas le dernier roi de France ! Louis XVIII, puis son frère Charles X se succèdent au pouvoir. Ce dernier tente de supprimer la liberté de la presse alors que celle-ci est écrite dans la Constitution : le peuple français se soulève donc lors de cette révolte de 1830.",//
              "anecdote": "La femme au centre est le symbole de la liberté.",//
              "indice": "Le drapeau français flotte dans un ciel nuageux.",
              "img": "liberte.jpg",
              "extract": "liberte.png",
              "id": "liberte",
              "locked": true,
              "done": false
            },
            {
              "name": "un Jeune tigre jouant avec sa mère",
              "artist": "Eugène Delacroix",
              "date": "Entre 1830 et 1831",
//              "anecdote": "Pour pouvoir observer des tigres, le peintre allait régulièrement au zoo du Jardin des Plantes. Il passait des heures à les observer.",//
              "anecdote": "Pour observer des tigres, le peintre allait régulièrement au zoo du Jardin des Plantes. ",//
              "indice": "Deux tigres sont couchés l'un près de l'autre sur ce tableau.",
              "img": "tigres.jpg",
              "extract": "tigres.png",
              "id": "tigre",
              "locked": true,
              "done": false
            }
          ]
        },
        {
          "name": "Salle 75",
          "style": "Peinture française",
          "oeuvres": [
            {
              "name": "Une Odalisque",
              "artist": "Jean-Auguste-Dominique Ingres",
              "date": 1814,
//              "anecdote": "Le peintre a fait cette oeuvre sur commande mais n’a jamais été payé  ! Et oui, le client a perdue toute sa fortune entre temps mais le peintre a quand même livré le tableau.",
              "anecdote": "Le peintre n'a jamais été payé car le client a fait faillite !",
              "indice": "Un grand rideau bleu turquoise tombe sur le canapé où une femme est couchée.",
              "img": "odalisque.jpg",
              "extract": "odalisque.png",
              "id": "odalisque",
              "locked": false,
              "done": false
            },
            {
              "name": "le Sacre de l’Empereur Napoléon 1er et couronnement de l’impératrice Joséphine",
              "artist": "Jacques-Louis David",
              "date": "De 1806 à 1807",
//              "anecdote": "Attention il ne faut pas oublier que c’est un 2 décembre que cette cérémonie de 5h a eu lieu. Les gens avaient très froid sans manteau ! Surtout les femmes qui avaient de belles robes fines.",
              "anecdote": "La cérémonie était un 2 décembre, il faisait très froid et interdiction de mettre un manteau !",
              "indice": "La reine est a genoux en bas de marches.",
              "img": "napoleon.jpg",
              "extract": "napoleon.png",
              "id": "napoleon",
              "locked": true,
              "done": false
            },
            {
              "name": "Le Serment des Horaces",
              "artist": "Jacques-Louis David",
              "date": "De 1784 à 1785",
              "anecdote": "As-tu remarqué que le chiffre 3 est présent partout ?  3 soldats, 3 épées et 3 femmes.",
              "indice": "Un homme avec une toge rouge soulève 3 épées face à de jeunes hommes.",
              "img": "horaces.jpg",
              "extract": "horaces.png",
              "id": "serment",
              "locked": true,
              "done": false
            },
            {
              "name": "Madame Vigée Le Brun et sa fille Julie",
              "artist": "Elisabeth Louise Vigée Le Brun",
              "date": "1786",
//              "anecdote": "A l’époque il était très rare d’être une femme  peintre. Cette discipline était réservée aux hommes comme la politique et la médecine.",
              "anecdote": "Il était très rare d’être une femme peintre. C’était réservé aux hommes.",
              "indice": "Trouve la jeune fille assise sur les genoux de sa mère.",
              "img": "elisabethe.jpg",
              "extract": "elisabethe.png",
              "id": "elisabethe",
              "locked": true,
              "done": false
            }
          ]
        }
      ]
    }
  ],
  recognizeConfig: {
    clientID: "47142",
    APIKey: "cd4d03b9ff",
    CLAPIKey: "2b2fe5f70c0a889e6273da5975580925"
  }
};
