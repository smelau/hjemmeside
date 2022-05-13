

function main() {
html = `
<div class="page">

<div class="header">
    <h1>Velkommen</h1>
</div>

<div class="menu"> 
    <div id="meny"> 
    <button onclick="changePage('hjem')" class="buttonMenu"> Hjem</button> <button onclick="changePage('CV')" class="buttonMenu"> CV</button> <button onclick="changePage('prosjekter')" class="buttonMenu"> Portfolio</button> <button onclick="changePage('kontakt')" class="buttonMenu"> Kontakt</button> </div> 

</div>
    <div class="mainContent">

      <h3 id="littOM">Litt om meg</h3>
        <p> Jeg heter Silje, er 32 år og kommer fra Larvik.<br> Etter å ha jobbet flere år som lærer i barneskolen hadde jeg lyst til å prøve noe nytt og gjøre et karriereskifte. Jeg startet derfor på Get Academy i januar 2022. Dett er en intensiv utdanning for å bli utvikler. Her har jeg til nå lært mest om html, CSS og Javascript, og skal nå sette fart på C#
        <br>
        <br>
        Læringskurven er bratt og jeg syns det er veldig moro å hele tiden kunne lære meg noe nytt. 
        </p>
</div>

<div class="footer">
  <div id="bunnlinje">&copy; <div class="logo"> < />Silje Melau </div> </div>
</div>
    </div>
`
appDiv.innerHTML = html;

}

function CV() {
    html = `${navigation()}`

html += `
    <div class="header" ><h1>${model.mainTitle}</h1></div><br> 
    
    
     <div class="utdanning"> 
     <b>Navn:</b> ${model.mittNavn}<br>
     <b>Adresse:</b> ${model.adresse}<br>
     <b>Telefonnummer:</b> ${model.telefon}<br>
     <b>E-post:</b>  ${model.epost}<br>
     <b>Fødselsdato: </b> ${model.fødselsdato}<br>
     <br><hr>
     <h3>${model.utdanningTitle}</h3> <br>

     
    `

for (let i = 0; i < model.utdanning.length; i++) {
    html += `
   
   
         <b>Skole:</b> ${model.utdanning[i].skole} <br>
         <b>År:</b> ${model.utdanning[i].når}<br>
         <b>Navn på studie:</b> ${model.utdanning[i].navn}<br> 
         <b>Studiepoeng: </b>${model.utdanning[i].studiepoeng}<br>
        <hr>
    `   
}

html += `
<br>
    <h3>${model.arbeidserfaringTitle}</h3><br>
`
for (let i = 0; i < model.arbeidserfaring.length; i++) {
    html += `
        <b>Arbeidssted:</b> ${model.arbeidserfaring[i].arbeidssted} <br>
         <b>År:</b> ${model.arbeidserfaring[i].når}<br>
         <b>Rolle:</b> ${model.arbeidserfaring[i].rolle}<br> 
         <hr>
    `
    
}
    
        

html += `</div> 
<div class="footer">
<div id="bunnlinje">&copy; <div class="logo"> < />Silje Melau</div> </div>
</div>
    </div>
`
appDiv.innerHTML = html;  


}

function navigation() {
    return `<div class="page">

    <div class="header">
        <h2></h2>
    </div>
    
    <div class="menu"> 
        <div id="meny"> <button onclick="changePage('hjem')" class="buttonMenu">Hjem</button> <button onclick="changePage('CV')" class="buttonMenu"> CV</button> <button onclick="changePage('prosjekter')" class="buttonMenu"> Portfolio</button> <button  onclick="changePage('kontakt')" class="buttonMenu"> Kontakt</button> </div> 
    
    </div>
        <div class="mainContent">

    </div>
    
    <div class="footer">
    <div id="bunnlinje">&copy; <div class="logo"> < />Silje Melau</div> </div>
    </div>
  `    
};

function prosjekter() {
    html = `${navigation()}`

    html += `
    <div class="header" ><h1>Portfolio</h1></div><br> 

    <div class="mainContent">

    <h3 id="Prosjekter">Mine prosjekter</h3>
      <p> Her vil jeg etter hvert legge ut mine prosjekter som blir ferdige.</p><hr>
      <h4>Hoderegning</h4>
      <div>Et av de første prosjektene mine er en side der man kan øve seg på hoderegning. Denne lagde jeg da jeg gikk på modul 1. <br>
      Se link her: <a href="https://smelau.github.io/hoderegning/index.html">Link</a>
      </div><hr>


    
    
</div>`
    appDiv.innerHTML = html;  
    
}

function kontakt() {
    html = `${navigation()}`

    html += `
    <div class="header" ><h1>Kontakt</h1></div><br> 

    <div class="mainContent">

    <h3 class="kontaktInfo">Kontaktinfo</h3>
    <b>Navn:</b> ${model.mittNavn}<br>
     <b>Adresse:</b> ${model.adresse}<br>
     <b>Telefonnummer:</b> ${model.telefon}<br>
     <b>E-post:</b> <a href = "mailto: melau.silje@gmail.com">melau.silje@gmail.com</a><br>
      
</div>
    `

    appDiv.innerHTML = html;  
    
}



