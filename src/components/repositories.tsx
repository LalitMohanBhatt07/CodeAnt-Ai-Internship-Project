import { useState } from "react";
import "../index.css";

const initialData = [
  {
    name: "design-system",
    access: "Public",
    languages: "React",
    size: "2.6 MB",
    updates: "3",
  },
  {
    name: "codeant-ci-app",
    access: "Private",
    languages: "Javascript",
    size: "1.2 MB",
    updates: "2",
  },
  {
    name: "analytics-dashboard",
    access: "Public",
    languages: "Python",
    size: "4521 KB",
    updates: "5",
  },
  {
    name: "mobile-app",
    access: "Private",
    languages: "Swift",
    size: "4.6 MB",
    updates: "3",
  },
  {
    name: "e-commerce-website",
    access: "Private",
    languages: "React",
    size: "2.6 MB",
    updates: "3",
  },
  {
    name: "blog-website",
    access: "Public",
    languages: "Javascript",
    size: "16120 KB",
    updates: "4",
  },
  {
    name: "social-network",
    access: "Private",
    languages: "PHP",
    size: "5432 KB",
    updates: "3",
  },
];

function Repositories() {
  const [data, setData] = useState(initialData);
  const [isAdding, setIsAdding] = useState(false);
  const [newRepo, setNewRepo] = useState({
    name: "",
    access: "Public",
    languages: "",
    size: "",
    updates: "",
  });

  const handleAddRepository = () => {
    setIsAdding(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRepo({ ...newRepo, [name]: value });
  };

  const handleSaveRepository = () => {
    setData([...data, newRepo]);
    setNewRepo({
      name: "",
      access: "Public",
      languages: "",
      size: "",
      updates: "",
    });
    setIsAdding(false);
  };

  return (
    <div className="bg-[#fafafa] w-full md:w-full h-[100vh] md:overflow-scroll">
      <div className="md:ml-[2%] mr-[2%] mt-[2%] rounded-lg flex flex-col gap-1">
        <div className="bg-white pt-5 rounded-md flex flex-col w-full gap-4 md:pl-5 md:pb-5 pl-3 pb-3">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-gray-500">{data.length} total repositories</p>
            </div>
            <div className="flex flex-row gap-4 text-md">
              <button
                className="flex flex-row gap-3 h-max rounded-lg p-2 border-[2px] border-gray-300 items-center justify-start"
              >
                <img src="/refresh.png" alt="" />
                Refresh All
              </button>
              <button
                className="flex flex-row gap-2 h-max rounded-lg p-2 bg-[#1470ef] text-white items-center justify-start"
                onClick={handleAddRepository}
              >
                <img src="/plus.png" alt="" />
                Add Repository
              </button>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search repositories"
            className="bg-white w-[90%] md:w-[30%] p-2 border-[1px] border-gray-300 rounded-lg"
          />
        </div>

        {isAdding && (
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Add New Repository</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Repository Name"
                value={newRepo.name}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="languages"
                placeholder="Languages"
                value={newRepo.languages}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="size"
                placeholder="Size (e.g., 2.6 MB)"
                value={newRepo.size}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="updates"
                placeholder="Updates (e.g., 3)"
                value={newRepo.updates}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md"
              />
              <div className="flex gap-2">
                <button
                  className="bg-[#1470ef] text-white p-2 rounded-md"
                  onClick={handleSaveRepository}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-black p-2 rounded-md"
                  onClick={() => setIsAdding(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col justify-center gap-1 mt-4">
          {data.map((item) => (
            <Tab
              key={item.name}
              name={item.name}
              access={item.access}
              languages={item.languages}
              size={item.size}
              updates={item.updates}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Tab({
  name,
  access,
  languages,
  size,
  updates,
}: {
  name: string;
  access: string;
  languages: string;
  size: string;
  updates: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-white md:p-5 p-3 transition-all ease-linear duration-50 hover:bg-[#f5f5f5]">
      <div className="flex flex-row items-center gap-3">
        <p className="text-[1.2rem]">{name}</p>
        <p className="border-[1.2px] border-[#bcd7fd] text-[.8rem] rounded-2xl px-[10px] bg-[#eff8ff] text-[#5c94e2]">
          {access}
        </p>
      </div>
      <div className="flex flex-row gap-5 md:gap-10">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-gray-500 text-sm">{languages}</p>
          <div className="rounded-[5rem] bg-[#1470ef] w-2 h-2"></div>
        </div>
        <div className="flex gap-2 flex-row items-center">
          <img src="/database.png" alt="" />
          <p>{size}</p>
        </div>
        <p>Updated {updates} days ago</p>
      </div>
    </div>
  );
}

export default Repositories;
