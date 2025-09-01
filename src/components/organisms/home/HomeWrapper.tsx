import HomeComunity from "./HomeComunity";
import HomeFAQ from "./HomeFAQ";
import HomeIntroduction from "./HomeIntroduction";
import HomeJumbotron from "./HomeJumbotron";
import HomeScreeningInvitation from "./HomeScreeningInvitation";

export default function HomeWrapper() {
  return (
    <div className="pad-x-xl space-y-2 md:space-y-4 lg:space-y-6">
      <HomeJumbotron />
      <HomeIntroduction />
      <HomeScreeningInvitation />
      <HomeComunity />
      <HomeFAQ />
    </div>
  );
}
