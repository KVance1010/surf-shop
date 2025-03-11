import Link from "next/link";
import { Suspense } from "react";
import { logout } from "@/actions/auth/logout";
import { currentUser } from "@/utils/auth-session";
import { navHeaders } from "@/utils/nav-links";

export const HamburgerMenu = async () => {
  const user = await currentUser();

  return (
    <label className="flex flex-col justify-center mb-1 gap-2 w-10 h-10 max-sm:w-7  cursor-pointer relative">
      <input id="hamburger-checkbox" type="checkbox" className="peer hidden group" />

      <div
        className="w-4/5 h-[2px] bg-secondary rounded-md transition-all duration-500 translate-x-[2px] 
                      peer-checked:rotate-45 peer-checked:translate-y-[10px] peer-checked:translate-x-[3px] max-sm:peer-checked:translate-y-[12px]"
      ></div>

      <div
        className="w-full h-[2px] bg-secondary rounded-md transition-all duration-500 
                      peer-checked:scale-x-0"
      ></div>

      <div
        className="w-4/5 h-[2px] bg-secondary rounded-md transition-all duration-500 origin-left translate-x-[2px] 
                      peer-checked:-rotate-45 peer-checked:translate-y-[1px] peer-checked:translate-x-[5px]"
      ></div>

      <section className="group absolute w-52 max-w-sm -left-16 max-sm:-left-32 top-[120%] bg-white text-primary rounded-lg overflow-hidden shadow-lg transition-all duration-300 max-h-0 peer-checked:max-h-[600px] peer-checked:border">
        <nav>
          <ul className="w-full">
            {navHeaders.map((header) => (
              <li className="w-full " key={header.title}>
                {header.href ? (
                  <Link
                    href={header.href}
                    className="block w-full pl-4 py-2 transition duration-200 border-b border-gray-200 "
                  >
                    {header.title}
                  </Link>
                ) : (
                  <ul key={header.title} className="w-full">
                    <li className="w-full p-2 border-b cursor-pointer  border-gray-200">
                      <label className="block w-full ">
                        <h4 className=" transition duration-200 cursor-pointer  p-2 flex justify-between w-full">
                          <span className="">{header.title}</span>{" "}
                          <span className="transition-transform group-[&.peer:checked]/submenu:rotate-180">
                            ▼
                          </span>
                        </h4>
                        <input
                          id={`sub-menu${header.title}`}
                          type="checkbox"
                          className="peer hidden"
                        />
                        <ul className="w-full overflow-hidden border-l-2 border-contrast pl-2 transition-all duration-300 max-h-0 peer-checked:max-h-60 peer-checked:mt-3">
                          {header.extendedMenu &&
                            header.extendedMenu.map((item) => (
                              <li key={item.title} className="w-full">
                                <Link
                                  href={item.href}
                                  className="block w-full p-2  transition duration-200 border-b border-gray-200"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </label>
                    </li>
                  </ul>
                )}
              </li>
            ))}
            <Suspense
              fallback={
                <>
                  <div className="w-full px-4 py-2 ">
                    <div className="block w-full px-4 py-2 rounded-lg transition duration-200 border-b bg-secondary text-center">
                      Login
                    </div>
                  </div>
                  <div className="w-full px-4 py-2 ">
                    <div className="block w-full px-4 py-2 rounded-lg text-secondary  transition duration-200 border-b bg-contrast text-center ">
                      Sign Up
                    </div>
                  </div>
                </>
              }
            >
              {user ? (
                <>
                  <li className="w-full px-4 py-2 ">
                    <Link
                      href="profile"
                      className="block w-full px-4 py-2 rounded-lg transition duration-200 border-b bg-secondary text-center"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="w-full px-4 py-2 ">
                    <form action={logout}>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 rounded-lg text-secondary  transition duration-200 border-b bg-contrast text-center "
                      >
                        Sign Out
                      </button>
                    </form>
                  </li>
                </>
              ) : (
                <>
                  <li className="w-full px-4 py-2 ">
                    <Link
                      href="login"
                      className="block w-full px-4 py-2 rounded-lg transition duration-200 border-b bg-secondary text-center"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="w-full px-4 py-2 ">
                    <Link
                      href="register"
                      className="block w-full px-4 py-2 rounded-lg text-secondary  transition duration-200 border-b bg-contrast text-center "
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </Suspense>
          </ul>
        </nav>
      </section>
    </label>
  );
};
