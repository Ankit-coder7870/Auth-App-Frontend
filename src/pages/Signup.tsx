import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/services/AuthService";

function Signup() {
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

//handling form changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setData((value) => ({
    ...value,
    [e.target.name]: e.target.value,
  }));
  
  
}

//handling form submission
const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if(data.name.trim() === ""){
    toast.error("Name is required");
    return;
  }

  if(data.email.trim() === ""){
    toast.error("Email is required");
    return;
  }

  if(data.password.trim() === ""){
    toast.error("Password is required");
    return;
  }

  try {
    setLoading(true);
    const response = await registerUser(data);
    console.log(response);
    toast.success("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    toast.error("Failed to register user");
  } finally {
    setLoading(false);
  }

}

  return (
    <main className="h-[calc(100dvh-64px)] overflow-hidden bg-black">
      <div className="flex h-full w-full items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-[485px]"
        >
          <Card
            className="
              w-full
              rounded-xl
              border border-white/15
              bg-[#101010]
              shadow-2xl shadow-black/50
            "
          >
            {/* HEADER */}
            <CardHeader className="space-y-1 px-7 pb-5 pt-5 text-center">
              <CardTitle
                className="
                  text-[28px]
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                Create Your Account
              </CardTitle>

              <CardDescription
                className="
                  mx-auto
                  max-w-[330px]
                  text-sm
                  leading-5
                  text-slate-400
                "
              >
                Join the next-generation authentication
                <br />
                platform
              </CardDescription>
            </CardHeader>

            {/* CONTENT */}
            <CardContent className="px-7 pb-5">
              <form onSubmit={handleFormSubmit} className="space-y-3">

                {/* NAME */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-200"
                  >
                    Name
                  </Label>

                  <div className="relative">
                    <User
                      className="
                        absolute left-3 top-1/2
                        h-[17px] w-[17px]
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <Input
                      id="name"
                      type="text"
                      placeholder="John"
                      required
                      name="name"
                      value={data.name}
                      onChange={handleInputChange}
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

                {/* EMAIL */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-200"
                  >
                    Email
                  </Label>

                  <div className="relative">
                    <Mail
                      className="
                        absolute left-3 top-1/2
                        h-[17px] w-[17px]
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
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
                <div className="space-y-1.5">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-200"
                  >
                    Password
                  </Label>

                  <div className="relative">
                    <Lock
                      className="
                        absolute left-3 top-1/2
                        h-[17px] w-[17px]
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <Input
                      id="password"
                      name="password"
                      value={data.password}
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

                {/* SIGN UP */}
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
                      bg-white
                      text-sm
                      font-medium
                      text-black
                      hover:bg-slate-200
                    "
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </form>

              {/* DIVIDER */}
              <div className="my-4 flex items-center gap-3">
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
                className="mt-2"
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

export default Signup;