// Dados
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var datad = data.getDate()
var datam = data.getMonth()
var dataa = data.getFullYear()

// Elementos html
var txt = document.getElementById('txt')
var txt_data = document.getElementById('txt_data')
var imagem = document.getElementById('imagem')

//Logicas

if(hora >= 6 && hora < 12){

    frase = 'Bom dia'
    imagem.src = 'imgs/manha.jpg'

}else if(hora >= 12 && hora < 18){

    frase = 'Boa tarde'
    imagem.src = 'imgs/tarde.jpg'


}else if(hora >= 18 && hora <= 23){

    frase = 'Boa noite'
    imagem.src = 'imgs/noite.jpg'


}else{ 
    frase = 'Boa madrugada'
    imagem.src = 'imgs/noite.jpg'

}

var semana = data.getDay()

switch (semana) {
    case 0:
        semana = 'Domingo'
        break;
    case 1:
        semana = 'segunda-feira'
        break;
    case 2:
        semana = 'terça-feira'
        break;
    case 3:
        semana = 'quarta-feira'
        break;
    case 4:
        semana = 'quinta-feira'
        break;
    case 5:
        semana = 'sexta-feira'
        break;
    case 6:
        semana = 'sábado'
        break;
        
    
        

    default:
        break;
}

txt.innerText = frase+', agora são '+hora+' horas.'
txt_data.innerText = 'Hoje é '+semana+', dia '+datad+', mês '+datam+', ano de '+dataa

 

