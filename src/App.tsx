import MyPage from './components/MyPage/MyPage.tsx';
import MyPageSide from './components/MyPageSide/MyPageSide.tsx';
import { ModalPortal } from './components/Modal/ModalPortal/ModalPortal.tsx';

function App() {
  return (
    <div className="flex h-[100vh] w-full">
      <MyPageSide />
      <div>
        <MyPage />
      </div>
      <ModalPortal></ModalPortal>
    </div>
  );
}

export default App;
