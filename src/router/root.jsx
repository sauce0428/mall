import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Login = lazy(() => import("../pages/Login"));
//**** todo *****
const ListPage = lazy(() => import("../pages/todo/ListPage"));
const ReadPage = lazy(() => import("../pages/todo/ReadPage"));
const Modify = lazy(() => import("../pages/todo/Modify"));
const Add = lazy(() => import("../pages/todo/AddPage"));
//******* product *********
const ProductListPage = lazy(() => import("../pages/product/ListPage"));
const ProductAddPage = lazy(() => import("../pages/product/AddPage"));
const ProductReadPage = lazy(() => import("../pages/product/ReadPage"));
const ProductModifyPage = lazy(() => import("../pages/product/ModifyPage"));
//****** member **********
const LoginPage = lazy(() => import("../pages/member/LoginPage"));
const LogoutPage = lazy(() => import("../pages/member/LogoutPage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/todo/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ListPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/modify/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <Modify />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ReadPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/add",
    element: (
      <Suspense fallback={<Loading />}>
        <Add />
      </Suspense>
    ),
  },
  {
    path: "/product/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductListPage />
      </Suspense>
    ),
  },
  {
    path: "/product/add",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductAddPage />
      </Suspense>
    ),
  },
  {
    path: "/product/read/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductReadPage />
      </Suspense>
    ),
  },
  {
    path: "/product/modify/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductModifyPage />
      </Suspense>
    ),
  },
  {
    path: "/member/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/member/logout",
    element: (
      <Suspense fallback={<Loading />}>
        <LogoutPage />
      </Suspense>
    ),
  },
]);
export default root;
