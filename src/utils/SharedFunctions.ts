import { useAppSelector } from "@/redux/hook";

export const UseGetUser = () => {
  const { user } = useAppSelector((state) => state.auth);

  return user;
};

export const GetUserRole = () => {
  const { token } = useAppSelector((state) => state.auth);

  return token;
};
