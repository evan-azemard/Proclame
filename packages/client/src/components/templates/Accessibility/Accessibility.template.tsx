import { Container, Title } from '@atoms/index';

export default function Accessibility() {
  return (
    <Container>
      <Title type={1} id="accessibility-title">Accessibilité</Title>
      <p aria-describedby="accessibility-title">Bienvenue sur la page d'accessibilité. Ici, vous trouverez des informations sur les fonctionnalités d'accessibilité de notre site.</p>
    </Container>
  );
}
