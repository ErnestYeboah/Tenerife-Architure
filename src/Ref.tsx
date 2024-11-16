import { useRef } from "react";

export default function Ref() {
  const userRef = useRef<HTMLHeadingElement | null>(null);
  const changeName = () => {
    (userRef.current as HTMLHeadingElement).classList.add("you");
  };

  return (
    <div>
      <h1 ref={userRef}>eRNEST YEBOAH</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
