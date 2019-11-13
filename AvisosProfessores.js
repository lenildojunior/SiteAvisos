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
		var imagens = new Array();
        //Aqui é o local onde são inseridos os avisos
        //para inserir novos avisos é necessário utilizar a expressão  quotes[0] = "Lorem Ipsum";
        //onde o valor entre parenteses deve ser o seguinte ao anterior.
          //quotes[0] = "Em virtude da falta de pagamento da equipe de limpeza, sob a responsabilidade da empresa SAFE, essas atividades estão sendo realizadas parcialmente.";//aviso 1
          //quotes[1] = "A Mostra de Profissões ocorrerá no período de 23 a 25/05/2018.<br/>  As salas 4A2 e 4A3 serão utilizadas nesse evento, nos horários T56 e N1234, nos três dias.<br/> As turmas de graduação e pós graduação alocadas nessas salas, no período e horário supracitados,<br/> serão transferidas para outras salas, que serão divulgadas posteriormente.<br/> ";//aviso 1
	      //quotes[2] = "Comunicamos que a UFRN retomou o serviço de manutenção de condicionador de ar.<br/> Já há uma equipe à disposição do Setor de Aulas IV realizando essa atividade. "
          quotes[0] = "Formas de contato com a administração local do Setor IV:<br/> a. Para agendamentos de sala:<br/> setor4agendamento@ct.ufrn.br;<br/><br/> b. Para assuntos diversos:<br/> Presencialmente ou por email (setor4@ct.ufrn.br).";//aviso 2
		  imagens[0] = new Image();
		  imagens[0].src = 'ImagensAvisos/download.png'
		  //quotes[1] = "Durante os dois primeiros jogos do Brasil na Copa do Mundo, conforme diretrizes estabelecidas pela UFRN, as atividades acadêmica e administrativa foram alteradas:<br/><br/> 27/06 - Atividades acadêmica e administrativa das 7h às 13h. Suspensão das atividades nos turnos da tarde e da noite. "
		  
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        // add a zero in front of numbers<10
        m=checkTime(m);
        s=checkTime(s);
        t=setTimeout('startTime()',500);
        
        if (counter > 1) //deixar o valor em (qtd de avisos - 1)
            {
            counter = 0;
            }
            
            if(quotes[counter] === "" || quotes[counter] === undefined){
                document.getElementById('horaCentral').innerHTML = h+":"+m+":"+s;
                document.getElementById('hora').innerHTML="";
                i = 500;
            }
            else{
				if(imagens[counter] === "" || imagens[counter] === undefined){ //verifica se a posição nao possui uma imagem atribuida
					document.getElementById('img').innerHTML = "";
				}
				else{//caso contrario mostra a imagem
					document.getElementById('img').innerHTML = "<img src='"+imagens[counter].src+"'/>";
				}
				
				 document.getElementById('textslide').innerHTML = quotes[counter];
                 i = 5000;//altera o tempo de mudança entre as mensagens
            }

       

        setTimeout(function(){changeText()},i); // Aqui muda o tempo em que a mensagem troca
        counter ++;
        }

//teste do fade-in fade out



