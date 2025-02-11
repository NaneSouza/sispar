import Logo from "../../assets/Tela Login/logo-ws.png";
function Loggin() {
  return (
    <main>
      <section>
        <p>Aqui ficará o background</p>
      </section>

      <section>
        <img src={Logo} alt="Logo da Wilson Sons" />

        <h1>Boas vindas ao Novo Portal SISPAR</h1>

        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form action="">
          <input type="email" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />

          <a href="">Esqueci minha senha</a>
        </form>

        <div>
          <button>Entrar</button>
          <button>Criar Conta</button>
        </div>
      </section>
    </main>
  );
}

export default Loggin;
