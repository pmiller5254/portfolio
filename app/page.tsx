import Image from "next/image";


export default function Home() {
  const namePlate = <div className="flex p-8 ml-4 font-mono text-2xl text-sky-200">Prince Miller</div>;

  const navItems = <ul className=" flex ml-8 pr-4 pl-4 font-mono divide-x">
    <li className="not-italic hover:italic m-10 pr-4 pl-4"><button>Resumè</button></li>
    <li className="not-italic hover:italic m-10 pr-4 pl-4"><button>Projects</button> </li>
    <li className="not-italic hover:italic m-10 pr-4 pl-4"><button>Contact</button></li>
  </ul>
  
  const aboutMe = <div></div>

  return (
    <body className="bg-gradient-to-r from-slate-500 to-sky-200">
      <nav className="flex border-b-teal-200 bg-gradient-to-r from-slate-500 to-sky-300 max-h-min">
        {namePlate}
        {navItems}
      </nav>
      <div className="border m-10 font-extrabold font-mono text-pretty text-6xl">About</div>
    </body>
  );
}
