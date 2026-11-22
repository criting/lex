import { ConsultationInvite } from "@/components/home/consultation-invite";
import { CounselRoster } from "@/components/home/counsel-roster";
import { Hero } from "@/components/home/hero";
import { InsightsStrip } from "@/components/home/insights-strip";
import { PracticeIndex } from "@/components/home/practice-index";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeIndex />
      <CounselRoster />
      <InsightsStrip />
      <ConsultationInvite />
    </>
  );
}
