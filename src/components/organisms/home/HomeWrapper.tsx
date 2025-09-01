import HomeComunity from "./HomeComunity";
import HomeFAQ from "./HomeFAQ";
import HomeIntroduction from "./HomeIntroduction";
import HomeJumbotron from "./HomeJumbotron";
import HomeScreeningInvitation from "./HomeScreeningInvitation";

export default function HomeWrapper() {
  return (
    <div className="pad-x-xl space-y-8 md:space-y-10 lg:space-y-12">
      <HomeJumbotron />
      <HomeIntroduction />
      <HomeScreeningInvitation />
      <HomeComunity />
      <HomeFAQ />
    </div>
  );
}
