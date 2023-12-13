function obterDadosDoFormulario() {
  const marcaInput = document.querySelector("#marca");
  const modeloInput = document.querySelector("#modelo");
  const anoInput = document.querySelector("#ano");

  const dadosVeiculo = {
    marca: marcaInput.value,
    modelo: modeloInput.value,
    ano: anoInput.value,
  };

  return dadosVeiculo;
}

function salvarVeiculo() {
  const veiculo = obterDadosDoFormulario();
  const valido = validarCamposFormulario();

  if (valido) {
    salvarDadosLocalStorage(veiculo);
    limparCampos();
    console.log("Veículo salvo com sucesso!");
    window.location.href = "./veiculos.html";
  } else {
    console.log("Preencha todos os campos");
    alert("Preencha todos os campos");
  }
}

function validarCamposFormulario() {
  const veiculo = obterDadosDoFormulario();

  if (veiculo.marca !== "" && veiculo.modelo !== "" && veiculo.ano !== "") {
    return true;
  } else {
    return false;
  }
}

function obtemDadosLocalStorage() {
  const veiculos = localStorage.getItem("veiculos");
  return JSON.parse(veiculos) || [];
}

function salvarDadosLocalStorage(veiculo) {
  try {
    const veiculos = obtemDadosLocalStorage();
    veiculos.push(veiculo);

    const veiculosLS = JSON.stringify(veiculos);
    localStorage.setItem("veiculos", veiculosLS);
    console.log("Dados salvos no Local Storage:", veiculo);
  } catch (error) {
    console.error("Erro ao salvar no Local Storage:", error);
  }
}

function limparCampos() {
  const marcaInput = document.querySelector("#marca");
  const modeloInput = document.querySelector("#modelo");
  const anoInput = document.querySelector("#ano");

  marcaInput.value = "";
  modeloInput.value = "";
  anoInput.value = "";
}
