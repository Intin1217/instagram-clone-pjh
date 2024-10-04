import { useModal } from '../../../../store/store.ts';
import { IoCloseOutline } from 'react-icons/io5';
import { RiFolderImageLine } from 'react-icons/ri';
import { useState } from 'react';
//여기는 사진 선택해서 포스트 추가하는 모달
export default function NewAddPostModal() {
  const { isOpen, setIsOpen } = useModal();
  //임시 테스트용...?
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onClickUpload = () => {
    document.getElementById('fileUpload')!.click();
  };
  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <IoCloseOutline
        onClick={() => {
          setIsOpen!(false);
        }}
        className="fixed right-2 top-2 size-12 text-gray-200 cursor-pointer"
      />
      <div className="flex flex-col justify-between fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[600px] h-[700px] rounded">
        <div className="flex flex-col w-full items-center justify-center mb-3">
          <div className="flex w-full p-2 items-center justify-center border-gray-300 border-b">
            <p className="text-[18px]">새 게시물 만들기</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt=[50%] mb-[50%] gap-2">
          <RiFolderImageLine className="size-28" />
          <p>사진을 선택하세요</p>
          <input
            id={'fileUpload'}
            type={'file'}
            hidden
            onChange={(e) => {
              if (e.target.files) {
                setSelectedFile(e.target.files![0]);
                console.log(selectedFile);
              } else {
                console.log('선택 파일 없음.');
              }
            }}
          />
          <button onClick={onClickUpload} className="bg-sky-400 text-white p-1 pr-3 pl-3 rounded">
            컴퓨터에서 선택
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
