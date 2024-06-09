import { Container } from './styles'

export function Button({ title, loading = false, padding, fontSize, backgroundColor, height, ...rest }) {
  const buttonStyle = {
    padding: padding,
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    height: height
  };

  return (
    <Container
      type="button"
      disabled={loading}
      style={buttonStyle}
      {...rest}
    >
      {loading ? 'Carregando...' : title}
    </Container >
  )
}