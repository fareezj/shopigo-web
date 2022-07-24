import type { NextPage } from "next";
import { fetchLandingInventory } from "../services/LandingService";
import Landing from "./landing";

const Home: NextPage = (props) => {
  const { landingPageData } = props;
  return (
    <div>
      <Landing inventoryList={landingPageData} />
    </div>
  );
};

export async function getServerSideProps() {
  const landingPageData = await fetchLandingInventory();

  return { props: { landingPageData } };
}

export default Home;
