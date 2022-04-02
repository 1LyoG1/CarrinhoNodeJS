const loginDo = async () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert('E-mail e senha são obrigatorios!');
  } else {
    const JSONUser = {
      email: email,
      senha: senha,
    };

    await fetch('http://localhost:3000/userLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(JSONUser),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Logado com sucesso!');
          window.location.href = 'http://127.0.0.1:5500/homeScreen/index.html';
        } else {
          alert('Não foi possivel realizar o login!');
        }
      })
      .catch((error) => {
        alert('Não foi possivel realizar o login!' + error);
      });
  }
};
