import Image from "next/image";
import photo from "/app/Photo.jpeg"


export default function Home() {
  const namePlate = <div className="flex p-8 ml-4 font-mono text-2xl text-sky-200">Prince Miller</div>;

  const navItems = <ul className=" columns-3 flex ml-8 pr-4 pl-4 font-mono divide-x">
    <li className="not-italic hover:italic m-10 pr-4 pl-4"><button>About</button></li>
    <li className="not-italic hover:italic m-10 pr-4 pl-4"><button>Projects</button> </li>
    <li className="not-italic hover:italic m-10 pr-4 pl-4"><button>Contact</button></li>
  </ul>
  
  const aboutMe = <div className="flex columns-2 container max-w-full bg-cyan-100">
    <div className="l-0 shadow-md">
      <Image width={400} height={300} src={photo} alt="photo" priority />
    </div>
    <div className="container mx-auto"> <p className="m-10 font-extrabold font-mono text-pretty text-6xl text-center text-stone-700">About Me</p>

      <p className="m-2 font-mono text-balance text-center"> I'm Prince, a Software Engineer with three years experience, based in New York City. I love to code, and am  extremely passionate about creating equity in the tech space. You can find me on <a className="underline decoration-sky-500" href="https://www.linkedin.com/in/pmiller5254/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a className="underline decoration-stone-500" href="https://github.com/pmiller5254" target="_blank" rel="noopener noreferrer"> GitHub</a>. I recieved my Bachelor's in Electrical Engineering in 2019, and completed General Assembly's Software Engineering Immersive Bootcamp in 2021. Outside of work, I like to watch sports and stay active.</p>
    </div>
  </div>

  return (
    <body>
      <nav className="flex border-b-teal-200 bg-gradient-to-r from-slate-500 to-sky-300 max-h-min">
        {namePlate}
        {navItems}
      </nav>
      {aboutMe}
      
      <div className="flex container columns-auto border bg-blue-500">

        


      </div>

    </body>
  );
}
