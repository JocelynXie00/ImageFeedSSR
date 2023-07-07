import { HomeProps } from "../Interface";
import Home, { getServerSideProps } from "./home";

const IndexPage: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <Home {...props} />
    </div>
  );
};

export { getServerSideProps };
export default IndexPage;
