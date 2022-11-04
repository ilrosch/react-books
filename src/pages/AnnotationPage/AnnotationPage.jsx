import { AnnotationBookPage } from "../AnnotationBookPage/AnnotationBookPage";
import { Outlet } from "react-router-dom";

export const AnnotationPage = () => {
  return (
    <>
      <AnnotationBookPage />
      <Outlet />
    </>
  );
};
