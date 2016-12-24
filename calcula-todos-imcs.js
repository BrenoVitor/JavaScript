var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click",calculaTodosImcs);
function calculaTodosImcs(){

    var trsPacientes = document.getElementsByClassName("paciente");

    precorreArray(trsPacientes , function(paciente){

        //código que monta paciente omitido

        var tdNome = paciente.getElementsByClassName("info-nome")[0];
        var tdPeso = paciente.getElementsByClassName("info-peso")[0];
        var tdAltura = paciente.getElementsByClassName("info-altura")[0];

        var pacienteAtual = {
            nome : tdNome.textContent,
            peso : tdPeso.textContent,
            altura : tdAltura.textContent,
            pegaImc: function() {

                if(this.altura != 0){
                    var imc = this.peso / (this.altura * this.altura);
                    return imc;
                } else{

                    console("Não posso dividir por zero!");
                }
            }
        };

        var imc = pacienteAtual.pegaImc();

        var tdImc = paciente.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc.toFixed(2);

        console.log(imc);
    });
}
