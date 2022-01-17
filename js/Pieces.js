class Pieces{
constructor(piecesid, namepiece,routeimg, description,year){
this.piecesid = piecesid;
this.namepiece = namepiece;
this.routeimg = routeimg;
this.description = description;
this.year = year;
};
//getter and setter id
    getId(){
        return this.piecesid
    }
    setId(piecesid){
        this.piecesid = piecesid;
    }
    //getter and setter namepiece
    getNamepiece(){
        return this.namepiece
    }
    setNamepiece(namepiece){
        this.namepiece = namepiece;
    }
    //getter and setter routeimage
    getRouteimage(){
        return this.routeimg;
    }
    setRouteimage(routeimg){
        this.routeimg = routeimg;
    }
    //getter and setter description
    getDescription(){
        return this.description;
    }
    setDesciption(description){
        return this.description=description;
    }
    //getter and setter year
    getYear(){
        return this.year;
    }
    setYear(year){
        return this.year = year;    
    }
};