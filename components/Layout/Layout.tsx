import Footer from '@app/components/Footer';
import Header from '../Header';

interface LayoutProps {
  showHero?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, showHero = false }) => {
  return (
    <div>
      <Header showHero={showHero} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
