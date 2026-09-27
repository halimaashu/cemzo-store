import React from "react";
import { IoMenu } from "react-icons/io5";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
const NavBar = () => {
  return (
    <nav className="px-10 py-5 shadow-2xl sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="hidden md:flex items-center justify-between">
        <div className="text-3xl font-extrabold tracking-tight">
          <h2>
            Cemzo<span className="text-[#4338CA]">Store</span>
          </h2>
        </div>
        {/*Links */}
        <div className="flex gap-3.5 items-center">
          <ul className="flex gap-3.5 items-center font-medium ">
            <li>
              <a href="" className="hover:text-[#4338CA] hover:font-semibold transition-all duration-150">
                HOME
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#4338CA] hover:font-semibold transition-all duration-150">
                ALL PRODUCT
              </a>
            </li>

            <li>
              <a href="" className="hover:text-[#4338CA] hover:font-semibold transition-all duration-150">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="Buttons flex gap-3 items-center">
          <button className="font-semibold text-[#4338CA] px-8 py-3.5 rounded-full border-2 border-[#4338CA] hover:bg-indigo-50 transition-colors duration-200">
            Log In
          </button>
          <button className="font-semibold text-white px-10 py-3.5 rounded-full bg-[#4338CA] shadow-lg shadow-indigo-300 hover:bg-[#3730A3] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ">
            Sign Up
          </button>
        </div>
      </div>

      {/* small device */}

      <div className="flex  md:hidden items-center justify-between ">
        <div className="text-3xl font-bold">
          <h2>
            Cemzo<span className="text-[#4338CA]">Store</span>
          </h2>
        </div>
        {/*Modal sections */}
        <div className="flex gap-3.5 items-center">
          <Modal>
            <Button variant="secondary">
              <IoMenu />
            </Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="">
                  <Modal.CloseTrigger />
                  <Modal.Header></Modal.Header>
                  <Modal.Body className="flex flex-col gap-3.5">
                    <ul className="flex flex-col gap-3.5 items-center font-medium ">
                      <li>
                        <a
                          href=""
                          className="hover:text-[#4338CA] hover:font-semibold"
                        >
                          HOME
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="hover:text-[#4338CA] hover:font-semibold"
                        >
                          ALL PRODUCT
                        </a>
                      </li>

                      <li>
                        <a
                          href=""
                          className="hover:text-[#4338CA] hover:font-semibold"
                        >
                          CONTACT
                        </a>
                      </li>
                    </ul>
                    <button className="font-semibold text-[#4338CA] px-8 py-3.5 rounded-full border-2 border-[#4338CA] hover:bg-indigo-50 transition-colors duration-200">
                      Log In
                    </button>
                    <button className="font-semibold text-white px-10 py-3.5 rounded-full bg-[#4338CA] shadow-lg shadow-indigo-300 hover:bg-[#3730A3] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ">
                      Sign Up
                    </button>
                  </Modal.Body>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
