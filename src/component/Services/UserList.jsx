import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//  import UserService from "./UserService";
import axios from "axios";

const baseUrl = "https://randomuser.me/api/?results=50";
const imageBodyTemplate = (rowData) => {
  return <img src={rowData.picture.thumbnail} alt="User Thumbnail" />;
};

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const axiosSource = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl, {
          cancelToken: axiosSource.token,
        });
        setUserData(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message); // Optional: log the cancelation
        } else {
          console.error("Error fetching data", error);
          setError("Error fetching data");
        }
      }
    };

    fetchData();

    return () => {
      axiosSource.cancel();
    }; 
  }, []);

  return (
    <div>
      <div>
        <h1>User List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <DataTable value={userData} tableStyle={{ minWidth: "50rem" }}>
            <Column field="name.first" header="First Name" />
            <Column field="name.last" header="Last Name" />
            <Column field="dob.age" header="Age" />
            <Column body={imageBodyTemplate} header="Image" />
            {/* <Column
              body={(rowData) => (
                <img src={rowData.picture.thumbnail} alt="User Thumbnail" />
              )}
              header="Image"
            /> */}
            <Column field="location.country" header="Country" />

            {/* Add more columns as needed */}
          </DataTable>
        )}
      </div>
    </div>
  );
};

export default UserList;
