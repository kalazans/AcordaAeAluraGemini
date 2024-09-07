# AcordaAeAluraGemini
<h1>Acorda ae Mano</h1>
<p> uma aplicação para que voce possa dormir tranquilo no busão</p>
<p>Use o googlemaps para pegar  LATITUDE E LONGITUDE do local chave!!! carteira do mano aki ta igual seu madruga, +de 14 meses atrasado e o cartao foi de ralo e a api do google n aceitou kkkkkkkkk
<p>A aplicação permite que voce salve lugares chaves para ser acordado com dois gifs, para saber se poder dormir muito ou não</p>
<p> tem o button que lista os lugares salvos
<p>A intenção é quando voce clickar no local a aplicação faz o rastreio da distancia da sua posição e do local, e quando tiver a 1km de distancia ira tocar uma musica</p>
<p>No js esta funçao é A TRACKING()<br>
porém como a ideia surgiu do nada, não deu para implementar totalmente.
<br>Então fiz um video simulando eu me movendo em direçao ao local chave, e quando chego perto a aplicação dispara</p>
<p>No console.log Mostra os resultados</p>
<br>
<p> Caso queria simular aki vai o passo a passo</p>
<ul>
  <li>Ao abrir a app ja salvo sua localizao nas variaveis => casaLA e casaLA => que sao as latitude e longitude</li>
  <li>Nos input simular coloquem a latitude e longitude do local chave que escolher</li>
  <li>na function move() no js modifiquem as variaveis =>latAgora e lotAgora => para uma latitude e longitude perto do local chave</li>
  <li>dps disso clique em simular se estiver a menos de 100 metros aparecera um alerta</li>
  <li>para modificar a distancia de disparar a app => na function move() no if(distanciDoDestino <100) => mude o 100 para qualquer outro valor</li>
  <li>OBS: a app recebe em KM e utilizo a funçao converKMtoM(kms) para converter para metros. 1km = 1000metros </li>
</ul>
