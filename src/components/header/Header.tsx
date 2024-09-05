import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-themeWhite">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
