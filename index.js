let jogadaatual = 0;

function mudarjogada(id) {
  if (jogadaatual > 9) {
    document.getElementById("resultado").innerHTML = "finalizado";
  }
  if (document.getElementById(id).className != "nes-kirby") {
    return 0;
  }

  jogadaatual++;

  if (jogadaatual > 9) {
    document.getElementById("resultado").innerText = "finalizado";
  }

  if (
    jogadaatual == 1 ||
    jogadaatual == 3 ||
    jogadaatual == 5 ||
    jogadaatual == 7 ||
    jogadaatual == 9
  ) {
    if (document.getElementById(id).className == "nes-kirby") {
      document.getElementById(id).className = "nes-charmander";
    }
  }

  if (
    jogadaatual == 2 ||
    jogadaatual == 4 ||
    jogadaatual == 6 ||
    jogadaatual == 8
  ) {
    if (document.getElementById(id).className == "nes-kirby") {
      document.getElementById(id).className = "nes-squirtle";
    }
  }
}

function recomecar() {
  jogadaatual = 0;
  document.getElementById("1").className = "nes-kirby";
  document.getElementById(2).className = "nes-kirby";
  document.getElementById(3).className = "nes-kirby";
  document.getElementById(4).className = "nes-kirby";
  document.getElementById(5).className = "nes-kirby";
  document.getElementById(6).className = "nes-kirby";
  document.getElementById(7).className = "nes-kirby";
  document.getElementById(8).className = "nes-kirby";
  document.getElementById(9).className = "nes-kirby";
}
