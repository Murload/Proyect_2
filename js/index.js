let room = new Room();
room.MethodInizializePieces();

const artPieces = room.getPieces();

//titles of pieces
document.querySelector('.title_piece1').textContent = artPieces[0].getNamepiece();
document.querySelector('.title_piece2').textContent = artPieces[1].getNamepiece();
document.querySelector('.title_piece3').textContent = artPieces[2].getNamepiece();
document.querySelector('.title_piece4').textContent = artPieces[3].getNamepiece();
document.querySelector('.title_piece5').textContent = artPieces[4].getNamepiece();

//img of pieces 
document.querySelector('.monalisa_route').src = artPieces[0].getRouteimage();
document.querySelector('.couple_route').src = artPieces[1].getRouteimage();
document.querySelector('.family_route').src = artPieces[2].getRouteimage();
document.querySelector('.firstlady').src = artPieces[3].getRouteimage();
document.querySelector('.thebeach').src = artPieces[4].getRouteimage();


//description
function showInfoByClickButton(){
    alert( artPieces[0].getDescription() )
};

function showInfoDoubleClick(){
    document.querySelector('.pdbclick').innerHTML = artPieces[1].getDescription();
}

function mouseover(){
    document.querySelector('.overclick').innerHTML = artPieces[2].getDescription();

}
function onmouseupa(){
    document.querySelector('.plady').innerHTML = artPieces[3].getDescription();
}

function onmousedown1(){
    alert( artPieces[4].getDescription() )

}

