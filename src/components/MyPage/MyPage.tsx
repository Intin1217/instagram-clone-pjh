import MyPageHeader from './MyPageHeader/MyPageHeader.tsx';
import MyPageNav from './MyPageNav/MyPageNav.tsx';
import MyPageMain from './MyPageMain/MyPageMain.tsx';
import MyPageFooter from './MyPageFooter/MyPageFooter.tsx';

export default function MyPage() {
  return (
    <div className="ml-[30%] flex flex-col w-[100vh] h-screen items-center">
      <MyPageHeader />
      <MyPageNav />
      <MyPageMain />
      <MyPageFooter />
    </div>
  );
}
