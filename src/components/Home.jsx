import { useEffect, useMemo, useRef, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Card from "./Card";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosCreate } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

function getRandomNumber() {
  const randomDecimal = Math.random();
  return Math.floor(randomDecimal * 6);
}

function Home() {
  const defaultData = useMemo(
    () => [
      {
        id: "89b89a81-8bfc-4b4e-95b2-3e03d1d9d0f0",
        title: "Colorful Oasis",
        category: "React",
        description: "Vibrant and lively project with React stack.",
        startDate: new Date("2023-07-01T10:30:00.000Z"),
        endDate: new Date("2023-07-10T18:45:00.000Z"),
        img: "",
      },
      {
        id: "4c4f1600-70d3-4f64-b96e-0b82e1dbf04d",
        title: "Dynamic Hub",
        category: "Node.js",
        description: "Building a dynamic hub with Node.js technologies.",
        startDate: new Date("2023-06-05T19:15:00.000Z"),
        endDate: new Date("2023-07-15T17:30:00.000Z"),
        img: "",
      },
      {
        id: "f7f67a04-30aa-44b3-b4f3-ba1fb6dbefaa",
        title: "Epic Fusion",
        category: "MERN",
        description:
          "MERN stack project that brings together various features.",
        startDate: new Date("2023-06-08T11:00:00.000Z"),
        endDate: new Date("2023-07-18T20:00:00.000Z"),
        img: "",
      },
      {
        id: "64e7aa7b-2a8c-4ea9-9db2-5b738c991f3c",
        title: "Swift Harmony",
        category: "Swift",
        description: "Creating a harmonious mobile app with Swift.",
        startDate: new Date("2023-07-01T14:45:00.000Z"),
        endDate: new Date("2023-07-22T22:45:00.000Z"),
        img: "",
      },
      {
        id: "c028a151-c44f-4c02-9bfa-28796f67f146",
        title: "Data Insight",
        category: "MongoDB",
        description: "Leveraging MongoDB for deep data insights.",
        startDate: new Date("2023-07-13T08:30:00.000Z"),
        endDate: new Date("2023-07-25T16:15:00.000Z"),
        img: "",
      },
      {
        id: "6f0384b7-9811-42e5-9e63-77d350f67a4a",
        title: "Visual Harmony",
        category: "React",
        description: "Achieving visual harmony in React applications.",
        startDate: new Date("2023-07-14T11:00:00.000Z"),
        endDate: new Date("2023-07-28T19:30:00.000Z"),
        img: "",
      },
    ],
    []
  );

  const [data, setData] = useState(defaultData);
  const [imgData, setImgData] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(startDate);

  const [selected, setSelected] = useState(null);

  const formModalRef = useRef();
  const detailsRef = useRef();
  const updateRef = useRef();
  const diffKey = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=1&limit=6`
      );
      setImgData(res.data);
      for (let i = 0; i < 6; i++) {
        defaultData[i].img = res.data[i].download_url;
      }
    };
    fetchData();
  }, [defaultData]);

  console.log(imgData);
  console.log(data);
  console.log("selected obj", selected);
  console.log("Title", title);

  const handleClick = () => {
    formModalRef.current.showModal();
  };
  const handleDetailsClick = (data) => {
    detailsRef.current.showModal();
    setSelected(data);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
  };

  const handleDelete = () => {
    console.log("delete it ");
    detailsRef.current.close();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const filterData = data.filter((item) => item.id != selected.id);
        // console.log("filtered", filterData);
        setData(filterData);

        setSelected(null);
        setStartDate(new Date());
        setEndDate(new Date());
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: uuidv4(),
      title,
      category,
      description,
      startDate,
      endDate,
      img: imgData[getRandomNumber()].download_url,
    };
    setData([...data, newData]);
    setTitle("");
    setCategory("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
    formModalRef.current.close();
    Swal.fire({
      title: "Created!",
      text: "Successfully Created New Project",
      icon: "success",
    });
  };

  const handleUpdate = () => {
    updateRef.current.showModal();
    detailsRef.current.close();
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: selected.id,
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      startDate,
      endDate,
      img: selected.img,
    };
    console.log("New DAta", newData);
    const filteredData = data.map((item) => {
      if (item.id === selected.id) {
        console.log("found");
        return { ...item, ...newData };
      } else {
        return item;
      }
    });
    console.log("inside hand", filteredData);
    setData([...filteredData]);
    setStartDate(new Date());
    setEndDate(new Date());
    setSelected(null);
    setStartDate(new Date());
    setEndDate(new Date());
    diffKey.current = diffKey.current + 1;
    updateRef.current.close();
    detailsRef.current.close();
    Swal.fire({
      title: "Updated!",
      text: "Successfully Updated New Project",
      icon: "success",
    });
  };

  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <div className="p-6 md:p-12 space-y-9">
        <div>
          <h1 className="text-3xl md:text-[40px] font-semibold">My Projects</h1>
        </div>
        <div className=" bg-white w-full md:w-[404px] h-[240px] md:h-[270px] p-6 space-y-2 text-center">
          <div
            onClick={handleClick}
            className="bg-[#FA782F66] w-full md:w-[360px] h-[140px] md:h-[180px] flex justify-center
             items-center rounded-lg cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
            >
              <g>
                <path
                  d="M37.5417 17.6667C41.4744 17.6608 45.3193 18.8297 48.5833 21.0233V8.83333C48.5833 6.49059 47.6527 4.24379 45.9961 2.58722C44.3395 0.930652 42.0927 0 39.75 0L8.83333 0C6.49059 0 4.24379 0.930652 2.58722 2.58722C0.930652 4.24379 0 6.49059 0 8.83333L0 39.75C0 42.0927 0.930652 44.3395 2.58722 45.9961C4.24379 47.6527 6.49059 48.5833 8.83333 48.5833H21.0233C19.0242 45.5913 17.8749 42.1126 17.698 38.5185C17.5211 34.9243 18.3234 31.3496 20.0192 28.1757C21.7149 25.0019 24.2405 22.3479 27.3266 20.4971C30.4126 18.6463 33.9432 17.668 37.5417 17.6667Z"
                  fill="white"
                />
                <path
                  d="M37.5416 22.0833C34.4842 22.0833 31.4955 22.99 28.9534 24.6885C26.4113 26.3871 24.43 28.8014 23.26 31.626C22.0899 34.4507 21.7838 37.5588 22.3803 40.5574C22.9767 43.5561 24.449 46.3105 26.6109 48.4724C28.7728 50.6343 31.5272 52.1065 34.5258 52.703C37.5244 53.2994 40.6326 52.9933 43.4572 51.8233C46.2819 50.6533 48.6961 48.672 50.3947 46.1299C52.0933 43.5878 52.9999 40.599 52.9999 37.5417C52.9953 33.4433 51.3651 29.5141 48.4671 26.6161C45.5691 23.7182 41.64 22.088 37.5416 22.0833ZM41.9583 39.75H39.7499V41.9583C39.7499 42.544 39.5173 43.1057 39.1031 43.5199C38.689 43.934 38.1273 44.1667 37.5416 44.1667C36.9559 44.1667 36.3942 43.934 35.9801 43.5199C35.5659 43.1057 35.3333 42.544 35.3333 41.9583V39.75H33.1249C32.5392 39.75 31.9775 39.5173 31.5634 39.1032C31.1493 38.6891 30.9166 38.1274 30.9166 37.5417C30.9166 36.956 31.1493 36.3943 31.5634 35.9801C31.9775 35.566 32.5392 35.3333 33.1249 35.3333H35.3333V33.125C35.3333 32.5393 35.5659 31.9776 35.9801 31.5635C36.3942 31.1493 36.9559 30.9167 37.5416 30.9167C38.1273 30.9167 38.689 31.1493 39.1031 31.5635C39.5173 31.9776 39.7499 32.5393 39.7499 33.125V35.3333H41.9583C42.5439 35.3333 43.1056 35.566 43.5198 35.9801C43.9339 36.3943 44.1666 36.956 44.1666 37.5417C44.1666 38.1274 43.9339 38.6891 43.5198 39.1032C43.1056 39.5173 42.5439 39.75 41.9583 39.75Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_101_14">
                  <rect width="53" height="53" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            onClick={handleClick}
            className="text-[16px] font-semibold cursor-pointer hover:underline"
          >
            Create a new project
          </div>
          <div className="text-[12px] font-semibold">
            or try a <span className="text-[#FA782F]">sample project</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {data.map((project) => (
            <Card
              key={project.id}
              data={project}
              handleDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
        {/* Modals */}
        <Modal header="Add Project" modalRef={formModalRef}>
          <form onSubmit={handleSubmit} className="space-y-3 p-4">
            {/* title */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  type="text"
                  placeholder="Title"
                  className="input input-bordered input-sm"
                />
              </label>
            </div>
            {/* duration */}
            <div className="flex gap-x-3">
              <div>
                <div className="label">
                  <span className="label-text">Start Date</span>
                </div>
                <DatePicker
                  className="border rounded-md text-center"
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setMinDate(date);
                    setEndDate(date);
                  }}
                />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">End Date</span>
                </div>
                <DatePicker
                  className="border rounded-md text-center"
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                  }}
                  minDate={minDate}
                />
              </div>
            </div>
            {/* category */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  type="text"
                  placeholder="category"
                  className="input input-bordered input-sm"
                />
              </label>
            </div>
            {/* description */}
            <div className="">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="textarea textarea-bordered h-24"
                  placeholder="description"
                ></textarea>
              </label>
            </div>
            <div className="">
              <button
                className="px-3 py-1.5 bg-[#FA782F] rounded-md text-white text-sm flex space-x-1 items-center
        hover:bg-[#ff660e]"
              >
                <IoIosCreate />
                <div>Submit</div>
              </button>
            </div>
          </form>
        </Modal>
        <Modal header="Details" modalRef={detailsRef}>
          <div className="p-4 space-y-4">
            <h1 className="text-xl font-semibold">{selected?.title}</h1>
            <p>{selected?.description}</p>
            <div className="flex space-x-2">
              <button
                onClick={handleUpdate}
                className="px-2 py-1.5 bg-[#FA782F] rounded-md text-white text-sm flex space-x-1 items-center
        hover:bg-[#ff660e]"
              >
                <RiFileEditFill className="text-lg" />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-2 py-1.5 bg-red-500 rounded-md text-white text-sm flex space-x-1 items-center
        hover:bg-red-600"
              >
                <MdDeleteForever className="text-lg" />
                Delete
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          key={diffKey.current}
          header="Update Project"
          modalRef={updateRef}
        >
          <form onSubmit={handleUpdateSubmit} className="space-y-3 p-4">
            {/* title */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  name="title"
                  defaultValue={selected?.title}
                  required
                  type="text"
                  placeholder="Title"
                  className="input input-bordered input-sm"
                />
              </label>
            </div>
            {/* duration */}
            <div className="flex gap-x-3">
              <div>
                <div className="label">
                  <span className="label-text">Start Date</span>
                </div>
                <DatePicker
                  className="border rounded-md text-center"
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setMinDate(date);
                    setEndDate(date);
                  }}
                />
              </div>
              <div>
                <div className="label">
                  <span className="label-text">End Date</span>
                </div>
                <DatePicker
                  className="border rounded-md text-center"
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                  }}
                  minDate={minDate}
                />
              </div>
            </div>
            {/* category */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <input
                  name="category"
                  defaultValue={selected?.category}
                  required
                  type="text"
                  placeholder="category"
                  className="input input-bordered input-sm"
                />
              </label>
            </div>
            {/* description */}
            <div className="">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  name="description"
                  defaultValue={selected?.description}
                  required
                  className="textarea textarea-bordered h-24"
                  placeholder="description"
                ></textarea>
              </label>
            </div>
            <div className="">
              <button
                className="px-3 py-1.5 bg-[#FA782F] rounded-md text-white text-sm flex space-x-1 items-center
        hover:bg-[#ff660e]"
              >
                <IoIosCreate />
                <div>Update</div>
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
