import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "./styles.css";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrengthText, setPasswordStrengthText] = useState("Weak");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPassowordConfirm, setIsPasswordConfirm] = useState(false);

  //Dom Elements
  const userInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const passwordInstructor = useRef<HTMLParagraphElement | null>(null);
  const passwordStrengthDetector = useRef<HTMLParagraphElement | null>(null);
  const confirmPasswordDetector = useRef<HTMLParagraphElement | null>(null);

  function addOutlineColor(
    el: React.MutableRefObject<HTMLInputElement | null>,
    color: string
  ) {
    const elBox = el.current as HTMLInputElement;
    elBox.style.outline = `1px ridge ${color}`;
  }

  const validateUserName = () => {
    if (userName === "") {
      addOutlineColor(userInput, "salmon");
      return false;
    } else {
      addOutlineColor(userInput, "lime");
      return true;
    }
  };

  function validateEmail(e: ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    setEmail(email);
    if (email.includes("@")) {
      addOutlineColor(emailInput, "lime");
      setEmailValid(true);
      return true;
    } else {
      addOutlineColor(emailInput, "salmon");
      setEmailValid(false);
      return false;
    }
  }

  function passwordMatch() {
    return (
      password.match(/[A-Za-z]/g) &&
      password.match(/[0-9]/g) &&
      password.match(/[,./;'{}()*%$#@!'><]/g)
    );
  }

  function checkStrength() {
    const passwordStrengthTextEl =
      passwordStrengthDetector.current as HTMLParagraphElement;

    passwordStrengthTextEl.style.opacity = "1";

    if (password.length <= 6) {
      setPasswordStrengthText("Weak");
      setIsPasswordValid(false);
      return false;
    } else if (password.length <= 10 && passwordMatch()) {
      setPasswordStrengthText("Medium");
      setIsPasswordValid(true);
      return true;
    } else if (password.length >= 15 && passwordMatch()) {
      setPasswordStrengthText("Strong");
      setIsPasswordValid(true);
      return true;
    }
  }

  function validatePassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    setPassword(password);
    const passwordTextEl = passwordInstructor.current as HTMLParagraphElement;

    if (password) {
      checkStrength();

      if (passwordMatch()) {
        passwordTextEl.style.color = "lime";
        setIsPasswordValid(true);
        return true;
      } else {
        passwordTextEl.style.color = "salmon";
        setIsPasswordValid(false);
        return false;
      }
    } else {
      setIsPasswordValid(false);
      return false;
    }
  }

  function validateConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);

    const confirmPasswordDetectorEl =
      confirmPasswordDetector.current as HTMLParagraphElement;
    if (password === confirmPassword) {
      setIsPasswordConfirm(true);
      confirmPasswordDetectorEl.style.opacity = "0";
      return true;
    } else {
      setIsPasswordConfirm(false);
      confirmPasswordDetectorEl.style.opacity = "1";
      return false;
    }
  }

  function submitFormData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      validateUserName() &&
      isEmailValid &&
      isPasswordValid &&
      isPassowordConfirm
    ) {
      console.log("Forms sumbitted");
      return true;
    } else {
      console.error("Form must be filled");
      return false;
    }
  }

  return (
    <form onSubmit={submitFormData}>
      <div className="input__group">
        <input
          ref={userInput}
          value={userName}
          required
          onChange={(e) => setUserName(e.target.value)}
          onBlur={validateUserName}
          type="text"
          id="username"
          placeholder="Type your username"
          name="userName"
        />
        <label htmlFor="username">Enter Your Username : </label>
      </div>
      <div className="input__group">
        <input
          type="email"
          name="email"
          value={email}
          ref={emailInput}
          id="email"
          placeholder="Type your email"
          onChange={validateEmail}
          required
        />
        <label htmlFor="email">Enter Your Email Address : </label>
      </div>
      <div className="input__group">
        <input
          type="password"
          value={password}
          name="password"
          onChange={validatePassword}
          id="password"
          placeholder="Type your password"
          ref={passwordInput}
        />
        <label htmlFor="password">Enter Your Password : </label>
        <p ref={passwordInstructor}>
          Password must be alphanumeric and include a symbol.
        </p>
        <p
          ref={passwordStrengthDetector}
          style={{ opacity: "0", transition: "500ms" }}
        >
          {passwordStrengthText}
        </p>
      </div>
      <div className="input__group">
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your Password."
          name="confirmPassword"
          value={confirmPassword}
          onChange={validateConfirmPassword}
        />
        <label htmlFor="confirmPassword">Confirm Password : </label>
        <p
          ref={confirmPasswordDetector}
          style={{ opacity: "0", color: "salmon" }}
        >
          Password do not match
        </p>
      </div>

      <button>Sumbit</button>
    </form>
  );
}
