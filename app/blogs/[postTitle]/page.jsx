"use client";

import { usePathname } from "next/navigation";

export default function SinglePost() {
  const pathname = usePathname();

  const title = pathname.split("/").pop();
  return <p>Current post: {title.toUpperCase()}</p>;
}
