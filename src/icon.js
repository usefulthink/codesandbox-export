import React from "react";
export default function Icon(props) {
  if (props.type === "addcontact") {
    return (
      <svg
        className="icon icon-addcontact"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M10.217 15C13.729 15 16 18.416 16 21h-2c0-.46-.344-1.515-.88-2.321C12.404 17.604 11.451 17 10.216 17H7.783c-1.235 0-2.188.604-2.902 1.679C4.344 19.485 4 20.539 4 21H2c0-2.584 2.27-6 5.783-6zM20 10.002v1.999h1.999v2H20V16h-2v-1.999h-1.999v-2H18v-1.999h2zM9 3a5 5 0 110 10A5 5 0 019 3zm0 2a3 3 0 100 6 3 3 0 000-6z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  }
  if (props.type === "birthday") {
    return (
      <svg
        className="icon icon-birthday"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M12 11c2.102 0 4.223.414 6.36 1.24a1 1 0 01.64.933V17l-1.571-.001L16 22H8l-1.429-5.001L5 17v-3.827a1 1 0 01.64-.932C7.776 11.414 9.897 11 12 11zm3.349 6H8.65l.858 3h4.982l.858-3zM12 13c-1.643 0-3.308.289-5 .872V15h10v-1.128C15.308 13.29 13.643 13 12 13zm0-12c2 2.895 3 4.895 3 6a3 3 0 01-6 0c0-1.105 1-3.105 3-6zm0 3.711C11.333 5.868 11 6.664 11 7a1 1 0 002 0c0-.336-.333-1.132-1-2.289z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  }
  if (props.type === "message") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="icon icon-message"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M13 18v4l-5.333-4H2V6h16v12h-5zm-2-2h5V8H4v8h4.333L11 18v-2z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M20 4H7V2h15v11h-2z"
          ></path>
        </g>
      </svg>
    );
  }
  if (props.type === "company") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="icon icon-company"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M21 2v20H3V9h8V2h10zm-2 2h-6v16h2v-2h2v2h2V4zm-8 7H5v9h2v-2h2v2h2v-9zm-2 2v2H7v-2h2zm8-3v2h-2v-2h2zm0-4v2h-2V6h2z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  }
  if (props.type === "anniversary") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="icon icon-anniversary"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M18 3v2h4.078v4.5c0 1.814-1.905 3.155-4.83 3.9-.865 1.817-2.404 3.147-4.247 3.504L13 20h3v2H8v-2h3v-3.096c-1.851-.358-3.396-1.697-4.259-3.527l.09.023C3.907 12.655 2 11.315 2 9.5V5h4V3h12zm-2 2H8v5c0 2.798 1.835 5 4 5s4-2.202 4-5V5zm4.078 2H18v3c0 .374-.025.742-.074 1.102 1.388-.511 2.152-1.142 2.152-1.602V7zM6 7H4v2.5c0 .45.734 1.065 2.07 1.57A8.298 8.298 0 016 10V7z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  }
  if (props.type === "profilevisit") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="icon icon-profilevisit"
      >
        <defs>
          <path
            d="M12 7c4.122 0 7.745 2.702 9.135 6.67l.116.33-.116.33C19.745 18.299 16.122 21 12 21s-7.745-2.702-9.135-6.67L2.749 14l.116-.33C4.255 9.701 7.878 7 12 7zm0 2c-3.138 0-5.93 2-7.124 5C6.07 17 8.862 19 12 19c3.138 0 5.93-2 7.124-5C17.93 11 15.138 9 12 9zm0 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm7.041-8.302l1.639 1.147-1.721 2.457-1.639-1.147 1.721-2.457zm-14.082 0l1.72 2.457-1.638 1.147-1.72-2.457 1.638-1.147zM13 3v3h-2V3h2z"
            id="a"
          />
        </defs>
        <use fill="currentColor" fillRule="nonzero" xlinkHref="#a" />
      </svg>
    );
  }
  if (props.type === "comment") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="icon icon-comment"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M10 22.164l6.648-5.657c.393-.289 1.024-.878 1.65-1.71C19.359 13.39 20 11.781 20 10a8 8 0 10-16 0 7.996 7.996 0 006 7.739v4.425zm2-6.11l-.858-.124A5.995 5.995 0 0112 4a6 6 0 016 6c0 1.302-.482 2.509-1.299 3.593a7.975 7.975 0 01-.916 1.02c-.181.17-.316.28-.38.328L12 17.837v-1.784z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  }
  if (props.type === "like") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="icon icon-like"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <path
            d="M16 3v5h4a2 2 0 012 2v3c0 4.531-3.491 8-8 8H2V8h6.434l3-5H16zM5.999 10H4v9h1.999v-9zM14 5h-1.434l-3 5H8v9H14c3.407 0 6-2.576 6-6v-3h-6V5z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  }
}
