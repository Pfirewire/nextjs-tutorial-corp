import Hero from "@/components/hero";
import reliabilityImg from "/public/images/reliability.jpg";

export default function ReliabilityPage() {
    return (
        <Hero
            imgData={reliabilityImg}
            imgAlt="welder"
            title="Super High Reliability Hosting"
        />
    );
}