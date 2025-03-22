import { useRouter } from "next/navigation";
import { NavigationLinks } from "../config/index";

export const useRedirect = () => {
  const router = useRouter();

  const redirectAfterLogin = (role: "admin" | "user") => {
    if (role === "admin") {
      router.push(NavigationLinks.Home);
    } else {
      router.push(NavigationLinks.Home);
    }
  };

  const redirectToLogin = (from?: string) => {
    const loginUrl = from
      ? `${NavigationLinks.Home}?from=${encodeURIComponent(from)}`
      : NavigationLinks.Home;
    router.push(loginUrl);
  };

  const redirectAfterLogout = () => {
    router.push(NavigationLinks.Home);
  };

  return {
    redirectAfterLogin,
    redirectToLogin,
    redirectAfterLogout,
  };
};
