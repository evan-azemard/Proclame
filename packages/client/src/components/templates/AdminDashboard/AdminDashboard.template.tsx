
import { Container, Title } from '@atoms/index';
import { useEffect } from 'react';

export default function AdminDashboard() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container>
      <Title type={1} id="admin-dashboard-title">Admin Dashboard</Title>
    </Container>
  );
}
