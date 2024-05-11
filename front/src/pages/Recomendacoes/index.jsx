import { Container, Content } from './styles';
import { Link } from 'react-router-dom';

import iconYouTube from '../../assets/iconYouTube.svg';
import iconShoppingCart from "../../assets/iconShoppingCart.svg";

import imgChannelMW from "../../assets/imgChannelMW.png";
import imgChannelTecnoart from "../../assets/imgChannelTecnoart.png";
import imgChannelKabum from "../../assets/imgChannelKabum.png";
import imgChannelPichau from "../../assets/imgChannelPichau.png";
import imgTerabyte from "../../assets/imgTerabyte.png";
import imgAliExpress from "../../assets/imgAliExpress.png";

import { Header } from '../../components/Header'
import { CardRecomendacoes } from '../../components/CardRecomendacoes'

export function Recomendacoes() {
  const dataChannels = [
    {img: imgChannelMW, title: "MW Informática", description: "1,79 mi de inscritos", link: "https://www.youtube.com/@MWInformatica"},
    {img: imgChannelTecnoart, title: "TecnoArt", description: "1,75 mi de inscritos", link: "https://www.youtube.com/@tecnoart101"},
    {img: imgChannelKabum, title: "KaBuM!", description: "550 mil inscritos", link: "https://www.youtube.com/@kabum"},
    {img: imgChannelPichau, title: "Pichau", description: "881 mil inscritos", link: "https://www.youtube.com/@pichauinfo"},
  ];

  const dataWebsites = [
    {img: imgTerabyte, title: "Terabyte", description: "terabyteshop.com.br", link: "https://www.terabyteshop.com.br"},
    {img: imgAliExpress, title: "AliExpress", description: "pt.aliexpress.com", link: "https://pt.aliexpress.com/"},
    {img: imgChannelKabum, title: "KaBuM!", description: "kabum.com.br", link: "https://www.kabum.com.br"},
    {img: imgChannelPichau, title: "Pichau", description: "pichau.com.br", link: "https://www.pichau.com.br"},
  ];

  return (
    <Container>
      <Header />
      <Content>
        <section>
          <h2>Canais <img src={iconYouTube} alt="Logo Youtube" /></h2>
          <div>
            {
              dataChannels.map(card => (
                <Link to={card.link} target='_blank'>
                  <CardRecomendacoes
                    image={card.img}
                    title={card.title}
                    description={card.description}
                  />
                </Link>
              ))
            }
          </div>
        </section>
        <section>
          <h2>Sites <img src={iconShoppingCart} alt="Sacolas de Compras" /></h2>
          <div>
            {
              dataWebsites.map(card => (
                <Link to={card.link} target='_blank'>
                  <CardRecomendacoes
                    image={card.img}
                    title={card.title}
                    description={card.description}
                  />
                </Link>
              ))
            }
          </div>
        </section>
      </Content>
    </Container>
  )
}