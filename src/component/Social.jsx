import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hook/useAuth";

const Social = () => {
  const { googleUser } = useAuth()
  const navigate = useNavigate();
  const location = useLocation()

  const handleSocialLink = (media) => {
    media()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="flex items-center justify-center py-2">
      <button
        onClick={() => handleSocialLink(googleUser)}
        className="flex gap-1 text-white p-2 border rounded-md"
        type="button"
        data-ripple-dark="true"
      >
        <FcGoogle className="text-2xl"></FcGoogle>
         Google
      </button>
    </div>
  );
};

export default Social;
