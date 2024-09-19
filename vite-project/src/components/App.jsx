import { Alert } from "./Alert";
import { HiUser } from "react-icons/hi";
import { BsBadge3D } from "react-icons/bs";

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
        <p><BsBadge3D className="my-icon" size="24" /> {name}</p>
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
        <p><HiUser className="my-icon" size="24" /> {name}</p>
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase<p><HiUser className="my-icon" size="24" /> {name}</p>
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information<p><HiUser className="my-icon" size="24" /> {name}</p>
      </Alert>
    </>
  );
};
