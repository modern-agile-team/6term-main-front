import SaveToken from '@/components/molecules/login-modal/SaveToken';

const RedirectUri = () => {
  return (
    <div>
      <SaveToken provider="kakao" />
    </div>
  );
};

export default RedirectUri;
