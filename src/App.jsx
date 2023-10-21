import { useState } from "react";
import logo from "./assets/img/logo.png";
import User from "./assets/img/User.png";
import Calender from "./assets/img/calender.jpg";
import Regis from "./assets/img/Regis.png";
import Announce from "./assets/img/announce.png";
import Report from "./assets/img/report.png";
import Table from "./assets/img/table.png";
import BumpCar from "./assets/img/footer.png";
import White from "./assets/img/white.jpg";
import Home1 from "./assets/img/home1.jpg";
import {
    Navigation,
    Pagination,
    Autoplay,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { Link, Navigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "./assets/main-styles/App.css";
import "./assets/main-styles/activity.css";
import "./assets/main-styles/font.css";
import "./assets/main-styles/home.css";
import "./assets/main-styles/navbar.css";
import "./assets/main-styles/public.css";
import "./assets/main-styles/road.css";
import { FaChevronDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Spin as Hamburger } from "hamburger-react";
import { StudentID } from "./Login";
const UserURL = "https://building9-backend.vercel.app/api/auth/profile";
import axios from "axios";

function App() {
    let [STDID, setSTDID] = useState("");
    STDID = StudentID;
    const [user, setUser] = useState("");
    const [STNumber, setSTNumber] = useState("");
    const [STRoom, setSTRoom] = useState("");
    const [check, setCheck] = useState(false);
    const Start = async (e) => {
        try {
            const response = await axios.post(UserURL, {
                studentID: STDID,
                environmentKey: import.meta.env.VITE_LOGRE,
            });
            setCheck(true);
            console.log(response?.data);
            setUser(response?.data.studentNickname);
            setSTNumber(response?.data.studentNumber);
            setSTRoom(response?.data.studentRoom);
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else if (error.request) {
                setErrorMessage("Network error. Please try again later.");
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
        }
    };
    Start();
    const response = axios.post(UserURL, {
        studentID: StudentID,
        environmentKey: import.meta.env.VITE_LOGRE,
    });
    console.log(response);
    const [dropdowns, setDropdowns] = useState([
        {
            id: "DC1",
            title: "รายงานกรรมการตึก",
            items: [
                "รายงานการประชุม",
                "สรุปบัญชี",
                "ปฏิทินตึก",
                "นโยบาย checklist",
            ],
        },
        {
            id: "DC2",
            title: "ประชาสัมพันธ์",
            items: ["ข่าว", "Intercom"],
        },
        {
            id: "DC3",
            title: "วิชาการ",
            items: ["สรุป", "Quiz"],
        },
        {
            id: "DC4",
            title: "สวัสดิการ",
            items: ["อุปกรณ์กีฬา", "ยา", "Lost & Found"],
        },
        {
            id: "DC5",
            title: "ลงทะเบียน",
            items: ["กีฬา", "งานสืบสานฯ", "คริสต์มาส", "ประกาศผล/ยืนยันสิทธิ์"],
        },
        {
            id: "DC6",
            title: "SHOP",
            items: ["SHOP", "คำสั่งซื้อ"],
        },
        {
            id: "DC7",
            title: "Gallery",
            items: ["2566"],
        },
        {
            id: "DC8",
            title: "เกี่ยวกับตึก ๙",
            items: [
                "ประวัติ",
                "ทำเนียบครูหัวหน้าตึก",
                "ครูและบุคลากร",
                "คณะกรรมการตึก",
            ],
        },
    ]);

    function Dropdown9() {
        var Dropdown = document.getElementById("DC9");

        if (Dropdown.dataset.shown === "false") {
            Dropdown.style.display = "block";
            Dropdown.dataset.shown = "true";
        } else {
            Dropdown.style.display = "none";
            Dropdown.dataset.shown = "false";
        }
    }
    const [isOpen, setOpen] = useState(false);
    const [previosID, setPreviousID] = useState(0);
    const [select, setSelect] = useState(false);

    const showSidebar = () => setOpen(!isOpen);
    function Dropdownww(id) {
        setSelect(!select);
        const dropdown = dropdowns.find((dropdown) => dropdown.id === id);
        const Dropdowncontent = document.getElementById(dropdown.id);
        if (previosID !== id) {
            setPreviousID(id);
            const Previousdropdown = dropdowns.find(
                (dropdown) => dropdown.id === previosID
            );
            const PreviousDropdownContent = document.getElementById(
                Previousdropdown.id
            );
            PreviousDropdownContent.classList.add("hidden");
            Dropdowncontent.classList.remove("hidden");
        } else {
            if (select) {
                Dropdowncontent.classList.remove("hidden");
            } else {
                Dropdowncontent.classList.add("hidden");
            }
        }
    }

    function getHrefForItem(item) {
        switch (item) {
            case "รายงานการประชุม":
                return "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            case "สรุปบัญชี":
                return "/Regis";
            default:
                return "/";
        }
    }

    const logout = () => {
        window.location.reload();
    };
    return (
        <div className="main-content">
            <div className={isOpen ? "Hamburger actives" : "Hamburger"}>
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color="#fc77bc"
                    duration={0.8}
                    onClick={showSidebar}
                />
            </div>
            <nav id="nav" className={isOpen ? "nav active" : "nav"}>
                <div className="Left">
                    <div className="logo">
                        <a href="#Home">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <ul className="nav-lists">
                        <li>
                            <a href="#Home">
                                <p>หน้าแรก</p>
                            </a>
                        </li>
                        {dropdowns.map((dropdown) => (
                            <li key={dropdown.id} className="DropDown">
                                <button
                                    className="Dropbtn"
                                    id="Dropbtn"
                                    onClick={() => Dropdownww(dropdown.id)}
                                >
                                    <p>{dropdown.title}</p>
                                    <FaChevronDown color="white" />
                                </button>
                                <div
                                    className="Dropdown-content hidden"
                                    data-shown={dropdown.shown}
                                    id={dropdown.id}
                                >
                                    {dropdown.items.map((item) => (
                                        <a
                                            href={getHrefForItem(item)}
                                            className="DropDown-item"
                                            key={item}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        ))}
                        <li>
                            <p>VOTE</p>
                        </li>
                    </ul>
                </div>
                <ul className="User">
                    {check ? (
                        <li className="DropDown">
                            <button className="Dropbtn" onClick={Dropdown9}>
                                <div className="text">
                                    <p>{user}</p>
                                    <p>
                                        {STNumber}/{STRoom}
                                    </p>
                                </div>
                                <img src={User} alt="" />
                                <FaChevronDown color="white" />
                            </button>
                            <div
                                className="Dropdown-content"
                                data-shown="false"
                                id="DC9"
                            >
                                <a href="#" className="DropDown-item">
                                    จัดการบัญชี
                                </a>
                                <a
                                    href="#"
                                    onClick={logout}
                                    className="DropDown-item"
                                >
                                    Log out
                                </a>
                                <a href="#" className="DropDown-item">
                                    ดาวโหลดเกียรติบัตร
                                </a>
                            </div>
                        </li>
                    ) : (
                        <li className="">
                            <Link to="/Login">
                                Login <CiLogin />
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <div className="page">
                <div className="home" id="Home">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Home1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Home1} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="public">
                    <h1>ข่าวประชาสัมพันธ์</h1>
                    <div className="Catalog">
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                    </div>
                    <button>
                        <p>อ่านทั้งหมด</p>
                    </button>
                </div>
                <div className="activity">
                    <h1>กิจกรรม</h1>
                    <div className="Catalog">
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                        <div className="item">
                            {/* <img src="" alt="" />
                            <div className="content">
                                <div className="head">Nano</div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas commodi quo numquam
                                    repellat labore enim iste dolorum non dolore
                                    a.
                                </p>
                                <a href="">Read more</a>
                            </div> */}
                        </div>
                    </div>
                    <button>
                        <p>ดูทั้งหมด</p>
                    </button>
                </div>
                <div className="road">
                    <div className="Catalog">
                        <div className="item">
                            <Link to="/Information">
                                <img src={User} alt="" />
                            </Link>
                            <p>สารสนเทศ</p>
                        </div>
                        <div className="item">
                            <a href="https://schedule.tucm.cc/">
                                <img src={Table} alt="" />
                            </a>
                            <p>ตารางเรียน</p>
                        </div>
                        <div className="item">
                            <a href="">
                                <img src={Calender} alt="" />
                            </a>
                            <p>ปฏิทิน</p>
                        </div>
                        <div className="item">
                            <a href="">
                                <img src={Regis} alt="" />
                            </a>
                            <p>ลงทะเบียน</p>
                        </div>
                        <div className="item">
                            <a href="">
                                <img src={Announce} alt="" />
                            </a>
                            <p>ประกาศ</p>
                        </div>
                        <div className="item">
                            <a href="">
                                <img src={Report} alt="" />
                            </a>
                            <p>ระบบร้องเรียน</p>
                        </div>
                    </div>
                </div>
                <footer>
                    <img src={BumpCar} alt="" />
                    <div className="footer_text">
                        <h2>
                            คณะกรรมการตึก ๙ โรงเรียนเตรียมอุดมศึกษา <br />
                            277 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน <br />
                            กรุงเทพมหานคร 10330
                        </h2>
                        <h3>
                            Contact us : <br />
                            <div className="email">
                                <img src="" alt="" />
                                <MdEmail color="var(--persian-pink)" />{" "}
                                <p>tubuilding9.sc@gmail.com</p>
                            </div>
                            <div className="email">
                                <img src="" alt="" />
                                <AiFillInstagram color="var(--persian-pink)" />{" "}
                                <p>building9.tu</p>
                            </div>
                        </h3>
                    </div>
                    <div className="Condi">
                        <a href="#">
                            ข้อกำหนด
                            เงื่อนไขการใช้งานและนโยบายคุ้มครองข้อมูลส่วนบุลคล
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
