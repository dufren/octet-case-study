import AuthGuard from '@routes/AuthGuard';
import Router from '@routes/routes';

function App() {
  return (
    <AuthGuard>
      <Router />
    </AuthGuard>
  );
}

export default App;
