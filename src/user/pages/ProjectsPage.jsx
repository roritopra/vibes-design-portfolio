import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../auth/firebase/firebase";
import { useEffect, useState } from "react";

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const projectsCollection = collection(database, "projects");
      const projects = await getDocs(projectsCollection);
      const projectsList = [];
      projects.forEach((project) => {
        projectsList.push(project.data());
      });
      setProjects(projectsList);
    })();
  }, []);

  return (
    <>
      <main className="bg-[#F3F3F3] border-x-2 border-solid border-[#383838]">
        <div className="border- border-[#373737] p-5">
          <h1 className="text-[#373737] text-7xl font-bagnard mb-5 mt-2 ml-5 maxLg:text-5xl maxMd:text-3xl maxMd:mt-4 maxSm:text-sm">
            Projects
          </h1>
        </div>

        <body className="">
          <main className="py-1 px-16">
            <div className="container mx-auto">
              <form className="rounded-lgp-1">
                <div className="mb-4 flex items-center">
                  <input
                    type="text"
                    className="font-darkestMedium w-full rounded border-gray-400 p-2"
                    placeholder="Search ..."
                  />
                  <button className="font-darkestBold ml-2 rounded bg-[#A8AFF0] p-2 text-white hover:bg-[#7f89e8] w-1/4">
                    Search
                  </button>
                </div>
                <div className="flex font-darkestBold">
                  <label className="mr-4">
                    <input type="checkbox" className="mr-2" />
                    UX
                  </label>
                  <label className="mr-4">
                    <input type="checkbox" className="mr-2" />
                    UI
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    DEV
                  </label>
                </div>
              </form>
            </div>
          </main>
        </body>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 p-5 font-darkestMedium pb-28">
          {projects.map((project, index) => {
            return (
              <Card
                key={index}
                className="w-full hover:bg-gray-100 cursor-pointer rounded-md"
              >
                <CardHeader floated={false} className="">
                  <img src={project.image} alt="front-page" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 font-darkestBlack"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-darkestBold"
                    textGradient
                  >
                    {project.tags.map((tag, index) => {
                      return (
                        <span key={index} className="mr-2">
                          {tag}
                        </span>
                      );
                    })}
                  </Typography>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
