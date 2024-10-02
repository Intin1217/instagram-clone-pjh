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
    inputId: string;
    inputName: string;
    inputWebSiteUrl: string;
    inputProfileExplanation: string;
  }) => void;
}

export interface PostExisting {
  postExistence: boolean;
  setPostExistence: () => void;
}
