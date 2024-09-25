import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const RentalServicesPage = dynamic(
  () => import("@/main/RentalServices/RentalServices"),
  { ssr: false }
);
export default function RentalServices() {
  return (
    <>
      <Head>
        <title>Sunny Agency | Rental Services</title>
      </Head>
      <RentalServicesPage />
    </>
  );
}
