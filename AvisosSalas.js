function startTime() {
     var today=new Date();
     var h=today.getHours();
     var m=today.getMinutes();
     var s=today.getSeconds();
     // add a zero in front of numbers<10
     m=checkTime(m);
     s=checkTime(s);
     document.getElementById('hora').innerHTML=h+":"+m+":"+s;
     t=setTimeout('startTime()',500);
 }
 

 function checkTime(i){
 if (i<10) {
     i="0" + i;
 }
     return i;
 }
 
 var counter = 0;
 var i=0;
        function changeText()
        {
        var quotes = new Array();
        //Aqui é o local onde são inseridos os avisos
        //para inserir novos avisos é necessário utilizar a expressão  quotes[0] = "Lorem Ipsum";
        //onde o valor entre parenteses deve ser o seguinte ao anterior.
          //quotes[0] = "Em virtude da falta de pagamento da equipe de limpeza, sob a responsabilidade da empresa SAFE, essas atividades estão sendo realizadas parcialmente.";//aviso 1
          
          //quotes[0] = "<strong><u>O termostato não deve ser regulado abaixo de 18ºC</u></strong>. Caso isso ocorra, provocará congelamento no evaporador e a não climatização da sala. Ao descongelar, formará poças d'água no chão da sala.<br/><br/> <strong><u>Orientamos a regulação do termostato entre 22 e 24ºC.</u></strong>";//aviso 2
		
		  //quotes[0] = "Em virtude de ter esgotado o saldo previsto no contrato de manutenção de condicionador de ar, esse serviço foi temporariamente suspenso.<br/> A UFRN está trabalhando no sentido de solucionar esse problema, o mais breve possível. "
        
		  //quotes[0] = "Comunicamos que a UFRN retomou o serviço de manutenção de condicionador de ar.<br/> Já há uma equipe à disposição do Setor de Aulas IV realizando essa atividade. "
		   
		  //quotes[0] = "Durante os dois primeiros jogos do Brasil na Copa do Mundo, conforme diretrizes estabelecidas pela UFRN, as atividades acadêmica e administrativa foram alteradas:<br/><br/> 27/06 - Atividades acadêmica e administrativa das 7h às 13h. Suspensão das atividades nos turnos da tarde e da noite. "
		  
		  quotes[0] = "Prezados, por favor, <br/><br/> (a) evitem alimentar-se nos laboratórios de informática. <br/> (b) ao sair da sala, desliguem as lâmpadas. <br/> (c) ao concluir a aula, deixem a lousa limpa."
		  
		var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        // add a zero in front of numbers<10
        m=checkTime(m);
        s=checkTime(s);
        t=setTimeout('startTime()',500);
        
        if (counter > -1) //deixar o valor em qtd de avisos - 1
            {
            counter = 0;
            }
            
            if(quotes[counter] === "" || quotes[counter] === undefined){
                document.getElementById('horaCentral').innerHTML = h+":"+m+":"+s;
                document.getElementById('hora').innerHTML="";
                i = 500;
            }
            else{
                 document.getElementById('textslide').innerHTML = quotes[counter];
                 i = 20000;//altera o tempo de mudança entre as mensagens
            }

       

        setTimeout(function(){changeText()},i); // Aqui muda o tempo em que a mensagem troca
        counter ++;
        }

//teste do fade-in fade out



