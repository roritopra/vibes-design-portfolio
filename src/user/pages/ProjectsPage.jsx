import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../auth/firebase/firebase";
import { Link } from "react-router-dom";

export function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    UX: false,
    UI: false,
    DEV: false,
    Tag1: false,
  });

  useEffect(() => {
    (async () => {
      const projectsCollection = collection(database, "projects");
      const projectsSnapshot = await getDocs(projectsCollection);
      const projectsList = projectsSnapshot.docs.map((project) =>
        project.data()
      );
      setProjects(projectsList);
      setFilteredProjects(projectsList);
    })();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, searchTerm]);

  const applyFilters = () => {
    let filtered = projects;

    if (filters.UX) {
      filtered = filtered.filter((project) => project.tags.includes("UX"));
    }
    if (filters.UI) {
      filtered = filtered.filter((project) => project.tags.includes("UI"));
    }
    if (filters.DEV) {
      filtered = filtered.filter((project) => project.tags.includes("DEV"));
    }

    // Aplicar búsqueda por título
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

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
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button
                    className="font-darkestBold ml-2 rounded bg-[#A8AFF0] p-2 text-white hover:bg-[#7f89e8] w-1/4"
                    type="button"
                    onClick={() => applyFilters()}
                  >
                    Search
                  </button>
                </div>
                <div className="flex font-darkestBold">
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters.UX}
                      onChange={() =>
                        setFilters((prevFilters) => ({
                          ...prevFilters,
                          UX: !prevFilters.UX,
                        }))
                      }
                    />
                    UX
                  </label>
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters.UI}
                      onChange={() =>
                        setFilters((prevFilters) => ({
                          ...prevFilters,
                          UI: !prevFilters.UI,
                        }))
                      }
                    />
                    UI
                  </label>
                  <label className="mr-4">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters.DEV}
                      onChange={() =>
                        setFilters((prevFilters) => ({
                          ...prevFilters,
                          DEV: !prevFilters.DEV,
                        }))
                      }
                    />
                    DEV
                  </label>
                  {/* No hay filtro para Tag 1 aquí */}
                </div>
              </form>
            </div>
          </main>
        </body>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 p-5 font-darkestMedium pb-28">
          {filteredProjects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={index}>
              <Card className="w-full hover:bg-gray-100 cursor-pointer rounded-md">
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
                    {project.tags.map((tag, index) => (
                      <span key={index} className="mr-2">
                        {tag}
                      </span>
                    ))}
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
