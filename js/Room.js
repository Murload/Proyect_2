class Room{
constructor(roomid){
this.roomid = roomid;
this.pieces = [];


};
getPieces(){
    return this.pieces
}
setPieces( pieces ){
    this.pieces = pieces;
}

MethodInizializePieces(){

let piece1 = new Pieces(1,"Monalisa","/img/monalisa.jpg","La Monalisa, un personaje de la historia del arte universal, fue reinterpretada por Fernando Botero en diferentes ocasiones. La versión que se expone en el #MuseoBotero fue pintada en 1978 y aunque el artista mantuvo detalles de la obra original como la posición de las manos, la mirada y la sonrisa, incorporó nuevos elementos en el fondo como el volcán y las montañas.", 1978);      
let piece2 = new Pieces(2,"Pareja bailando","/img/parejabailando1.jpg","En esta pintura se observa a una voluptuosa pareja bailando en un salón decorado con cintas con los colores de la bandera colombiana y un espejo que insinúa la profundidad del espacio.  El hombre, de frente, mira inexpresivamente al espectador, mientras la mujer está de espaldas. Parece que el tiempo se ha detenido y solo es posible evidenciar el movimiento del baile por la pierna levantada de la mujer y su cabello ondeante. Al fondo se aprecia otra pareja y la pierna de una mujer sugiere la presencia de una más.",1987);
let piece3 = new Pieces(3,"Una Familia","img/lafamilia.jpg","es el retrato de la familia de Joachim Jean Aberbach, productor de música neoyorquino, de origen autríaco, mecenas de Fernando Botero en los años setenta. La familia se compone de dos adultos, los padres, de tres niños, una niña, la mayor y dos niños, uno de los cuales es un bebé, en brazos de su madre.",1970);
let piece4 = new Pieces(4,"Primera Dama","img/primeradama.jpg","El tema de esta obra es el retrato de la primera dama. En el primer plano aparece esta sentada en un caballo. Está encima de él porque así demuestra que es ella la que manda, la que está por encima de nosotros. También, demuestra su superioridad ya que tiene como una especie de palo en la mano.", 1989);
let piece5 = new Pieces(5,"La playa","img/laplaya1.jfif","La pintura tiene un fondo sutil y su foco está en el centro. La pintura se ha fijado en la playa, que se representa por la arena, el mar y el cielo azul. En la arena en el centro de la pintura son tres figuras rotundas. Una mujer está acostada de lado, con un libro al lado de ella.", 1998);

this.pieces.push(piece1);
this.pieces.push(piece2);  
this.pieces.push(piece3); 
this.pieces.push(piece4); 
this.pieces.push(piece5);  



}

};
    