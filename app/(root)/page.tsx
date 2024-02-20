import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <div className="bg-black/20 rounded-2xl p-2 border-4 border-[#CBC4FA]">
        <section className="bg-gradient-to-r from-[#7B5D9D]/20 to-[#8C80DA]/20 py-5 md:py-10 shadow-[#9e7eb9]/20 shadow-xl rounded-xl">
          <div className="container mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="text-white text-4xl font-bold">Rmutp-Ticket</h1>
              <p className="text-white text-lg leading-relaxed">
                RMUTP-Ticket ประตูสู่โลกแห่งกิจกรรมมหาวิทยาลัย
                แพลตฟอร์มจำหน่ายตั๋วออนไลน์ <br/> ที่มอบความสะดวก รวดเร็ว และปลอดภัย
                ให้คุณสามารถเข้าถึงกิจกรรมหลากหลายรูปแบบที่จัดขึ้นโดยมหาวิทยาลัยเทคโนโลยีราชมงคลพระนครได้ง่ายกว่าที่เคย
              </p>
              
            </div>

            <Image
              src="/assets/images/hero.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-[70vh] 2xl:max-h-[50vh] object-contain object-center hover:scale-104 transition-transform duration-500 ease-in-out shadow-2xl rounded-2xl shadow-[#9e7eb9] border-4 border-[#593185]/50"
            />
          </div>
        </section>

        <section
          id="events"
          className="wrapper my-8 flex flex-col gap-8 md:gap-12"
        >
          <h2 className="h2-bold m-auto text-white">Now Events</h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Search />
            <CategoryFilter />
          </div>

          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </section>
      </div>
    </>
  );
}
