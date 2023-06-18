import { NavCard } from "@components"

export default function Home() {
  return (
    <>
      <section className='text-center py-12'>
        <h1 className='text-5xl font-extrabold'>Welcome to Taskify!</h1>
        <h2 className='text-5xl font-extrabold pt-4'>
          <span className='orange_gradient'>
            The to do list app for the modern age.
          </span>
        </h2>
        <p className='pt-14 text-2xl max-w-3xl mx-auto font-semibold'>
          Taskify is a simple to do list app that helps you get stuff done. It
          is built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </section>
      {/* <section className="py-12 flex items-center justify-center gap-8">
        <NavCard image="/images/create.jpeg" link="/tasks/create" text="add task"/>
        <NavCard image="/images/list.jpg" link="/" text="my tasks"/>
      </section> */}
    </>
  )
}
