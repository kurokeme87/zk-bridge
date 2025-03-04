import Link from "next/link";
import { tasks } from "../lib/tasks";
import { truncateText } from "@/components/helpers";
import EcosystemsAlphabetical from "@/components/ecosystem/EcosystemsAlphabetical";
import { MdArrowOutward } from "react-icons/md";

const Page = () => {
  return (
    <main className="w-full font-poppins relative">
      <section className="min-h-screen h-max relative flex flex-col  py-14 md:py-20 mt-10 bg-ecsytem_bg">
        <div className="mx-auto max-w-6xl w-full sm:pt-12 pb-20 px-3">
          <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-[32px] text-left w-full">
            zkBridge Ecosystem Campaign
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 h-full">
            {tasks.map((item, index) => (
              <Link
                href={`${item.partnerTask.link}`}
                target="_blank"
                className="w-full"
                key={index}
              >
                <div className="relative rounded-2xl overflow-hidden border gray-border flex flex-col">
                  <div className="w-full h-full">
                    <img
                      src={item.imgSrc || ""}
                      alt={item.taskName}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-[#000000B3] p-4 w-full">
                    <div className="w-full flex justify-start items-center gap-2">
                      <img
                        src={item.partnerTask.partnerLogo || ""}
                        alt={item.taskName}
                        className="rounded-full w-7 h-7"
                      />
                      <p className="text-[#FFFFFFB3] text-sm">
                        {item.partnerTask.partnerName}
                      </p>
                    </div>
                    <p className="text-white text-sm sm:text-base md:text-lg mt-2 font-medium">
                      {truncateText(item.taskName, 32)}
                    </p>
                    <div className="w-full flex justify-start items-center gap-2 mt-3">
                      {item.partnerTask.awards.map((award, idx) => (
                        <div
                          key={idx}
                          className={`${
                            award.awardType === "points"
                              ? "points-bg points-div"
                              : "border-cyan text-cyan"
                          } p-2 border font-medium rounded-md`}
                        >
                          <p
                            className={`${
                              award.awardType === "points" ? "points-bg" : ""
                            } text-xs`}
                          >
                            {award.awardValue}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <EcosystemsAlphabetical />

        {/* Join partner section */}
        <div className="flex flex-col justify-center items-center bg-black w-full">
          <div className="w-full py-[150px] flex flex-col justify-center items-center bg-black max-w-4xl mx-auto relative">
            <img
              src="/join-partner-bg-a7a790f9.png"
              alt="join-partner-bg-a7a790f9"
              className="absolute bottom-0 right-0 left-0"
            />
            <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-[32px] lg:text-5xl text-center w-full">
              Apply to Join zkBridge Ecosystem
            </h1>

            <h2 className="mt-8 md:text-lg font-poppins text-[#ffffffb3] w-full text-center">
              Join our ecosystem for the future of Web3 empowered by zkBridge
            </h2>

            <button className="max-w-sm w-full border rounded-full py-4 ease transition-all duration-500 text-white border-cyan hover:text-black hover:bg-cyan mt-14">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <a
        href="https://forms.gle/Rd4k28K86xqD9dBY6"
        target="_blank"
        rel="noreferrer"
        className="sc-camqpD mlcVM"
      >
        <span>
          <i>
            Join zkBridge Ecosystem
            <MdArrowOutward />
          </i>
        </span>
      </a>
    </main>
  );
};

export default Page;
