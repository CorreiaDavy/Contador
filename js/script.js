
 
/* função para diminuir o valor contador  até chegar no valor 0*/
function botao_menos(){
    const menuButao = document.querySelector("#botao_decre").addEventListener("click", function(){

        const input_menos = document.getElementById("numero_contador")
        if(input_menos.value !=0){
            
        const input_meno = document.getElementById("numero_contador").value--
        
        }

        
    })
}


/* função para aumentar o valor contador*/
function botao_mais(){
    const menuBotao_mais = document.querySelector("#bot_menos_decre").addEventListener("click", function(){
      const input_mais = document.getElementById("numero_contador").value++
      

    })
}

/* Botão de reiniciar contagem*/
function input_zero(){

    const botao_zerar = document.querySelector("#botaozerar").addEventListener("click", function(){

        const valorInput = document.getElementById("numero_contador")
        valorInput.value = 0

    })
    
    

    
}


botao_menos()
botao_mais()
input_zero()



   
  

       
    




