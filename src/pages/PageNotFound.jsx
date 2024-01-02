import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center mt-96 ">
      <h1 className="text-6xl font-roboto">Page not Found 😭</h1>
      <Button design="button" onclick={() => navigate("/")}>
        Back home
      </Button>
    </div>
  );
}

export default PageNotFound;
