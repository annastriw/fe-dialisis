import HomeComunity from "./HomeComunity";
import HomeFAQ from "./HomeFAQ";
import HomeIntroduction from "./HomeIntroduction";
import HomeJumbotron from "./HomeJumbotron";
import HomeScreeningInvitation from "./HomeScreeningInvitation";

export default function HomeWrapper() {
  return (
    <div className="pad-x-xl space-y-4 md:space-y-6 lg:space-y-8">
      <HomeJumbotron />
      <HomeIntroduction />
      <HomeScreeningInvitation />
      <HomeComunity />
      <HomeFAQ />
    </div>
  );
}
