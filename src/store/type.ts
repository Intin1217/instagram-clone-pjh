//프로필 정보 타입
export interface ProfileInfo {
  name?: string;
  imageUrl?: string;
  profileInfo?: {
    id: string;
    name: string;
    webSiteUrl: string;
    profileExplanation: string;
  };

  setName?: (name: string) => void;
  setImageUrl?: (url: string) => void;
  setProfileInfo?: (profile: {
    inputId: string | '';
    inputName: string | '';
    inputWebSiteUrl: string | '';
    inputProfileExplanation: string | '';
  }) => void;
}

export interface PostExisting {
  postExistence: boolean;
  setPostExistence: (exists: boolean) => void;
}
// 포스트 있고 없고 체크하는 거 타입

export interface ModalType {
  isOpen?: boolean;
  modalType?: 'Default' | 'PostView' | 'PostAdd' | 'PostInfoEdit' | 'ProfileEdit';
  setModalType?: (
    stateModal: 'Default' | 'PostView' | 'PostAdd' | 'PostInfoEdit' | 'ProfileEdit',
  ) => void;
  setIsOpen?: (isOpen: boolean) => void;
}

export interface ProfileDataFirebase {
  user: {
    id: string;
    userID: string;
    name: string;
    webSiteUrl: string;
    profileExplanation: string;
  }[];
  fetchUser: () => Promise<void>;
  set: (partial: Partial<ProfileDataFirebase>) => void;
}
export interface PostType {
  post: {
    postId: string;
    imgUrl: string;
    text: string;
  }[];
  fetchPost: () => Promise<void>;
}
