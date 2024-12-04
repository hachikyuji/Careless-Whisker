import "../styles/adminhome.css";
import AdminSidebar from "../components/AdminSidebar";
import Header from "../components/Header";

function AdminHome () {
    return (
        <div className="admin-home-page">
            <AdminSidebar />
            <Header />
        </div>
    )
}

export default AdminHome;