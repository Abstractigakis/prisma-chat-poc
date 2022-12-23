import withServerSideAuth from "@middleware/withServerSideAuth";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { Session } from "next-auth";
import { ParsedUrlQuery } from "querystring";

export interface AppUser {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
  email_verified: boolean;
  iss: string;
  azp: string;
  aud: string;
  sub: string;
  at_hash: string;
  oauth_picture: string;
  locale: string;
  iat: number;
  exp: number;
  random_string: string;
}
export interface IDashboardProps {
  user: AppUser;
  session: Session;
}

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export default DashboardPage;

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
// ) => {
//   return await withServerSideAuth(context);
// };
