interface SignUpFormProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  handleSignUp: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  nickname,
  setNickname,
  handleSignUp,
}) => {
  return (
    <div className="space-y-4 w-full max-w-[401px] mx-auto sm:max-w-[280px] overflow-auto">
      <div>
        <label htmlFor="nickname" className="block text-sm font-medium text-grey-700">
          닉네임
        </label>
        <input
          id="nickname"
          type="text"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="닉네임을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-grey-700">
          이메일 주소
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="이메일을 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-grey-700">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-grey-700">
          비밀번호 확인
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
      </div>

      <button onClick={handleSignUp} className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        회원가입
      </button>
    </div>
  );
};

export default SignUpForm;
