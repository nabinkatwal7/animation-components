import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

const Explore = () => {
  return (
    <div className="flex flex-wrap gap-4 bg-blue-400 p-4 z-50">
      <Link href={"/canvas-reveal"}>
        <Card>
          <CardHeader>
            <CardTitle>Canvas reveal effect</CardTitle>
            <CardDescription>Canvas reveal effect</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href={"/canvas-reveal"}>
        <Card>
          <CardHeader>
            <CardTitle>Canvas reveal effect</CardTitle>
            <CardDescription>Canvas reveal effect</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
};

export default Explore;
