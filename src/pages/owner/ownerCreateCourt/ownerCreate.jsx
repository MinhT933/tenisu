
import SidebarOwner from "../../../components/sideBarOwner/SideBarOwner";
import Topbar from "../../../components/topbar/Topbar";


import "./createCourt.css";

export default function CreateCourt() {
  return (
    <>
      <Topbar />
      <div className="container">
        <SidebarOwner />
        <div className="productList">
          <div className="newProduct">
            <h1 className="addProductTitle">Create court</h1>
            <form className="addProductForm">
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
              <div className="addProductItem">
                <label>Name Court</label>
                <input type="text" placeholder="Enter court name..." />
              </div>
              <div className="addProductItem">
                <label>Address</label>
                <input type="text" placeholder="Enter court address..." />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input type="text" placeholder="Price..." />
              </div>
              <div className="addProductItem">
                <label>Group</label>
                <input type="text" placeholder="Group..." />
              </div>
              <div className="addProductItem">
                <label>Rating</label>
                <input type="text" placeholder="Rating..." />
              </div>
              <button className="addProductButton">Create</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
