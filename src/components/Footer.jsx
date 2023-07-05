function Footer() {
  return (
    <footer className=" font-poppins md:text-sm text-[#A9A9A9] text-xs md:text-center pt-10">
      Created by{" "}
      <a
        href="https://github.com/Bagse"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline font-bold hover:text-[#F7542E]"
      >
        Bagse
      </a>{" "}
      -{" "}
      <a
        href="https://devchallenges.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#F7542E]"
      >
        devChallenges.io
      </a>
    </footer>
  );
}

export default Footer;
