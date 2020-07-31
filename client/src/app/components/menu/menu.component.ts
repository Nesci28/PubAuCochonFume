import { Component } from '@angular/core';

import { MenuType } from './../../interfaces/menu.enum';
import { Menu } from './../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  _MenuType = MenuType;

  mealType: MenuType = MenuType.VIANDES;

  menu: Menu = {
    [this._MenuType.VIANDES]: {
      title: 'Viandes',
      img: '../../../assets/img/menu/viandes.webp',
      meals: [
        {
          title: 'Poulet fumé barbecue maison',
          text:
            '16,53 : Servi avec frites, légumes marinés maison et sauce barbecue',
        },
        {
          title: 'Côtes levées fumées maison',
          text:
            'Petite/ 17,83 : Grande : 23,92 Servies avec frites, légumes marinés maison et sauce barbecue',
        },
        {
          title: 'Smoked meat maison',
          text:
            'Petit/ 12,61 : Grand : 16,96 Servi avec frites, légumes marinés maison et salade de choux',
        },
        {
          title: 'Combo fumé pick and mix',
          text:
            '26,96 : Choix de 2 viandes servies avec frites, légumes marinés maison et salade de choux (Smoked meat / Poulet / Côtes levées / Saumon)',
        },
        {
          title: 'Contre filet AA',
          text:
            '10oz/ 30,44 : Servi avec frites, champignon grille, sauce aux poivres, moutarde et brandy',
        },
      ],
    },
    [this._MenuType.SANDWICHS]: {
      title: 'Sandwichs',
      img: '../../../assets/img/menu/sandwichs.webp',
      meals: [
        {
          title: 'Trafalgar wrap',
          text: '14,35 : Salade césar, poulet fumé et mayo',
        },
        {
          title: 'Waterloo bridge',
          text:
            '15,22 : Sandwich de style club, bacon, salade de poulet et tomate',
        },
      ],
    },
    [this._MenuType.SALADES]: {
      title: 'Salades',
      img: '../../../assets/img/menu/salades.webp',
      meals: [
        {
          title: 'Salade césar',
          text: '7,83/13,05',
        },
        {
          title: 'Salade césar au poulet fumé',
          text: '9,13/15,22',
        },
        {
          title: 'La roquettière',
          text: '8,05/15,66 : Roquette, artichauts, fromage de chèvre, bacon',
        },
        {
          title: 'Salade au saumon fumé maison',
          text:
            '10,87/18,26 : Salade printanière, basilic et saumon fumé maison',
        },
        {
          title: "L'italiana",
          text:
            'Un seul format/13,00 : Tomates séchées, roquette, mozzarella, prosciutto et parmesan',
        },
      ],
    },
    [this._MenuType.POUTINES]: {
      title: 'Poutines',
      img: '../../../assets/img/menu/poutines.webp',
      meals: [
        {
          title: 'La pouticochonne',
          text: '8,26/13,05/15,66 : Fromage fumé, sauce maison',
        },
        {
          title: 'Poutine tony',
          text: '10,44/14,35/17,40 : Sauce bolognaise québécoise Bolognese',
        },
        {
          title: 'Poutine london fog',
          text: '10,44/14,35/17,40 : Poulet fumé maison',
        },
        {
          title: 'Poutine beefeater',
          text: '10,44/14,35/17,40 : Smoked meat',
        },
        {
          title: 'Poutine bulldog',
          text: '10,44/14,35/17,40 : Côtes levées fumées maison',
        },
        {
          title: 'Poutine queen mary',
          text:
            '11,96/17,40/20,00 : Côtes levées fumées, smoked meat et poulet fumé maison',
        },
      ],
    },
    [this._MenuType.PORCHERIES]: {
      title: 'Porcheries',
      img: '../../../assets/img/menu/porcheries.webp',
      meals: [
        {
          title: 'Smokey babe',
          text: '2 personnes/ 33,92 : Smoked meat, côtes levées et poulet',
        },
        {
          title: 'Miss piggy',
          text:
            '2 personnes/ 31,31 : 8 ailes de poulet, nachos, smoked meat et côtes levées',
        },
        {
          title: 'Mr. porky',
          text:
            '2 personnes/ 35,66 : 8 ailes de poulet, nachos, crevettes tempura, calmars frits et côtes levées',
        },
        {
          title: 'Le titanic',
          text:
            '5 à 6 personnes/ 82,63 : 8 ailes de poulet, nachos maison, smoked meat, côtes levées, deux barbecoa burgers, frites et poulet barbecue',
        },
      ],
    },
    [this._MenuType.POISSONS]: {
      title: 'Poissons',
      img: '../../../assets/img/menu/poissons.webp',
      meals: [
        {
          title: 'Calmars frits maison',
          text: '16,96 : Servis avec salade et mayo lime',
        },
        {
          title: 'Crevettes tempura',
          text: '16,96 : Servies avec salade et mayo lime',
        },
        {
          title: 'Fish and chips maison',
          text:
            '18,26 : Filet de morue frit en panure à la bière, frites et sauce tartare',
        },
        {
          title: 'Tartare duo de saumons',
          text: '22,18 : Saumon frais et saumon fumé',
        },
      ],
    },
    [this._MenuType.PIZZASTHICK]: {
      info: '8po / 10po / 14po / 18po',
      title: 'Pizzas à croûte épaisse',
      img: '../../../assets/img/menu/pizzasthick.webp',
      meals: [
        {
          title: 'Pizza fromage',
          text: '9,57/12,18/20,87/24,79 : Sauce tomate, mozzarella, basilic',
        },
        {
          title: 'Pepperoni et fromage',
          text: '10,87/14,13/24,35/28,70 : Sauce tomate, mozzarella, pepperoni',
        },
        {
          title: 'Végétarienne',
          text:
            '11,74/15,22/25,66/30,44 : Sauce tomate, mozzarella, oignons, piments, champignons',
        },
        {
          title: 'Toute garnie',
          text:
            '12,18/15,66/26,09/31,31 : Sauce tomate, mozzarella, pepperoni, piments, oignons, champignons',
        },
        {
          title: 'Cochon crache-feu',
          text:
            '12,18/15,66/26,09/31,31 : Sauce tomate, mozzarella, effiloché de porc, piment fort, oignons, sauce bbq',
        },
        {
          title: 'La volante',
          text:
            '12,18/15,66/26,09/31,31 : Sauce tomate, mozzarella, poulet fumé, piments, bacon',
        },
        {
          title: 'American pie',
          text:
            '15,22/17,40/26,96/32,18 : Poulet, côtes levées et smoked meat, sauce tomate, mozzarella, pepperoni, piments, champignons et oignons',
        },
      ],
    },
    [this._MenuType.PIZZASTHIN]: {
      title: 'Pizzas à croûte mince',
      img: '../../../assets/img/menu/pizzasthin.webp',
      meals: [
        {
          title: 'Margherita',
          text: '11,96 : Sauce tomate, mozzarella, basilic',
        },
        {
          title: 'Calabrese',
          text: '15,00 : Mozzarella, oignons rouges, thon, salami calabrese',
        },
        {
          title: 'Quattro formaggi',
          text:
            '15,00 : Sauce tomate, mozzarella, gorgonzola, provolone, fromage de chèvre',
        },
        {
          title: 'La bella vita',
          text:
            '16,53 : Sauce tomate, mozzarella, prosciutto, roquette, parmesan',
        },
        {
          title: 'Saumon fumé',
          text:
            '17,40 : Sauce tomate, fromage de chèvre, saumon fumé, roquette',
        },
        {
          title: 'Meditérranéenne',
          text:
            '16,53 : Sauce tomate, olives noires, féta, artichauts, tomates séchées',
        },
      ],
    },
    [this._MenuType.ENTREESSHARED]: {
      title: 'Entrées à partager',
      img: '../../../assets/img/menu/entreesshared.webp',
      meals: [
        {
          title: 'Maxicochonne',
          text:
            '20 : Frites à la bière, pétales d’oignons et bâtonnets de fromage',
        },
        {
          title: 'Maxicochonne ¨supercharged¨',
          text:
            '26,09 : Frites à la bière, pétales d’oignons, bâtonnets de fromage et 12 ailes de poulet',
        },
        {
          title: 'Cochonne italienne',
          text:
            '28,70 : Salami piquant, prosciutto, saumon fumé, gorgonzola, mozzarella, olives, tomates séchées et pain focaccia maison',
        },
      ],
    },
    [this._MenuType.ENTREES]: {
      title: 'Entrées à partager',
      img: '../../../assets/img/menu/entrees.webp',
      meals: [
        {
          title: 'Nachos maison',
          text:
            'Petit/ 12,18 - Grand/ 15,66 : Guacamole, féta, salsa maison, crème sûre, haricots noirs',
        },
        {
          title: 'Ailes de poulet',
          text: '6/ 7,83 - 12/ 15,00 - 18/ 21,74 : Sauce barbecue maison',
        },
        {
          title: "Rondelles d'oignons",
          text: '7,39',
        },
        {
          title: "Pétals d'oignons épicés",
          text: '7,39',
        },
        {
          title: 'Bâtonnets de fromage',
          text: '7,39',
        },
        {
          title: 'Croustilles',
          text: '4,50',
        },
        {
          title: 'Frites',
          text: '4,35',
        },
        {
          title: 'Frites à la bière',
          text: '7,39',
        },
        {
          title: 'Crudités',
          text: '5,00 : Servies avec une mayo à la ciboulette',
        },
        {
          title: 'Jalapeños frits',
          text: '7,83 : Farçis de crème sûre',
        },
        {
          title: 'Calmars frits',
          text: '10,87 : Servis avec une mayo lime',
        },
        {
          title: 'Crevettes tempura',
          text: '10,87 : Servies avec une mayo lime',
        },
      ],
    },
    [this._MenuType.BURGERS]: {
      info: 'Servis avec frites, légumes marinés et salade de choux maison',
      title: 'Burgers',
      img: '../../../assets/img/menu/burgers.webp',
      meals: [
        {
          title: 'Barbecoa burger',
          text: '16,09 : 7oz de viande, bacon, tomate, provolone et laitue',
        },
        {
          title: "Burger d'effiloché",
          text:
            '14,79 : Boeuf et porc effilochés, fromage féta ou provolone, laitue et tomate',
        },
        {
          title: 'Portobello road',
          text:
            '14,79 : Champignon portobello, fromage de chèvre, tomate et laitue',
        },
        {
          title: 'Blue burger',
          text: '16,09 : 7oz de viande, fromage bleu, bacon, tomate et laitue',
        },
        {
          title: 'Burger au saumon',
          text:
            '16,53 : Filet de saumon légèrement fumé, mayo lime, basilic, laitue et tomate',
        },
        {
          title: 'Cochon sauvage',
          text:
            '19,57 : Sanglier, cheddar âgé, oignons caramelisés et marmelade de bacon',
        },
      ],
    },
    [this._MenuType.BABY]: {
      info: "Dessert du jour et breuvage inclus Valide jusqu'à 12 ans",
      title: 'Bébé cochon',
      img: '../../../assets/img/menu/baby.webp',
      meals: [
        {
          title: 'Bébé burgers',
          text:
            '7,83 : Boeuf, bacon, provolone et laitue servis avec frites et crudités',
        },
        {
          title: 'Mini spaghetti',
          text: '7,83 : Sauce bolognaise',
        },
        {
          title: 'Croquettes de poulet',
          text: '10,00 : Servies avec frites et crudités',
        },
      ],
    },
  };
}
