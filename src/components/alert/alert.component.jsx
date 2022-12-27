import AlertContext from "../../context/alert/alert-context";
import { useContext } from "react";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  if (alert) {
    const { msg, type } = alert;
    return (
      <p className="flex items-start mb-4 space-x-2">
        {type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{msg}</strong>
        </p>
      </p>
    );
  }
};

export default Alert;
