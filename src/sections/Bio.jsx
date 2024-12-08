import { Linkedin, AtSign, GitBranch } from "lucide-react";

const Bio = () => {
  return (
    <section
      className="bg-white text-center md:text-left rounded-xl p-2
    md:p-5 shadow-md"
    >
      <img
        src="/profle-pic.p.png"
        alt="profile picture "
        className="h-32 w-32 raunded-full"
      />
      <h1 className="text-lg md:text-2xl font-bold mt-3">
        Dev WidiPurnamaSidi
      </h1>
      <p className="text-secondary-foreground py-2">my portofolio.</p>
      <div className="flex flex-row gap-2 mt-2">
        <a
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            className="text-blue-400 hover:text-blue-500
        cursor-pointer"
          />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AtSign
            className="text-pink-400 hover:text-pink-500
        cursor-pointer"
          />
        </a>
        <a
          href="https://github.com/widipurnamasidi/Widi-purnama-sidi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitBranch
            className="text-red-400 hover:text-red-500
        cursor-pointer"
          />
        </a>
      </div>
    </section>
  );
};
export default Bio;
