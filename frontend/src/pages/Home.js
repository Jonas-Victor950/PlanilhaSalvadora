/* eslint-disable jsx-a11y/iframe-has-title */
import "./Home.css";
import notaDeReal1 from "../images/notasdereal1.png";
import plus from "../images/pngwing.com.png";
import playerOne from "../images/Capa1.png";
import playerTwo from "../images/Capa2.png";
import notaDeCem from "../images/nota100real.png";
import notaDeCem1 from "../images/nota100real1.png";

const Home = () => {

  const linkSheet = () => {
    window.open("https://pay.kiwify.com.br/BvcfJ4k", "_blank");
  };
  return (
    <>
      <div id="PartOneMobile">
        <div id="notaDeRealDiv">
          <img src={notaDeReal1} alt="notasdereal1.png" id="notaDeReal1"></img>
        </div>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/sGJ7Vo6g7bg?si=GyqNqarKdVHdXIxJ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="contentOneMobile">
          <div className="texts">
            <div className="textOne">TRANSFORME AS</div>
            <div className="textTwo">FINANÇAS</div>
            <div className="same-line">
              DE SUA <span>EMPRESA</span>
            </div>

            <div className="textFour">COM UMA PLANILHA</div>
            <div className="redirect">
              <button onClick={linkSheet}>ADQUIRIR POR APENAS R$14,90</button>
            </div>
          </div>
        </div>
        <div className="notaDeCem1">
          <img src={notaDeCem1} alt="" />
        </div>
      </div>
      <div id="PartOneDesktop">
        <div id="notaDeRealDiv">
          <img src={notaDeReal1} alt="notasdereal1.png" id="notaDeReal1"></img>
        </div>

        <div className="contentOneDesktop">
          <div className="texts">
            <div className="textOne">TRANSFORME AS FINANÇAS</div>
            <div className="textTwo">DE SUA EMPRESA COM UMA PLANILHA</div>
          </div>
          <div className="video">
          <iframe
            src="https://www.youtube.com/embed/sGJ7Vo6g7bg?si=GyqNqarKdVHdXIxJ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="redirect">
              <button onClick={linkSheet}>ADQUIRIR POR APENAS R$14,90</button>
            </div>
        </div>
        <div className="notaDeCem">
          <img src={notaDeCem} alt="" />
        </div>
      </div>
      {/* <div id="PartTwoMobile">
        <div className="texts">
          <div className="textOne">POR QUE</div>
          <div className="textTwo">VOCÊ PRECISA</div>
          <div className="textThree">DESSA PLANILHA</div>
          <div className="textFour">NO SEU NEGÓCIO?</div>
        </div>
        <div className="formats">
          <div className="formatOne">
            Planilha com funcionalidades completas para o financeiro de sua
            empresa.
          </div>
          <div className="formatTwo">Só Benefícios!</div>
          <div className="formatThree">
            Ferramentas e Planilhas: Modelo completo e pronto para uso, ideal
            para gerenciar seu orçamento, vendas, despesas, receitas, custos,
            markup e muito mais, permitindo um controle financeiro robusto e
            eficiente.
          </div>
          <div className="formatFour">
            Estratégias de Poupança: Otimize seus recursos financeiros com
            inteligência, monitorando detalhadamente a destinação do capital da
            sua empresa. - Investimentos Descomplicados: Domine a arte de
            investir com segurança e controle, assegurando o crescimento
            sustentável e a estabilidade financeira do seu negócio.
          </div>
          <div className="formatFive">
            Acesso Imediato: Adquira e baixe sua planilha agora mesmo, começando
            de imediato a gestão financeira profissional do seu empreendimento.
          </div>
        </div>
        <div className="redirect">
          <button className="bt_carrinho" onClick={linkSheet}>
            Adquirir Planilha
          </button>
        </div>
      </div>
      <div id="PartTwoDesktop">
        <div className="texts">
          <div>
            <div className="textOne">POR QUE</div>
            <div className="textTwo">VOCÊ PRECISA</div>
            <div className="textThree">DESSA PLANILHA</div>
            <div className="textFour">NO SEU NEGÓCIO?</div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="formatFive">
              Acesso Imediato: Adquira e baixe sua planilha agora mesmo,
              começando de imediato a gestão financeira profissional do seu
              empreendimento.
            </div>
            <img
              src={seta}
              alt=""
              style={{ marginLeft: "-2vw", zIndex: "2", paddingTop: "40px" }}
            />
          </div>

          <div className="redirect">
            <button className="bt_carrinho" onClick={linkSheet}>
              Adquirir Planilha
            </button>
          </div>
        </div>
        <div className="formats">
          <div className="formatOne">
            Planilha com funcionalidades completas para o financeiro de sua
            empresa.
          </div>
          <div className="formatTwo">Só Benefícios!</div>
          <div className="formatThree">
            Ferramentas e Planilhas: Modelo completo e pronto para uso, ideal
            para gerenciar seu orçamento, vendas, despesas, receitas, custos,
            markup e muito mais, permitindo um controle financeiro robusto e
            eficiente.
          </div>
          <div className="formatFour">
            Estratégias de Poupança: Otimize seus recursos financeiros com
            inteligência, monitorando detalhadamente a destinação do capital da
            sua empresa. - Investimentos Descomplicados: Domine a arte de
            investir com segurança e controle, assegurando o crescimento
            sustentável e a estabilidade financeira do seu negócio.
          </div>
        </div>
      </div>
      <div id="PartThreeMobile">
        <div className="texts">COMPRE AGORA E TRANSFORME O SEU NEGÓCIO!</div>
      </div> */}
      {/* <div id="PartFourMobile" ref={contentRef}>
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/sGJ7Vo6g7bg?si=GyqNqarKdVHdXIxJ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="second">
          <div>
            <div className="text">
              POR QUE VOCÊ DEVE PROFISSIONALIZAR A GESTÃO FINANCEIRA DA SUA
              EMPRESA? ENTENDA!
            </div>
            <div className="redirect">
              <button className="bt_carrinho" onClick={linkSheet}>
                Quero a Minha Planilha
              </button>
            </div>
          </div>
          <div className="house">
            <img src={house} alt="" />
          </div>
        </div>
      </div> */}
      <div id="PartFiveMobile">
        <div className="textOne">
          BÔNUS PARA VOCÊ QUE VAI ADQUIRIR A PLANILHA
        </div>
        <div className="textAndImage">
          <div className="textTwo">
            Além da Planilha financeira, você irá receber duas vídeo-aulas
            totalmente que ajudará a obter melhores resultados utilizando a
            planilha da maneira certa.
          </div>
          <img src={plus} alt="" className="imageOne" />
          <img src={plus} alt="" className="imageTwo" />
        </div>
        <div className="videosAndPrices">
          <div className="images">
            <img src={playerOne} alt="" className="imageOne" />
            <img src={playerTwo} alt="" className="imageTwo" />
          </div>
          <div className="prices">
            <div>
              <div className="smallPrice">
                <div className="priceOne">de R$68,76</div>
                <div>por apenas</div>
              </div>
              <div className="biggerPrice">
                R$14,<span>90</span>
              </div>
            </div>
            <div className="redirect">
              <button className="bt_carrinho" onClick={linkSheet}>
                Adquirir Planilha
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="PartSixMobile">
        <div className="left">
          <div>Política de Cookies</div>
          <div>Política de Privacidade</div>
        </div>
        <div className="right">
          <div>Todos os direitos reservados para</div>
          <div>@Gustavo @Wedson</div>
        </div>
      </div>
    </>
  );
};

export default Home;
