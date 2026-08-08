import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Signup() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Purple glow */}
        <motion.div
          className="
            absolute
            left-[10%]
            top-[15%]
            h-72
            w-72
            rounded-full
            bg-purple-600/20
            blur-[120px]
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue glow */}
        <motion.div
          className="
            absolute
            bottom-[10%]
            right-[10%]
            h-80
            w-80
            rounded-full
            bg-blue-600/20
            blur-[130px]
          "
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.45, 0.25, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.3) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.3) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =========================================
          SIGNUP CONTAINER
      ========================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="w-full max-w-md"
        >
          <Card
            className="
              relative
              overflow-hidden
              border-white/10
              bg-white/[0.035]
              shadow-2xl
              shadow-purple-950/30
              backdrop-blur-2xl
            "
          >
            {/* Animated border */}
            <motion.div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                border
                border-purple-500/20
              "
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <CardHeader className="relative space-y-3 pb-6 text-center">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10"
              >
                <User className="h-6 w-6 text-purple-400" />
              </motion.div>

              <CardTitle
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Create an account
              </CardTitle>

              <CardDescription className="text-sm text-slate-400">
                Join us and start your journey today
              </CardDescription>
            </CardHeader>

            <CardContent className="relative">
              <form  className="space-y-4">
                {/* =================================
                    NAME
                ================================== */}

                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm text-slate-200"
                  >
                    Full name
                  </Label>

                  <div className="relative">
                    <User
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-purple-400
                      "
                    />

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="
                        h-11
                        border-white/10
                        bg-white/[0.04]
                        pl-10
                        text-white
                        placeholder:text-slate-600
                        transition-all
                        focus-visible:border-purple-500
                        focus-visible:ring-purple-500/20
                      "
                    />
                  </div>
                </div>

                {/* =================================
                    EMAIL
                ================================== */}

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm text-slate-200"
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
                        text-purple-400
                      "
                    />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="
                        h-11
                        border-white/10
                        bg-white/[0.04]
                        pl-10
                        text-white
                        placeholder:text-slate-600
                        transition-all
                        focus-visible:border-purple-500
                        focus-visible:ring-purple-500/20
                      "
                    />
                  </div>
                </div>

                {/* =================================
                    PASSWORD
                ================================== */}

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm text-slate-200"
                  >
                    Password
                  </Label>

                  <div className="relative">
                    <Lock
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-purple-400
                      "
                    />

                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      required
                      className="
                        h-11
                        border-white/10
                        bg-white/[0.04]
                        pl-10
                        pr-10
                        text-white
                        placeholder:text-slate-600
                        transition-all
                        focus-visible:border-purple-500
                        focus-visible:ring-purple-500/20
                      "
                    />

                    <button
                      type="button"
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                        transition
                        hover:text-white
                      "
                    >
                     
                    </button>
                  </div>
                </div>

                {/* =================================
                    CONFIRM PASSWORD
                ================================== */}

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm text-slate-200"
                  >
                    Confirm password
                  </Label>

                  <div className="relative">
                    <Lock
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-purple-400
                      "
                    />

                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="
                        h-11
                        border-white/10
                        bg-white/[0.04]
                        pl-10
                        pr-10
                        text-white
                        placeholder:text-slate-600
                        transition-all
                        focus-visible:border-purple-500
                        focus-visible:ring-purple-500/20
                      "
                    />

                    <button
                      type="button"
                      
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                        transition
                        hover:text-white
                      "
                    >
                     
                    </button>
                  </div>
                </div>

                {/* =================================
                    SIGNUP BUTTON
                ================================== */}

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-1"
                >
                  <Button
                    type="submit"
                    className="
                      h-11
                      w-full
                      border-0
                      bg-gradient-to-r
                      from-purple-600
                      to-blue-600
                      font-semibold
                      shadow-lg
                      shadow-purple-600/20
                      transition-all
                      hover:from-purple-500
                      hover:to-blue-500
                      hover:shadow-purple-600/40
                    "
                  >
                    Create account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>

              {/* =================================
                  DIVIDER
              ================================== */}

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />

                <span className="text-[11px] uppercase tracking-wider text-slate-600">
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* =================================
                  GOOGLE / GITHUB
              ================================== */}

              <div className="grid grid-cols-2 gap-3">
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
                      border-white/10
                      bg-white/[0.025]
                      text-slate-300
                      hover:bg-white/[0.07]
                      hover:text-white
                    "
                  >
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </motion.div>

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
                      border-white/10
                      bg-white/[0.025]
                      text-slate-300
                      hover:bg-white/[0.07]
                      hover:text-white
                    "
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </motion.div>
              </div>

              {/* =================================
                  LOGIN LINK
              ================================== */}

              <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button
                  type="button"
                  className="
                    font-medium
                    text-purple-400
                    transition
                    hover:text-purple-300
                  "
                >
                  Sign in
                </button>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}

export default Signup