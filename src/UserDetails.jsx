import React from "react";
import { Fieldset } from "primereact/fieldset";
import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UserDetails() {
  const innerCardStyle = {
    backgroundColor: "#2196F3", // Your desired background color for the nested card
    color: "#fff", // Your desired text color for the nested card
    padding: "1rem", // Optional: Add padding for the nested card
    width: "100%",
    height: "200px",
  };

  return (
    <div>
      <Card className="border-round border-1 surface-border p-4 surface-800">
        <div className="flex mb-3">
          {/* <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton> */}
          <Avatar
            label="p"
            shape="circle"
            size="xlarge"
            className="mr-2"
            pt={{ root: { className: "bg-blue-500" } }}
          ></Avatar>
          <div>
            <div className="mb-2">Hi, My name is</div>
            <div
              width="5rem"
              className="mb-2"
              style={{ color: "var(--surface-0)", fontSize: "1.5rem" }}
            >
              <div>Henri</div>
            </div>
          </div>
        </div>

        <div className="card flex justify-content-center">
          <Card style={innerCardStyle}>
            <div className="flex  justify-content-center">
              <div className="userValue">henri</div>
              <div>
                <ul className="flex flex-row flex-wrap">
                  <li className="flex align-items-center justify-content-center ">
                    <i
                      className=" flex align-items-center justify-content-center pi pi-user mr-3"
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                  </li>

                  <li>
                    <i
                      className="flex align-items-center justify-content-center pi pi-envelope mr-3"
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                  </li>

                  <li>
                    <i
                      className="flex align-items-center justify-content-center pi pi-calendar-plus mr-3"
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
