import React from "react";
import { Fieldset } from "primereact/fieldset";
import { Avatar } from "primereact/avatar";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UserDetails() {
  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2">
      <Avatar label="P" size="xlarge" />
      <span className="font-bold">Amy Elsner</span>
    </div>
  );

  return (
    <div>
      <Card className="border-round border-1 surface-border p-4 surface-card">
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
            <div width="10rem" className="mb-2">
              my name is
            </div>

            <Skeleton width="5rem" className="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
          </div>
        </div>
        <div>
          <i class="bi bi-person-circle fs-1"></i>
        </div>
        <Skeleton width="100%" height="150px"></Skeleton>
      </Card>
    </div>
  );
}
