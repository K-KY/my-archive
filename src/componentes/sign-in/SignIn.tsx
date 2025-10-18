import React, { useState } from "react";
import "./SignIn.css";

interface SignInProps {
    onSubmit?: (email: string, password: string, remember: boolean) => Promise<void> | void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignIn: React.FC<SignInProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        if (!email.trim()) return "이메일을 입력해주세요.";
        if (!emailRegex.test(email)) return "유효한 이메일을 입력해주세요.";
        if (!password) return "비밀번호를 입력해주세요.";
        if (password.length < 6) return "비밀번호는 6자 이상이어야 합니다.";
        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const v = validate();
        if (v) {
            setError(v);
            return;
        }

        setLoading(true);
        try {
            // onSubmit이 주어지면 호출하고, 없으면 더미 시뮬레이션
            if (onSubmit) {
                await onSubmit(email, password, remember);
            } else {
                // 연습용: 800ms 시뮬레이션 후 성공/실패 토글 (email: demo@ -> 성공)
                await new Promise((res) => setTimeout(res, 800));
                if (email.toLowerCase().startsWith("fail")) {
                    throw new Error("서버 인증 실패: 이메일 또는 비밀번호가 올바르지 않습니다.");
                }
            }
            // 성공 처리 — 여기서는 간단히 alert (실제 앱에선 리다이렉트)
        } catch (err: any) {
            setError(err?.message ?? "알 수 없는 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signin-page">
            <form className="signin-card" onSubmit={handleSubmit} aria-labelledby="signin-title" noValidate>
                <h1 id="signin-title" className="signin-title">로그인</h1>

                <label className="field">
                    <span className="label-text">이메일</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@domain.com"
                        aria-required="true"
                        aria-invalid={!!error && !emailRegex.test(email)}
                        autoComplete="email"
                        className="input"
                    />
                </label>

                <label className="field">
                    <span className="label-text">비밀번호</span>
                    <div className="password-row">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="비밀번호"
                            aria-required="true"
                            autoComplete="current-password"
                            className="input"
                        />
                        <div></div>
                        <button
                            type="button"
                            className="pw-toggle"
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? "숨기기" : "보기"}
                        </button>
                    </div>
                </label>

                <div className="row between">
                    <label className="remember">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        <span>로그인 유지</span>
                    </label>

                    <button type="button" className="link" onClick={() => alert("비밀번호 재설정 흐름 (연습용)")}>
                        비밀번호 찾기
                    </button>
                </div>

                {error && <div role="alert" className="error">{error}</div>}

                <button className="submit" type="submit" disabled={loading}>
                    {loading ? "로그인 중..." : "로그인"}
                </button>

                <div className="footer">
                    계정이 없나요? <button type="button" className="link" onClick={() => alert("회원가입")}>회원가입</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
