import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, CheckCircle2Icon } from "lucide-react";

import { FaGithub, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginUser } from "@/services/AuthService";
import type  LoginData  from "@/models/LoginData";
import { useNavigate } from "react-router";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import useAuthStore from "@/store/authStore";

function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  //handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  //handle form submission
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    // Validate input fields
    if (loginData.email.trim() === "") {
      toast.error("email is required !");
      return;
    }

    if (loginData.password.trim() === "") {
      toast.error("Password is required !");
      return;
    }

    // calling the loginUser function from AuthService.ts
    try {
      setIsLoading(true);
      //const userInfo = await loginUser(loginData);
      const userInfo = await login(loginData);
      toast.success("Login successful");
      console.log(userInfo);
      setLoginData({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } catch (error: any) {
      if (error?.status === 400) {
        setError(error);
      } else {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="h-[calc(100dvh-64px)] min-h-0 overflow-hidden bg-black">
      {/* Main login area */}
      <div className="flex h-full w-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full max-w-[450px]"
        >
          <Card
            className="
              w-full
              rounded-xl
              border border-white/15
              bg-[#101010]
              shadow-2xl
              shadow-black/50
            "
          >
            <CardContent
              className="
                px-7
                py-6
                sm:px-8
                sm:py-7
              "
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 text-center"
              >
                <h1
                  className="
                    text-[30px]
                    font-bold
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-[32px]
                  "
                >
                  Welcome back
                </h1>

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[330px]
                    text-sm
                    leading-5
                    text-slate-400
                  "
                >
                  Enter your credentials to access account
                </p>
              </motion.div>

              {/* error */}
              {error && (
                <div className="text-red-500 text-sm">
                  <Alert variant="destructive" className="mb-4">
                    <CheckCircle2Icon />
                    <AlertTitle>
                      {" "}
                      {error?.response
                        ? error?.response?.data?.message
                        : error?.message}
                    </AlertTitle>
                  </Alert>
                </div>
              )}

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {/* EMAIL */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-200"
                  >
                    Email
                  </Label>

                  <div className="relative">
                    <Mail
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-[18px]
                        w-[18px]
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <Input
                      id="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="
                        h-10
                        rounded-lg
                        border border-white/15
                        bg-[#1a1a1a]
                        pl-10
                        text-sm
                        text-white
                        placeholder:text-slate-500
                        shadow-none
                        focus-visible:border-white/40
                        focus-visible:ring-1
                        focus-visible:ring-white/20
                      "
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-slate-200"
                    >
                      Password
                    </Label>

                    <button
                      type="button"
                      className="
                        text-xs
                        text-slate-500
                        transition-colors
                        hover:text-white
                      "
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <Lock
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-[18px]
                        w-[18px]
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <Input
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleInputChange}
                      type="password"
                      placeholder="••••••••"
                      required
                      className="
                        h-10
                        rounded-lg
                        border border-white/15
                        bg-[#1a1a1a]
                        pl-10
                        text-sm
                        text-white
                        placeholder:text-slate-500
                        shadow-none
                        focus-visible:border-white/40
                        focus-visible:ring-1
                        focus-visible:ring-white/20
                      "
                    />
                  </div>
                </div>

                {/* LOGIN BUTTON */}
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.985 }}
                  className="pt-1"
                >
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className="
                      h-10
                      w-full
                      rounded-full
                      border-0
                      bg-white
                      text-sm
                      font-medium
                      text-black
                      shadow-none
                      hover:bg-slate-200
                    "
                  >
                    {isLoading ? (
                      <>
                        <Spinner /> please wait...
                      </>
                    ) : (
                      "Login"
                    )}

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.form>

              {/* DIVIDER */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-xs font-medium text-slate-500">OR</span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* GOOGLE */}
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
                <Button
                  type="button"
                  variant="outline"
                  className="
                    h-10
                    w-full
                    rounded-full
                    border border-white/15
                    bg-[#1a1a1a]
                    text-sm
                    font-medium
                    text-white
                    hover:bg-[#222222]
                    hover:text-white
                  "
                >
                  <FaGoogle className="mr-2 h-4 w-4" />
                  Continue with Google
                </Button>
              </motion.div>

              {/* GITHUB */}
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="mt-3"
              >
                <Button
                  type="button"
                  variant="outline"
                  className="
                    h-10
                    w-full
                    rounded-full
                    border border-white/15
                    bg-[#1a1a1a]
                    text-sm
                    font-medium
                    text-white
                    hover:bg-[#222222]
                    hover:text-white
                  "
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}

export default Login;
