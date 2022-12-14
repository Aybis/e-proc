import {
  BellIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="relative bg-white shadow-lg shadow-gray-200/50 border-l border-zinc-50 z-10 h-20 box-border">
      <section className="relative gap-8 flex justify-between py-4 pr-8 pl-4 items-center ">
        {/* User */}
        <div className="relative w-fit text-zinc-800 leading-relaxed tracking-wide">
          <p className="tex-sm font-light">Welcome back, </p>
          <h1 className="text-lg font-semibold">Abdul Muchtar Astria</h1>
        </div>
        {/* Search Bar */}
        <div className="relative w-1/2">
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search IO"
              className="pl-12 px-4 py-2 text-base w-full font-medium bg-white border-2 border-gray-200 rounded-md placeholder:text-gray-500"
            />
            <div className="absolute top-2.5 left-3">
              <MagnifyingGlassIcon className="h-6 text-gray-500" />
            </div>
          </div>
        </div>
        {/* Icon */}
        <div>
          <div className="relative flex gap-4">
            <div className="group relative p-2 rounded-lg bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-500 hover:text-blue-500 cursor-pointer">
              <Squares2X2Icon className="h-6 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group relative p-2 rounded-lg bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-500 hover:text-blue-500 cursor-pointer">
              <BellIcon className="h-6 group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="group relative p-2 rounded-lg bg-transparent hover:bg-zinc-100 transition-all duration-300 text-zinc-500 hover:text-blue-500 cursor-pointer">
              <UserIcon className="h-6 group-hover:scale-105 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
