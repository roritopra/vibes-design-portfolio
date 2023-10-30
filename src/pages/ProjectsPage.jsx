import data from "./dataProjects.json";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";


export function ProjectsPage() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-[#373737] text-7xl font-bagnard mb-10 mt-24 pr-4 maxLg:text-5xl maxMd:text-3xl maxSm:text-sm">
          Projects
        </h1>
      </div>

      <div className="flex items-center justify-center p-5">
        <div className="rounded-lg p-5 w-10/12 maxMd:w-full maxSm:p-1">
          <div className="flex bg-[#373737] p-5 rounded-lg maxSm:p-2">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="font-darkestRegular w-full bg-white pl-2 text-base  outline-0"
              placeholder=""
              id=""
            />
            <input
              type="button"
              value="Search"
              className="font-darkestLight cursor-pointer bg-[#EE7E3F] p-2 rounded-tr-[4px] rounded-br-[4px] text-white hover:bg-[#ae683f] transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 p-10 mb-48">
        {data.map((project) => {
          return (
            <Card key={project.id} className="w-full hover:scale-110 transition-all cursor-pointer">
              <CardHeader floated={false} className="">
                <img className="w-full object-contain" src={project.image} />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2 font-darkestBold">
                  {project.title}
                </Typography>
                <div className="flex gap-5 justify-center items-center">
                  <Typography
                    color="blue-gray"
                    className="font-medium gap-8"
                    textGradient
                  >
                    {project.tags}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
