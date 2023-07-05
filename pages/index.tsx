import { HomeProps } from "../Interface/interfaces";
import Home, { getServerSideProps } from "./components/Home";

const IndexPage: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <Home {...props} />
    </div>
  );
};

export { getServerSideProps };
export default IndexPage;
