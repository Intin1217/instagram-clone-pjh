import { useModalType } from '../../../store/store.ts';
import NewAddPostModal from './NewAddPostModal/NewAddPostModal.tsx';
import PostViewModal from './PostViewModal/PostViewModal.tsx';
import ProfileEditModal from './ProfileEditModal/ProfileEditModal.tsx';
import AddPostInfoModal from './NewAddPostModal/AddPostInfoModal/AddPostInfoModal.tsx';
//분기점임~
export default function ModalView() {
  const { modalType } = useModalType();
  return modalType == 'ProfileEdit' ? (
    <ProfileEditModal />
  ) : modalType === 'PostInfoEdit' ? (
    <AddPostInfoModal />
  ) : modalType === 'PostAdd' ? (
    <NewAddPostModal />
  ) : modalType === 'PostView' ? (
    <PostViewModal />
  ) : (
    ''
  );
}
//음...어지럽다
