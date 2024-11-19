// /* eslint-disable react-refresh/only-export-components */
// type FormExportType = {
//   userName: string;
//   setUserName: React.Dispatch<React.SetStateAction<string>>;
//   userInput: HTMLInputElement;
// };
// import { createContext, useContext, useEffect, useRef, useState } from "react";

// const FormContext = createContext<FormExportType | null>(null);

// type ChildrenProps = {
//   children: React.ReactNode;
// };

// export const useFormContext = () => {
//   const object = useContext(FormContext);
//   if (!object) {
//     throw new Error("Please provide a provider");
//   }
//   return object;
// };

// export default function FormGlobalState({ children }: ChildrenProps) {
//   const [userName, setUserName] = useState("");
//   const userInput = useRef<HTMLInputElement>();

//   useEffect(() => {
//     if (userName && userName.includes(".")) {
//       (userInput.current as HTMLInputElement).style.outline = "2px solid red";
//     }
// //   }, [userName]);

//   return (
//     <FormContext.Provider value={{ userName, setUserName, userInput }}>
//       {children}
//     </FormContext.Provider>
//   );
// }
