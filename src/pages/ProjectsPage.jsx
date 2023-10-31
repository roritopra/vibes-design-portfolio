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
        <Card className="w-full hover:bg-gray-100 cursor-pointer rounded-md">
          <CardHeader floated={false} className="">
            <img src="./imgs/project1.png" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-darkestBlack"
            >
              Starbucks OOH experience
            </Typography>
            <Typography
              color="blue-gray"
              className="font-darkestBold"
              textGradient
            >
              UX UI DEV
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-full hover:bg-gray-100 cursor-pointer rounded-md">
          <CardHeader floated={false} className="">
            <img src="./imgs/project2.png" alt="front-page" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-darkestBlack"
            >
              Editorial Design
            </Typography>
            <Typography
              color="blue-gray"
              className="font-darkestBold"
              textGradient
            >
              UX UI
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-full hover:bg-gray-100 cursor-pointer rounded-md">
          <CardHeader floated={false} className="">
            <img src="./imgs/project3.png" alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-darkestBlack"
            >
              Empatia Animal
            </Typography>
            <Typography
              color="blue-gray"
              className="font-darkestBold"
              textGradient
            >
              UX UI
            </Typography>
          </CardBody>
        </Card>
      </div>
      </main>
    </>
  );
}
