import StartingPageContent from '../components/StartingPage/StartingPageContent';
import { AuthContextProvider } from '../store/auth-context'; // Correct import path

const HomePage = () => {
  return (
    <AuthContextProvider> {/* Wrap your content with AuthContextProvider */}
      <StartingPageContent />
    </AuthContextProvider>
  );
};

export default HomePage;

