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
 
        function changeText(){
			var quotes = new Array();
			var imagens = new Array();
			//Aqui é o local onde são inseridos os avisos
			//para inserir novos avisos é necessário utilizar a expressão  quotes[0] = "Lorem Ipsum";
			//onde o valor entre parenteses deve ser o seguinte ao anterior.
			quotes[0] = "Formas de contato com a administração local do Setor IV:<br/> a. Para agendamentos de sala:<br/> setor4agendamento@ct.ufrn.br;<br/><br/> b. Para assuntos diversos:<br/> Presencialmente ou por email (setor4@ct.ufrn.br).";//aviso 2
			imagens[0] = new Image();
			imagens[0].src = 'ImagensAvisos/download.png'
			imagens[1] = new Image();
			imagens[1].src = 'ImagensAvisos/download.png'
		  
			var today=new Date();
			var h=today.getHours();
			var m=today.getMinutes();
			var s=today.getSeconds();
			// add a zero in front of numbers<10
			m=checkTime(m);
			s=checkTime(s);
			t=setTimeout('startTime()',500);
        
			if (counter > (Math.max(quotes.length,imagens.length) - 1)){ // Usa o vetor de maior tamanho para setar  o reinicio das mensagens
				counter = 0;
			}
				//Verifica se existe mensagem ou imagem para uma dada posição nos arrays
			if(quotes[counter] === "" || quotes[counter] === undefined){
				if(imagens[counter] === "" || imagens[counter] === undefined){
					document.getElementById('horaCentral').innerHTML = h+":"+m+":"+s;
					document.getElementById('hora').innerHTML="";
					i = 500;
				}
				else{
					document.getElementById('textslide').innerHTML = "";
					document.getElementById('img').innerHTML = "<img class='t' src='"+imagens[counter].src+"'/>";
					i = 5000;
				}
                
            }
            else{
				if(imagens[counter] === "" || imagens[counter] === undefined){ //verifica se a posição nao possui uma imagem atribuida
					document.getElementById('img').innerHTML = "";
				}
				else{//caso contrario mostra a imagem
					document.getElementById('img').innerHTML = "<img class='t' src='"+imagens[counter].src+"'/>";
				}
				
				 document.getElementById('textslide').innerHTML = quotes[counter];
                 i = 5000;//altera o tempo de mudança entre as mensagens
            }

       

			setTimeout(function(){changeText()},i); // Aqui muda o tempo em que a mensagem troca
			counter ++;
        }




