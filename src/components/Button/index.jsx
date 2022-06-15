import { Container } from "./style";

const Button = ({ children, backgroundColor = "#868E96", ...rest }) => {
  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default Button;