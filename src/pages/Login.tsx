import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import { FaGithub, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

function Login() {
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
                  Enter your credentials to access your account
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
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
                    Sign in

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.form>

              {/* DIVIDER */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-xs font-medium text-slate-500">
                  OR
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* GOOGLE */}
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
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