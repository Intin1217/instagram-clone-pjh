import { useModal } from '../../../../store/store.ts';
//여기는 사진 선택해서 포스트 추가하는 모달
export default function NewAddPostModal() {
  const { isOpen } = useModal();
  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <p>사진 선택해서 포스트 추가하는 모달</p>
    </div>
  ) : null;
}
