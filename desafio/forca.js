class Forca {
  
  constructor (palavraCerta){
    this.palavraCerta = palavraCerta;
    this.palavra = new Array(palavraCerta.length).fill ("_") ; 
    this.letrasChutadas = [];
    this.vida = 6;
    this.acertouOChute = false;
    this.acertouPalavra = false;
    this.estado = "aguardando chute";
  }

  chutar(letra) {
    letra = letra[0].toLowerCase();
    this.acertouOChute = false;
    if (this.letrasChutadas.includes(letra)) {
      return;
    }else 
      this.letrasChutadas.push(letra); 
    for (let index = 0; index < this.palavraCerta.length; index++) {
        if (letra == this.palavraCerta[index]){
          this.palavra[index] = letra;
          this.acertouOChute =  true;
        }
      }
    if (!this.acertouOChute){
      this.vida -=1;
      if(this.vida == 0){
        this.estado = "perdeu";
      } 
    }
    if(!this.palavra.includes("_")){
      this.estado = "ganhou";
    }
   }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vida, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
