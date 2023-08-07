import AuthCheck from "@/components/AuthCheck";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <>
      <section className="w-full flex justify-center items-center flex-col">
        <h1 className="mt-5 text-5xl sm:text-6xl text-gray-900">Stay curious.</h1>
        <h3 className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl">Discover blogs and stories from writers on any topic.</h3>
        <Feed />
      </section>
      <AuthCheck children={'auth checks passed'}/>
    </>
  )
}
