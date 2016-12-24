function Add() {

  var nome   = document.getElementById("campo-nome").value;
  var peso   = document.getElementById("campo-peso").value;
  var altura = document.getElementById("campo-altura").value;

  if(nome!="" && peso>0 && altura>0){
    confirmacao = confirm("Tem Certeza que Deseja Adicionar?");

    if(confirmacao){


      var html = "<tr class='paciente'>";
      html+= "<td class='info-nome'>"+nome+"</td>";
      html+="<td class='info-peso'>"+peso+"</td>";
      html+="<td class='info-altura'>"+altura+"</td>";
      html+="<td class='info-imc'></td>";
      html+="</tr>";

      //var table = document.getElementsByTagName("table");

      var table = document.querySelector('table');



      var numOfRows = table.rows.length;
                // Captura a quantidade de colunas da última linha da tabela
                var numOfCols = table.rows[numOfRows-1].cells.length;

                // Insere uma linha no fim da tabela.
                var newRow = table.insertRow(numOfRows);

                  newRow.setAttribute("class", "paciente");
                    newCell = newRow.insertCell(0);
                    // Insere um conteúdo na coluna
                    newCell.innerHTML = nome;
                    newCell.setAttribute("class", "info-nome");

                    newCell = newRow.insertCell(1);
                    // Insere um conteúdo na coluna
                    newCell.innerHTML = peso;
                    newCell.setAttribute("class", "info-peso");

                    newCell = newRow.insertCell(2);
                    // Insere um conteúdo na coluna
                    newCell.innerHTML = altura;
                    newCell.setAttribute("class", "info-altura");

                    newCell = newRow.insertCell(3);
                    // Insere um conteúdo na coluna
                    newCell.innerHTML = "";
                    newCell.setAttribute("class", "info-imc");


      // table.innerHTMl= html;

      console.log(html);

      calculaTodosImcs();


      }
    }else{

    alert("Prencha os Campos com valores Válidoos!");
    }

};

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", Add);
