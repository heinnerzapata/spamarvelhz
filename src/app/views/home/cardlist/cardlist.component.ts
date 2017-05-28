import { Component , Input , OnChanges , SimpleChanges} from '@angular/core';
import { Character } from './../../../models/character';
import { MarvelApiService } from './../../../services/marvelapi.service';
import { SearchService } from './../../../services/search.service';

@Component({
    selector : 'cardlist-component',
    templateUrl : './cardlist.component.html',
    styleUrls: ['./cardlist.component.css'],
    providers:[MarvelApiService , SearchService]
})

export class CardListComponent{

  @Input()
  searchFilter:String;

  constructor(private marvelApiService: MarvelApiService) {

    this.consultar(this.searchFilter);

  }



  public characters:Array<Character>;

  consultar(searchFilter) {
    
    this.marvelApiService.getCharacters(searchFilter).subscribe(
      (data) => this.characters = data.data.results
    );
  }

  ngOnChanges(changes: SimpleChanges) {

    this.consultar(this.searchFilter);

  }

  /*
  public characters : Array<Character> = [

    new Character(1,'Heinner','heinner desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(2,'David','David desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(3,'Yesid','Yesid desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),
    new Character(4,'Juan','Jaun desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf'),

  ];

  */

  //new Character(1,'Heinner','heinner desc','jpg','http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf');




//id:number,name:string,description:string,extension:string,path:string

  //https://gateway.marvel.com/v1/public/characters?nameStartsWith=wolv&limit=50&ts=1&apikey=3ea1cd1673639f6a528e957b1db5939b&hash=cfa3f7936bc2ccd074e8876351bcffa3


}
