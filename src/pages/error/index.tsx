import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <section className="section-dark Error404">
      <div className="container Error404__content">
        <h1>Page Not Found</h1>
        <Button onClick={() => navigate("/")}>
          Take Me Home
        </Button>
      </div>
    </section>
  );
};

export default Error404Page;