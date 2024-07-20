"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative">
      <div className="relative inline-block overflow-hidden h-9 w-9 rounded-full border-2 border-blue-700">
        <Image src="/avatar.png" alt="Avatar" fill className="rounded-full" />
      </div>
    </div>
  );
};

export default Avatar;
