import { AppBarComponent } from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Loader } from 'components/Loader';
// Hooks
import { useAuth } from 'hooks';

const Layout = () => {
  const { isLoading } = useAuth();
  return (
    <>
      {isLoading && <Loader />}
      <AppBarComponent />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
