
function changePage(side){
    model.aktivside = side;
    updateView();
}

function updateView(){
    const side = model.aktivside;
    if(side == 'hjem') main();
    if(side == 'CV') CV();
    if(side == 'prosjekter') prosjekter();
    if(side == 'kontakt') kontakt();

}
