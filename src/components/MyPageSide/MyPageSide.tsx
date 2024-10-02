export default function MyPageSide() {
  const MenuBox = 'flex p-2 gap-2';
  return (
    <div className="h-full p-6 flex flex-col gap-5 w-[15%] border-gray-400 border-r">
      <div className="p-6 flex flex-col gap-10">
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드1번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드2번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드3번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드4번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드5번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드6번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드7번</p>
        </div>
        <div className={MenuBox}>
          <img src={''} alt={'사진'} />
          <p>사이드8번</p>
        </div>
      </div>
    </div>
  );
}
