import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-[1080px] mx-auto p-8 mt-8">
        <ul className="flex gap-4 justify-center">
          <li>
            <a href="">
              <img src="/envelop.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/artstation.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/linkedin.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
