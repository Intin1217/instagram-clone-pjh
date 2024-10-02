import { usePostExistence } from '../../../store/store.ts';
import { CiCamera } from 'react-icons/ci';
export default function MyPageMain() {
  const { postExistence } = usePostExistence();
  return postExistence ? (
    <main className="bg-indigo-600">
      <p>안녕</p>
    </main>
  ) : (
    //게시글이 있으면 위쪽 렌더링 아니면아래
    <main className="m-auto flex flex-col items-center justify-center gap-6">
      <div className="border-black border-4 p-4 rounded-full">
        <CiCamera className="size-12" />
      </div>
      <div>
        <p className="font-bold text-2xl">게시물 없음</p>
      </div>
    </main>
  );
}
