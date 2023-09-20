import NavBar from '@/components/molecules/NavBar';
// import HeaderAlarm from "@/components/molecules/headerelements/HeaderAlarm";
import HeaderNav from '@/components/molecules/headerelements/HeaderNav';
import HeaderNavigate from '@/components/molecules/Headerelements/HeaderNavigate';

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
