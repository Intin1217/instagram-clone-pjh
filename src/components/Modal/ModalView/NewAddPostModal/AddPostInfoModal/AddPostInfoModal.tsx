import { useModal } from '../../../../../store/store.ts';

export default function AddPostInfoModal() {
  const { isOpen } = useModal();
  return isOpen ? (
    <div>
      <p>사진 선택하고 포스트 내용 작성 하는 모달</p>
    </div>
  ) : null;
}
