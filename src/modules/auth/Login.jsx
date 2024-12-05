import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./login.scss";

import {CheckEmail} from "../../utils/common";

const Login = () => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");

    // 유효성 검사 함수
    const checkValid = (elmId) => {
        if (elmId === "email") {
            if (!CheckEmail(id)) {
                setEmailError(true); // 이메일 형식 오류
            } else {
                setEmailError(false); // 이메일 형식 정상
            }
        }

        if (elmId === "pwd") {
            let isValid = true;

            if (pwd.length < 8) {
                isValid = false;
            }
            if (pwd.search(/\s/) !== -1) {
                isValid = false;
            }

            setPwdError(!isValid); // 비밀번호 유효성 결과 설정
        }

        // 로그인 버튼 활성화 상태 결정
        if (CheckEmail(id) && pwd.length >= 8 && pwd.search(/\s/) === -1) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    // 입력 값 변경 핸들러
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "email") {
            setId(value);
            checkValid("email");
        } else if (id === "pwd") {
            setPwd(value);
            checkValid("pwd");
        }
    };

    const onNaverLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }

    const onGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    const onKakaoLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }

    return (
        <div id="wrap">
            <div id="header">
                <img src="/images/logo.png" alt="logo"/>
            </div >
            <div id="content" className="pd-all">
                <div className="login">
                    <div className="row-list">
                        <div className="row-item">
                            <h2 className="row-title">아이디</h2>
                            <div className="input">
                                <input type="text" id="email" name="email" placeholder="이메일 입력" maxLength="100"
                                       value={id} onChange={handleInputChange}
                                       className={emailError ? "valid-error":""}
                                />
                                <span className="valid-msg" id="emailMsg">{emailError && "이메일 형식이 올바르지 않습니다."}</span>
                            </div>
                        </div>
                        <div className="row-item">
                            <h2 className="row-title">비밀번호</h2>
                            <div className="input">
                                <input type="password" id="pwd" name="pwd" placeholder="비밀번호 입력"
                                       value={pwd} onChange={handleInputChange}
                                       className={pwdError ? "valid-error" : ""}
                                />
                                <span className="valid-msg" id="pwdMsg">{pwdError && "비밀번호는 8자 이상, 공백 없이 입력해주세요."}</span>
                            </div>
                        </div>

                        <div className="auto-login">
                            <label htmlFor="autoLoginCheckbox" className="auto-login-label">
                                <input type="checkbox" id="autoLoginCheckbox" name="autoLogin"/>
                                <span className="checkmark"></span>
                                자동 로그인
                            </label>
                        </div>

                        <ul className="login-menu-list">
                            <li><Link to="/find/id">아이디 찾기</Link></li>
                            <li><Link to="/find/pwd">비밀번호 찾기</Link></li>
                        </ul>

                        <ul>
                            <li>
                                <button onClick={onNaverLogin}>naver login</button>
                            </li>
                            <li>
                                <button onClick={onGoogleLogin}>Google login</button>
                            </li>
                            <li>
                                <button onClick={onKakaoLogin}>kakao login</button>
                            </li>
                        </ul>

                        <a href="#" id="btnLogin" className="btn-login">로그인</a>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;