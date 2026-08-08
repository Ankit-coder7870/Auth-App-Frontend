import { useState } from "react";
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
    <div className="relative min-h-screen overflow-hidden bg-[#070707] text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">

        <motion.div
          className="absolute left-[15%] top-[10%] h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[140px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[5%] right-[10%] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[130px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Main */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="w-full max-w-[430px]"
        >

          <Card
            className="
              overflow-hidden
              rounded-3xl
              border-white/[0.08]
              bg-white/[0.035]
              shadow-2xl
              shadow-black/50
              backdrop-blur-2xl
            "
          >

            <CardContent className="p-8 sm:p-10">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-8"
              >
                <h1 className="text-3xl font-semibold tracking-tight">
                  Welcome back
                </h1>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Enter your credentials to access your account
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="space-y-5"
              >

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm text-zinc-300"
                  >
                    Email
                  </Label>

                  <div className="relative">
                    <Mail
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-zinc-500
                      "
                    />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="
                        h-11
                        border-white/[0.08]
                        bg-black/20
                        pl-10
                        text-white
                        placeholder:text-zinc-600
                        focus-visible:border-violet-500/50
                        focus-visible:ring-violet-500/20
                      "
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="password"
                      className="text-sm text-zinc-300"
                    >
                      Password
                    </Label>

                    <button
                      type="button"
                      className="
                        text-xs
                        text-zinc-500
                        transition-colors
                        hover:text-violet-400
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
                        h-4
                        w-4
                        -translate-y-1/2
                        text-zinc-500
                      "
                    />

                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="
                        h-11
                        border-white/[0.08]
                        bg-black/20
                        pl-10
                        pr-10
                        text-white
                        placeholder:text-zinc-600
                        focus-visible:border-violet-500/50
                        focus-visible:ring-violet-500/20
                      "
                    />

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.85 }}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-zinc-500
                        hover:text-zinc-200
                      "
                    >
                      
                    </motion.button>
                  </div>
                </div>

                {/* Login button */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="
                      h-11
                      w-full
                      bg-white
                      font-medium
                      text-black
                      hover:bg-zinc-200
                    "
                  >
                    Sign in

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

              </motion.form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/[0.08]" />

                <span className="text-[11px] uppercase tracking-wider text-zinc-600">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-white/[0.08]" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">

                {/* Google */}
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="
                      h-11
                      w-full
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-zinc-300
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </motion.div>

                {/* GitHub */}
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="
                      h-11
                      w-full
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-zinc-300
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </motion.div>

              </div>

              {/* Sign up */}
              <p className="mt-8 text-center text-sm text-zinc-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-zinc-200 transition hover:text-violet-400"
                >
                  Create account
                </button>
              </p>

            </CardContent>
          </Card>

          {/* Security text */}
          <p className="mt-5 text-center text-xs text-zinc-700">
            Your connection is encrypted and secure
          </p>

        </motion.div>
      </div>
    </div>
  );
}

export default Login