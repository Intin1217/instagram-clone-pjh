import MyPageHeader from './MyPageHeader/MyPageHeader.tsx';
import MyPageNav from './MyPageNav/MyPageNav.tsx';
import MyPageMain from './MyPageMain/MyPageMain.tsx';
import MyPageFooter from './MyPageFooter/MyPageFooter.tsx';
import { useStore } from '../../store/store.ts';
import { useEffect } from 'react';

export default function MyPage() {
  const { fetchUser } = useStore();
  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchUser();
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, [fetchUser]);

  return (
    <div className="ml-[30%] flex flex-col w-[100vh] h-screen items-center">
      <MyPageHeader />
      <MyPageNav />
      <MyPageMain />
      <MyPageFooter />
    </div>
  );
}
