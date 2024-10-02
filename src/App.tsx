import MyPageMain from './components/MyPage/MyPageMain.tsx';
import MyPageSide from './components/MyPageSide/MyPageSide.tsx';

function App() {
  return (
    <div className="flex h-[100vh] w-full bg-indigo-200">
      <MyPageSide />
      <MyPageMain />
    </div>
  );
}

export default App;
