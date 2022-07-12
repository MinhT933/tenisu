// import { Link } from "react-router-dom";
import "./court.css";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData";
import { useState } from "react";
import Topbar from "../../../components/topbar/Topbar";
import SidebarOwner from "../../../components/sideBarOwner/SideBarOwner";
import { callAPIGetListCour } from "../../../module/action/action";

export default function CourtList() {
    // const [data, setData] = useState(userRows);
   

    React.useEffect(() => {
      const callAPI = async () => {
        await dispatch(callAPIGetListCour);
      };
      callAPI();
    }, []);

    
    const co = useSelector((state) => {
      return state.userReducer.ListCo;
    });
    const columns = [
      {
        field: "email",
        headerName: "Owner ID",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              
              {params.row.name}
            </div>
          );
        },
      },
      { field: "fullname", headerName: "Owner Name", width: 200 },
      {
        field: "phone",
        headerName: "Phone",
        width: 120,
      },
      {
        field: "address",
        headerName: "Address",
        width: 160,
      },
      {
        field: "dob",
        headerName: "Birthday",
        width: 160,
      },
      {
        field: "gender",
        headerName: "Gender",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              {/* <Link to={"/owner/court" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link> */}
              <DeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];
  
    return (
      <>
        <Topbar />
        <div className="container">
          <SidebarOwner />
          <div className="userList">
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
            />
          </div>
        </div>
      </>
    );
}
