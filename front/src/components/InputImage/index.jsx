import { Container, ButtonUploadImage } from './styles';

export function InputImage({ label, img, ...rest }) {
  return (
    <Container>
      <label htmlFor="inputImagem">
        <div>Imagem</div>
        <ButtonUploadImage>
          <img src={img} alt="Imagem Padrão" />
          <div className="btnCarregarImg">Carregar Imagem</div>
        </ButtonUploadImage>
      </label>
      <input type="file" id="inputImagem" accept="image/*" {...rest} />
    </Container>
  );
}