import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FullnamesList } from "../../components/FullnamesList";

export type Fullnames = {
  ID: number;
  FirstName: string;
  LastName: string;
};

const Page: NextPage = () => {
  return (
    <>
      <FullnamesList />
    </>
  );
};

export default Page;
