// "use client"

// import { useState, useEffect } from "react"
// import { Link, useNavigate, useLocation } from "react-router-dom"
// import { signOut } from "firebase/auth"
// import { auth } from "../firebase/config"
// import { useAuth } from "../contexts/AuthContext"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "@fortawesome/fontawesome-free/css/all.min.css"
// import LogoutPopup from "../components/LogoutPopup"

// function Navbar() {
//   const navigate = useNavigate()
//   const location = useLocation()
//   const { currentUser } = useAuth()
//   const [showLogoutModal, setShowLogoutModal] = useState(false)

//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js")
//       .then(() => {
//         // Bootstrap JavaScript has been loaded
//       })
//       .catch((err) => console.error("Failed to load Bootstrap JavaScript", err))
//   }, [])

//   const handleLogout = () => {
//     setShowLogoutModal(true)
//   }

//   const confirmLogout = () => {
//     signOut(auth)
//       .then(() => {
//         setShowLogoutModal(false)
//         navigate("/login")
//       })
//       .catch((error) => {
//         console.error("Error logging out: ", error)
//         alert("Error logging out. Please try again.")
//       })
//   }

//   const isLoginPage = location.pathname === "/login"

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#003B94" }}>
//         <div className="container">
//           <div className="d-flex justify-content-between align-items-center w-100">
//             <div className="navbar-brand invisible">
//               {/* This is an invisible placeholder to help with centering */}
//               <Link to="/">
//                 <img
//                   src="/assets/img/Frame 223.png"
//                   alt="YSpot Logo"
//                   className="col-12 d-inline-block align-top"
//                   style={{ maxHeight: "60px", visibility: "hidden" }}
//                 />
//               </Link>
//             </div>
//             <div className="navbar-brand text-center">
//               <Link to="/">
//                 <img
//                   src="/assets/img/Frame 223.png"
//                   alt="YSpot Logo"
//                   className="col-12 d-inline-block align-top"
//                   style={{ maxHeight: "60px" }}
//                 />
//               </Link>
//             </div>
//             <div>
//               {!currentUser ? (
//                 <Link className="nav-link" to="/login">
//                   <button
//                     type="button"
//                     className="btn btn-light text-dark px-3 "
//                     style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
//                   >
//                     <b>Login</b>
//                   </button>
//                 </Link>
//               ) : (
//                 <div className="nav-item dropdown d-flex align-items-center">
//                   <span className="text-white me-2 d-none d-lg-inline">
//                     {currentUser.displayName || currentUser.email}
//                   </span>
//                   <a
//                     className="nav-link"
//                     href="#"
//                     id="userDropdown"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     {currentUser.photoURL ? (
//                       <img
//                         src={currentUser.photoURL || "/placeholder.svg"}
//                         alt="User Photo"
//                         style={{ width: "35px", height: "35px", borderRadius: "50%" }}
//                       />
//                     ) : (
//                       <div
//                         style={{
//                           width: "50px",
//                           height: "50px",
//                           borderRadius: "50%",
//                           backgroundColor: "#fff",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           color: "#FF1717",
//                         }}
//                       >
//                         {currentUser.displayName ? currentUser.displayName[0].toUpperCase() : "U"}
//                       </div>
//                     )}
//                   </a>
//                   <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
//                     <li>
//                       <Link to="/profile" className="dropdown-item">
//                         <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
//                         My Profile
//                       </Link>
//                     </li>
//                     <li>
//                       <hr className="dropdown-divider" />
//                     </li>
//                     <li>
//                       <a className="dropdown-item" href="#" onClick={handleLogout}>
//                         <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
//                         Logout
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Second navigation bar: horizontally scrollable content */}
//       {!isLoginPage && (
//         <div style={{ backgroundColor: "#003B94 " }}>
//           <div className="container d-none d-lg-block">
//             <div style={{ display: "flex", justifyContent: "center", padding: "10px 0", gap: "10px" }}>
//               <Link to="/">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/" ? "active border border-white" : ""}`}
//                 >
//                   <i className="fa-solid fa-bed"></i> Hotels
//                 </button>
//               </Link>
//               <Link to="/Homestays">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/Homestays" ? "active border border-white" : ""}`}
//                 >
//                   <i className="fa-solid fa-bed"></i> HomeStays
//                 </button>
//               </Link>
//               {/* <Link to="/hourly-stay">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/hourly-stay" ? "active border border-white" : ""}`}
//                 >
//                   <i className="fa-solid fa-utensils"></i> Hourly Stay
//                 </button>
//               </Link> */}
//               <Link to="/about">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/about" ? "active border border-white" : ""}`}
//                 >
//                   <i className="fa-solid fa-question"></i> About Us
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div
//             className="d-lg-none px-3 "
//             style={{
//               overflowX: "auto",
//               whiteSpace: "nowrap",
//               WebkitOverflowScrolling: "touch",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             <div style={{ display: "inline-block", padding: "10px 0" }}>
//               <Link to="/">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/" ? "active border border-white" : ""} me-2`}
//                 >
//                   <i className="fa-solid fa-bed p-2"></i>Hotels
//                 </button>
//               </Link>
//               <Link to="/Homestays">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/Homestays" ? "active border border-white" : ""} me-2`}
//                 >
//                   <i className="fa-solid fa-bed p-2"></i>HomeStays
//                 </button>
//               </Link>
//               {/* <Link to="/hourly-stay">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/hourly-stay" ? "active border border-white" : ""} me-2`}
//                 >
//                   <i className="fa-solid fa-utensils"></i> Hourly Stay
//                 </button>
//               </Link> */}
//               <Link to="/about">
//                 <button
//                   type="button"
//                   className={`btn text-light rounded-pill ${location.pathname === "/about" ? "active border border-white" : ""} me-2`}
//                 >
//                   <i className="fa-solid fa-question"></i> About Us
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Logout Confirmation Modal */}
//       <LogoutPopup isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} onConfirm={confirmLogout} />
//     </>
//   )
// }

