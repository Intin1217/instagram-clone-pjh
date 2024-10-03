import { useModal } from '../../../../store/store.ts';

export default function PostViewModal() {
  const { isOpen } = useModal();
  return isOpen ? (
    <div>
      <p>포스트 보여주는 모달</p>
    </div>
  ) : null;
}
