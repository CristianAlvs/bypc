import { Container } from './styles';
import { NumericFormat } from 'react-number-format';

export function Input({ label, inputType, className, ...rest }) {
  let inputComponent;

  switch (inputType) {
    case 'textarea':
      inputComponent = <textarea {...rest} />;
      break;
    case 'select':
      inputComponent = <select {...rest} />;
      break;
    case 'currency':
      inputComponent = <NumericFormat
        {...rest}
        thousandSeparator='.'
        decimalSeparator=','
        prefix={'R$ '}
        decimalScale={2}
        fixedDecimalScale={true}
      />
      break;
    default:
      inputComponent = <input {...rest} />
  }

  return (
    <Container className={className}>
      <label>{label}</label>
      {inputComponent}
    </Container>
  );
}