// export default Navbar

"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LogoutPopup from "../components/LogoutPopup";

import {
  FaHotel,
  FaPlane,
  FaBus,
  FaUniversity,
  FaGlassCheers,
  FaMapMarkerAlt,
  FaGift,
  FaTools,
  FaRegLightbulb,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch((err) =>
      console.error("Failed to load Bootstrap JS", err)
    );
  }, []);

  const handleLogout = () => setShowLogoutModal(true);

  const confirmLogout = () => {
    signOut(auth)
      .then(() => {
        setShowLogoutModal(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
        alert("Error logging out. Please try again.");
      });
  };

  const isLoginPage = location.pathname === "/login";

  const navItems = [
    { icon: <FaPlane />, label: "Flight", path: "/flight-form" },
    { icon: <FaBus />, label: "Bus", path: "/Bus-form" },
    // { icon: <FaUniversity />, label: "Hall" },
    { icon: <FaGlassCheers />, label: "Event", path: "/Event-form" },
    { icon: <FaMapMarkerAlt />, label: "Car", path: "/Cab-form" },
    { icon: <FaGift />, label: "Holiday Package", path: "/Holiday-form" },
    { icon: <FaTools />, label: "Support", path: "/Support-form" },
 



  ];

  return (
    <>
      {!isLoginPage && (
        <>
          {/* Top Navbar */}
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#038A5E" }}
          >
            <div className="container-fluid d-flex justify-content-between align-items-center">
              {/* Hotel & HomeStays Dropdown */}
              <li className="nav-item dropdown list-unstyled">
                <button
                  className="btn text-light rounded-pill dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="hotelDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaHotel className="me-1" />
                  <span className="small fw-semibold">Hotel & HomeStays</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="hotelDropdown">
                  <li>
                    <Link to="/List-your-hotel" className="dropdown-item">
                      List Your Hotel
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/Hotel-patner" className="dropdown-item">
                      Hotel Partner
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      to="https://sonachala-admin.netlify.app/"
                      className="dropdown-item"
                    >
                      Hotel Partner
                    </Link>
                  </li>

                  <li>
                    <Link to="/Agent" className="dropdown-item">
                      Agent
                    </Link>
                  </li>
                </ul>
              </li>

              {/* User/Login */}
              <div className="d-flex align-items-center ms-auto">
                {!currentUser ? (
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-white fw-bolder">For guest :</span>
                    <Link className="nav-link p-0" to="/login">
                      <button className="btn btn-light text-dark px-3">
                        <b>Login</b>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="nav-item dropdown d-flex align-items-center">
                    <span className="text-white me-2">
                      {currentUser.displayName || currentUser.email}
                    </span>
                    <a
                      className="nav-link"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {currentUser.photoURL ? (
                        <img
                          src={currentUser.photoURL}
                          alt="User"
                          style={{ width: 35, height: 35, borderRadius: "50%" }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 35,
                            height: 35,
                            borderRadius: "50%",
                            backgroundColor: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FF1717",
                          }}
                        >
                          {(currentUser.displayName || "U")[0].toUpperCase()}
                        </div>
                      )}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          <i className="fas fa-user fa-sm me-2"></i> My Profile
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          <i className="fas fa-sign-out-alt fa-sm me-2"></i>{" "}
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Unified Nav Menu */}
          <div style={{ backgroundColor: "#038A5E" }}>
            <div className="container-fluid py-2 d-flex flex-wrap justify-content-start align-items-center gap-2">
              <ul className="navbar-nav flex-row flex-wrap gap-2 align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/img/logo.png`}
                    alt="Logo"
                    style={{ maxHeight: "110px" }}
                  />
                </Link>

                {/* Static Pages */}
                <li className="nav-item">
                  <Link to="/">
                    <button
                      className={`btn text-light rounded-pill ${
                        location.pathname === "/" ? "border border-white" : ""
                      }`}
                    >
                      <i className="fa-solid fa-bed me-1"></i> Hotels
                    </button>
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link to="/Homestays">
                    <button
                      className={`btn text-light rounded-pill ${
                        location.pathname === "/Homestays"
                          ? "border border-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-house me-1"></i> HomeStays
                    </button>
                  </Link>
                </li> */}

                {/* <li className="nav-item">
                  <Link to="/about">
                    <button
                      className={`btn text-light rounded-pill ${
                        location.pathname === "/about"
                          ? "border border-white"
                          : ""
                      }`}
                    >
                      <i className="fa-solid fa-question me-1"></i>About Us
                    </button>
                  </Link>
                </li> */}

                {/* Dynamic Items */}
                {navItems.map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <Link to={item.path || "#"}>
                      <button className="btn text-light rounded-pill  ">
                        {item.icon} <span className="ms-1">{item.label}</span>
                      </button>
                    </Link>
                  </li>
                ))}

                {/* Solutions Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="btn text-light rounded-pill dropdown-toggle"
                    type="button"
                    id="solutionsDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaRegLightbulb className="me-1" /> Solutions
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="solutionsDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/Centralreserve">
                        Central Reserve
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/PmsConnect">
                        PMS Connect
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ReserveBackend">
                        Reserve Backend
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Revenuemanage">
                        Revenue Manage
                      </Link>
                    </li>
                  </ul>
                </li>




              </ul>
            </div>
          </div>
        </>
      )}

      {/* Logout Modal */}
      <LogoutPopup
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </>
  );
}

export default Navbar;
