import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Check from "../../assets/Solicitacao/check.png"
import Cancelar from "../../assets/Solicitacao/x.png"
function Solicitacao() {
  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor da casinha" />
          <img src={Seta} alt="Vetor da setinha" />
          <p> Reembolsos</p>
          <img src={Seta} alt="Vetor da setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="text" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor=""> Descrição / Motivo do Reembolso </label>
                <textarea name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.tipoDeDespesas}>
                <label htmlFor=""> Tipo de Despesa </label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor=""> Centro de Custo </label>

                <select name="" id="">
                  <option value=""> Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label> Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label> Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label> PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor=""> Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor=""> Dist / Km</label>
                <input type="text" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label> Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label> Val. Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label> Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button className={styles.botaoSalvar}> + Salvar</button>
                <button className={styles.botaoDeletar}>
                  {" "}
                  <img src={Deletar} alt="" />
                </button>
              </div>
            </div>
          </form>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <img src={Lixeira} alt="ícone da lixeira" />
                </td>
                <td>Samuel Prata</td>
                <td>VnW</td>
                <td>10</td>
                <td>12/08/23</td>
                <td>
                  {" "}
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td>Viagem Admin.</td>
                <td>1100110101 - FIN CONTABILIDADE </td>
                <td>004</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>BRL</td>
                <td>328</td>
                <td>20</td>
                <td>300</td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={Lixeira} alt="ícone da lixeira" />
                </td>
                <td>Karinne</td>
                <td>VnW</td>
                <td>5</td>
                <td>10/03/24</td>
                <td>
                  {" "}
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td>Combustível</td>
                <td>1100110101 - FIN CONTABILIDADE </td>
                <td>003</td>
                <td>4</td>
                <td>3</td>
                <td>1</td>
                <td>BRL</td>
                <td>456</td>
                <td>30</td>
                <td>200</td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={Lixeira} alt="ícone da lixeira" />
                </td>
                <td>João</td>
                <td>VnW</td>
                <td>12</td>
                <td>01/04/23</td>
                <td>
                  {" "}
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td>Viagem Admin.</td>
                <td>1100110101 - FIN CONTABILIDADE </td>
                <td>002</td>
                <td>5</td>
                <td>3</td>
                <td>8</td>
                <td>BRL</td>
                <td>378</td>
                <td>50</td>
                <td>100</td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <img src={Lixeira} alt="ícone da lixeira" />
                </td>
                <td>Joy</td>
                <td>VnW</td>
                <td>6</td>
                <td>14/02/22</td>
                <td>
                  {" "}
                  <img src={Motivo} alt="ícone do motivo" />
                </td>
                <td>Eventos de repre</td>
                <td>1100110101 - FIN CONTABILIDADE </td>
                <td>001</td>
                <td>3</td>
                <td>1</td>
                <td>2</td>
                <td>BRL</td>
                <td>289</td>
                <td>40</td>
                <td>400</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.grupo3}>
            <div className={styles.grupo3__titulo}>

            <div className={styles.totalFat}>
              <label> Total Faturado</label>
              <input type="number" name="" id="" />
            </div>

            <div className={styles.totalDesp}>
              <label> Total Despesa</label>
              <input type="number" name="" id="" />
            </div>

            <div className={styles.botoesG3}>
            <button className={styles.botaoEnviar}>
                  {" "}
                  <img src={Check} alt="" /> Enviar para Análise
                </button>

                <button className={styles.botaoCancel}>
                  {" "}
                  <img src={Cancelar} alt="" /> Cancelar Solicitação
                </button> 
                </div>
                </div>
              


          </div>
        </main>
      </div>
    </div>
  );
}
export default Solicitacao;
