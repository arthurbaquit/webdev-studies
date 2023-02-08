import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FullnamesList } from "../components/FullnamesList";
import { GetFullnamesHandler } from "./api/hello";

export type Fullnames = {
  ID: number;
  FirstName: string;
  LastName: string;
};

const Home: NextPage = () => {
  return (
    <>
      <FullnamesList />
    </>
  );
};

export default Home;
