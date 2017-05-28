export class SearchService{

    private searchFilter : String;

    getSearchFilter(){
      return this.searchFilter;
    }

    setSearchFilter(filter:String){
      this.searchFilter = filter;
    }

}
