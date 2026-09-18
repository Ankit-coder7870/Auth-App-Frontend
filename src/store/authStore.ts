import type LoginData from "@/models/LoginData";
import type LoginResponseData from "@/models/LoginResponseData";
import type User from "@/models/User";
import { loginUser } from "@/services/AuthService";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const LOCAL_KEY = "app_state";

type AuthState = {
  accessToken: string | null;
  user: User | null;
  authStatus: boolean;
  authLoading: boolean;
  login: (loginData: LoginData) => Promise<LoginResponseData>;
  //logout: (silent?: boolean) => void;
  checkLogin: () => boolean | undefined;
  changeLocalLoginData: (
    accessToken: string,
    user: User,
    authStatus: boolean,
  ) => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,
      authStatus: false,
      authLoading: false,

      changeLocalLoginData: (accessToken, user, authStatus) => {
        set({ accessToken, user, authStatus });
      },

      login: async (loginData: LoginData) => {
        set({ authLoading: true });
        try {
          const response = await loginUser(loginData);
          console.log(response);
          set({
            accessToken: response.accessToken,
            user: response.user,
            authStatus: true,
            authLoading: false,
          });
          return response;
        } catch (error) {
          throw error;
        } finally {
          set({ authLoading: false });
        }
      },

    //   logout: (silent = false) => {
    //     try {
    //       set({ authLoading: true });
    //      // await logoutUser();
    //     } catch (error) {
    //       console.error("Logout failed:", error);
    //     } finally {
    //       set({ authLoading: false });
    //     }
    //     set({
    //       accessToken: null,
    //       user: null,
    //       authStatus: false,
    //       authLoading: false,
    //     });
    //   },
      checkLogin: () => {
        if (get().accessToken && get().authStatus) return true;
        else return false;
      },
    }),

    { name: LOCAL_KEY },
  ),
);
export default useAuthStore;
