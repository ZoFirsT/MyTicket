import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="pb-10">
      <footer className="">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row text-white">
        <Link href='/'>
          <Image 
            src="/assets/images/logocolor.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="text-[#F3E8FF] font-bold">2024 RmutpTeam(TC64). All Rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer