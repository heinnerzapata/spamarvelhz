import { Component } from '@angular/core';
import { Character } from './../../../models/character';

@Component({
    selector : 'cardlist-component',
    templateUrl : './cardlist.component.html',
    styleUrls: ['./cardlist.component.css']
})

export class CardListComponent{

  public characters : Array<Character> = [

    new Character(1,'Heinner','heinner desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(2,'David','David desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(3,'Yesid','Yesid desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(4,'Juan','Jaun desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),

  ];

  //new Character(1,'Heinner','heinner desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf');




//id:number,name:string,description:string,extension:string,path:string

  //https://gateway.marvel.com/v1/public/characters?nameStartsWith=wolv&limit=50&ts=1&apikey=3ea1cd1673639f6a528e957b1db5939b&hash=cfa3f7936bc2ccd074e8876351bcffa3

  constructor(){

  }

}
