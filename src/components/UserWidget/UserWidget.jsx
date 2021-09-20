import "./UserWidget.css";

const UserWidget = () => {
  return (
    <button className="user-logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </button>
  );
};

export default UserWidget;
