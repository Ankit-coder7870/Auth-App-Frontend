import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "./ui/button";
import { loginUser } from "@/services/AuthService";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

function OAuth2Button() {
  return (
    <div>
      {/* GOOGLE */}
      <NavLink
        to={`${
          import.meta.env.VITE_BASE_URL || "http://localhost:8082"
        }/oauth2/authorization/google`}
        className={"block"}
      >
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
      </NavLink>

      {/* GITHUB */}
      <NavLink
        to={`${
          import.meta.env.VITE_BASE_URL || "http://localhost:8082"
        }/oauth2/authorization/github`}
        className={"block"}
      >
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
      </NavLink>
    </div>
  );
}

export default OAuth2Button;
