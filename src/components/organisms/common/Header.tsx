import NavBar from '@/components/molecules/NavBar';

import HeaderNav from '@/components/molecules/header-elements/HeaderNav';
import HeaderNavigate from '@/components/molecules/header-elements/HeaderNavigate';

const Header = () => {
  return (
    <div>
      <NavBar />
      {/* <HeaderNav /> */}
      <HeaderNavigate />
    </div>
  );
};

export default Header;
