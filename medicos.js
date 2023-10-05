const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
      imagemPerfil: 'http://placekitten.com/400/400'
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
      imagemPerfil: 'http://placekitten.com/401/401'
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
      imagemPerfil: 'http://placekitten.com/402/402'
    },
  ];

  const htmlList = document.querySelector('#medicos');

  for (let medico of medicos){

    const imgimagemPerfil = document.createElement('img');
    imgimagemPerfil.src = medico.imagemPerfil
    htmlList.appendChild(imgimagemPerfil);

    let apresentacao = '';

    switch (medico.genero) {
      case 'masculino':
        apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
        break;
      case 'feminino':
        apresentacao = `Dra. ${medico.nome} ${medico.sobrenome}`;
        break;
      case 'nao-binario':
        apresentacao = `Dr(e). ${medico.nome} ${medico.sobrenome}`;
        break;
      default:
        apresentacao =`médico não informou gênero`;

    }
    const p = document.createElement('p');
    p.textContent = `${apresentacao}`;
    htmlList.appendChild(p);
  }
