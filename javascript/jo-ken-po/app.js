//inclusão dos elementos

const gameContainer = document.querySelector('.container');
    userResult = document.querySelector('.user_result img');
    cpuResult = document.querySelector('.cpu_result img');
    result = document.querySelector('.result');
    optionImages = document.querySelectorAll('.option_image');

//console.log(gameContainer, userResult, cpuResult, result, optionImages)

//marcar como ativado ao clicar nas imagens
optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');
        
        //marcar novamente as imagens para criar o registro numerico
        optionImages.forEach((image2, index2) => {
            // fazer a seleção atual e desmarcar a anterior 
            index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add('start');




        let time = setTimeout (() => {
            gameContainer.classList.remove('start');

//selecionar o icone e gerar o seu registro
let imageSrc = e.target.querySelector('img').src;
//ao clicar na imagem pegar o registro e mudar para o icone selecionado
        userResult.src = imageSrc;

//gerar numero aleatorio para a CPU
        let randomNumber = Math.floor(Math.random() * 3)
//criando uma lista para a CPU selecionar a imagem
        let cpuImages = ['images/pedra.png', 'images/papel.png', 'images/tesoura.png' ]
        cpuResult.src = cpuImages[randomNumber];

//setando as opções para contagem da vitoria para CPU (R para rock, P pra paper, S scissors) usei os nomes em inglês pois temos um conmflito na letra P, que poderia confundir
        let cpuValue = ['R', 'P', "S"][randomNumber]
//setando as opções para contagem da vitoria para o usuario
        let userValue = ['R', 'P', "S"][index]
//criando os objetos para todos os resultados possivel
        let outComes = {
            RR: 'Empatou',
            RP: 'Você Perdeu!!',
            RS: 'Você Ganhou!!',
            PP: 'Empatou',
            PR: 'Você Ganhou!!',
            PS: 'Você Perdeu!!',
            SS: 'Empatou',
            SP: 'Você Ganhou!!',
            SR: 'Você Perdeu!!',

        };

        let outComeValue = outComes[userValue + cpuValue];

//resultados
        result.textContent = userValue === cpuValue ? 'Empatou' : `${outComeValue}`;
        }, 1500)


    });
});
