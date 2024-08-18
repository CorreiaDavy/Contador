
 
/* função para diminuir o valor contador*/
function botao_menos(){
    const menuButao = document.querySelector("#botao_decre").addEventListener("click", function(){
        const input_menos = document.getElementById("numero_contador").value--

        
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

function verficacaoinput(){

veriInfut = document.getElementById("numero_contador").value
if( veriInfut == 0){
    botao_mais()
}else{
    botao_menos()
}
}

verficacaoinput()
input_zero()



   
  

       
    




