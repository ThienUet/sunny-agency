import React from "react";
import styles from "@/styles/app/rental-services/rental-services.module.scss";
import Banner from "@/components/banner/Banner";

const breadcrumbs = ["HOME", " > ", "RENTAL SERVICES"];
export default function RentalServices() {
  return (
    <div className={styles.rental_services}>
      <Banner
        image={{
          src: "/images/rental-services/banner.jpg",
          alt: "Sunny Agency Services, Sunny Agency Rental Services",
        }}
        className={styles.banner}
        title="Rental Services"
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
}
