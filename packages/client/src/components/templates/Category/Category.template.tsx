
import { Container, Wave } from '@atoms/index';
import { SectionGrid } from '@organisms/index';
import { useEffect } from 'react';

export default function Category() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container>
      <Wave />
      <SectionGrid type='category' />
    </Container>
  );
}
