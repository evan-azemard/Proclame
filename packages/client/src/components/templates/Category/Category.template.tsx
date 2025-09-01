
import { Container, Wave } from '@atoms/index';
import { SectionGrid } from '@organisms/index';

export default function Category() {
  return (
    <Container>
      <Wave />
      <SectionGrid type='category' />
    </Container>
  );
}
