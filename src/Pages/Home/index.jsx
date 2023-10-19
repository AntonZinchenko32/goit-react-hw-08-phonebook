import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Phonebook home page{' '}
        <span role="img" aria-label="Greeting icon">
          ☎
        </span>
      </Title>
    </Container>
  );
}
