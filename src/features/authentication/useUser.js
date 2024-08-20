import { useQuery } from "@tanstack/react-query";
import { getCurretnUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurretnUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
