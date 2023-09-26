import { LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const features = [
  {
    name: "Pushh to deploy.",
    description:
      "For creating and maintaining a digital presence, everything you need is offered here.",
    icon: CheckBadgeIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "From ANIMATION, EDITING to covering all SOCIAL needs for a brand.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "TRA is the newbie with a difference. With a strong business idea and innovative thinking, the company aims to rule the digital world.",
    icon: ServerIcon,
  },
];

export default function AboutComp() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-[24px] text-center  md:text-[32px] ">
                <span className="bg-clip-text mr-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
                  About
                </span>
                Us{" "}
              </h2>

              <p className="mt-6 text-[15px] capitalize -tracking-tight text-justify  text-white/80">
                we would like to introduce Technorate Animations as a
                comprehensive solution provider of your digital needs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline  ">
                      <CheckBadgeIcon
                        className="absolute left-1 top-1 h-5 w-5 text-pink-400"
                        aria-hidden="true"
                      />
                    </dt>{" "}
                    <dd className="inline text-white/80">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
