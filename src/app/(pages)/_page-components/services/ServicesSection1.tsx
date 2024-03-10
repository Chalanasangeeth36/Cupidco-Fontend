"use client";

import { useEffect, useState } from "react";

interface Service {
  id: number;
  service: string;
  amount: number;
  image: string;
}

export default function ServicesSection1() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://65e5ed26d7f0758a76e7c528.mockapi.io/services/services"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className=" grid grid-cols-5 text-center py-5">
        {services.map((service) => (
          <div key={service.id} className="">
            <h2>{service.service}</h2>
            <p>Amount: ${service.amount}</p>
            <div className="flex justify-center mb-5">
              <img
                className="w-40  "
                src={service.image}
                alt={service.service}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
