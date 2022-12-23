import { getSession } from "next-auth/react";
import { ParsedUrlQuery } from "querystring";
import { Session } from "next-auth";
import { GetServerSidePropsContext, PreviewData } from "next";
import { getUser } from "@services/user";

const defaultAuthenticatedUser = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  session: Session
) => {
  if (!session.user || !session.user.email) {
    // this should never happen, since this function should only be called, but it is still a good pseudo test
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
      props: { message: "No user email found" },
    };
  }

  const res = await getUser(session.user.email);

  if (res.status === 404) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
      props: { message: "User not found" },
    };
  }

  if (res.status !== 200) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
      props: { message: "CASE NOT HANDLED" },
    };
  }

  if (context.resolvedUrl === "/") {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
      props: { session },
    };
  }
  return {
    props: { session },
  };
};

const defaultNotAuthenticatedUser = (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  if (context.resolvedUrl !== "/")
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  return {
    props: {},
  };
};

const withServerSideAuth = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
  authenticatedUser: Function = defaultAuthenticatedUser,
  notAuthenticatedUser: Function = defaultNotAuthenticatedUser
) => {
  const session = await getSession(context);
  return session
    ? await authenticatedUser(context, session)
    : notAuthenticatedUser(context);
};

export default withServerSideAuth;
