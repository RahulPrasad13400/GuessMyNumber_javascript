var random = Math.trunc(Math.random()*20)+1
console.log(random)
let score =20
let highscore =0 

document.querySelector('.buttonCheck').addEventListener('click',function(){
    
    
    var guess = Number(document.querySelector('.guess').value) 
    if(!guess){
        document.querySelector('.message').textContent = 'No number Entered'
    }
    else if(random === guess && score>0){
            document.querySelector('.message').textContent = 'correct answer'
            document.querySelector('#questionMark').textContent = random
            document.body.style.background='green'
            if(highscore<score){
                highscore = score
                document.querySelector('.highscore').textContent = score
            }
            

    }
    else if(random<guess && score > 0){
        document.querySelector('.message').textContent = 'Too High'
        document.body.style.background='red'
        score--
        document.querySelector('.score').textContent = score
    }
    else if(random > guess && score>0){
        document.querySelector('.message').textContent = 'Too Low'
        document.body.style.background='pink'
        score--
        document.querySelector('.score').textContent = score
    }
    else if(score === 0){
        document.querySelector('.message').textContent = 'you Lost The Game'
        document.querySelector('.guessHeading').textContent = 'You Are a Looser'
        document.querySelector('#questionMark').textContent = 'Looser'

    }
    
   
   
})


document.querySelector('.again').addEventListener('click',function(){
    random = Math.trunc(Math.random()*20)+1
    console.log(random)
    score = 20
    document.querySelector('.score').textContent = score
    document.body.style.backgroundColor = 'black'
    document.querySelector('.message').textContent= 'No Number Entered'
    document.querySelector('#questionMark').textContent = '?'
    document.querySelector('.guess').value = ' '

})
