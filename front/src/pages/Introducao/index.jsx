import { Container, Main, Card, ImgContainer, InfoContainer, ButtonsContainer } from './styles';
import { useState } from 'react';
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';

import iconPC from '../../assets/iconPC.svg';
import iconNext from '../../assets/iconNext.svg';
import iconBack from '../../assets/iconBack.svg';
import iconStart from '../../assets/iconStart.svg';

import imgStep1 from '../../assets/imgStep1.png';
import imgStep2 from '../../assets/imgStep2.png';
import imgStep3 from '../../assets/imgStep3.png';

export function Introducao() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();
  const { checkSecondAccess } = useAuth();

  function handleFirstAccess() {
    checkSecondAccess();

    navigate("/");
  }

  return (
    <Container>
      <Main>
        <img src={iconPC} alt="Logo" />
        <h1>BYPC - Build Your PC</h1>
        <p><strong>Não</strong> perca <strong>tempo</strong> e nem <strong>dinheiro</strong> na montagem de seu Computador</p>

        {
          step === 1 ?
            <Card>
              <ImgContainer>
                <img src={imgStep1} />
              </ImgContainer>
              <InfoContainer>
                <h2>1</h2>
                <p>Veja nossas recomendações caso esteja com dúvidas onde procurar suas peças</p>
                <ButtonsContainer>
                  <button className="back" disabled={step === 1}>
                  </button>
                  <button className="next" onClick={() => setStep(2)}>
                    <span>Próximo</span>
                    <img src={iconNext} alt="icon Next" />
                  </button>
                </ButtonsContainer>
              </InfoContainer>
            </Card>
          : step === 2 ?
            <Card>
              <ImgContainer>
                <img src={imgStep2} />
              </ImgContainer>
              <InfoContainer>
                <h2>2</h2>
                <p>Crie cards com links, preços e descrições para organizar sua lista de compras</p>
                <ButtonsContainer>
                  <button className="back" onClick={() => setStep(1)}>
                    <img src={iconBack} alt="icon Back" />
                    <span>Anterior</span>
                  </button>
                  <button className="next" onClick={() => setStep(3)}>
                    <span>Próximo</span>
                    <img src={iconNext} alt="icon Next" />
                  </button>
                </ButtonsContainer>
              </InfoContainer>
            </Card>
          :
            <Card>
              <ImgContainer>
                <img src={imgStep3} />
              </ImgContainer>
              <InfoContainer>
                <h2>3</h2>
                <p>Aprove seus cards para ir controlando o total de seu orçamento</p>
                <ButtonsContainer>
                  <button className="back" onClick={() => setStep(2)}>
                    <img src={iconBack} alt="icon Back" />
                    <span>Anterior</span>
                  </button>
                  <button className="next" onClick={handleFirstAccess}>
                    <span>Começar</span>
                    <img src={iconStart} alt="icon Start" />
                  </button>
                </ButtonsContainer>
              </InfoContainer>
            </Card>
        }
      </Main>
    </Container>
  )
}
