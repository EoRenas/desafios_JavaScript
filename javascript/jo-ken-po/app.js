
const gameContainer = document.querySelector('.container');
    userResult = document.querySelector('.user_result img');
    cpuResult = document.querySelector('.cpu_result img');
    result = document.querySelector('.result');
    optionImages = document.querySelectorAll('.option_image');

//console.log(gameContainer, userResult, cpuResult, result, optionImages)

//marcar como ativado ao clicar nas imagens
optionImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        image.classList.add('active');
        
        //marcar novamente as imagens para criar o registro numerico
        optionImages.forEach((image2,index2) => {
            // fazer a seleção atual e desmarcar a anterior 
            index !== index2 && image2.classList.remove('active');
        
        })
    })
});
