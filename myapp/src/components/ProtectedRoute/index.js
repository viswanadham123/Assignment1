
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
    const data1=JSON.parse(localStorage.getItem("formData"))
    console.log(data1)
    if (data1=== null) {
      return <Redirect to="/login-page" />;
    }
    return <Route {...props} />;
  };
  
  export default ProtectedRoute;