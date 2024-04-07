import { Container } from './styles'

export function Button({ title, loading = false, padding, fontSize, ...rest }) {
  const buttonStyle = {
    padding: padding,
    fontSize: fontSize,
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