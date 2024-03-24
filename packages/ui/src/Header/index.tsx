import { React } from '@xarc/react';

export function Header(props: { imgSrc: string }) {
  const { imgSrc } = props;
  return (
    <header className="py-5">
      <div className="fixed-top d-flex flex-wrap align-items-center justify-content-center justify-content-between bg-white">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <img src={imgSrc} alt="logo-app" />
        </a>

        <div className="dropdown" style={{ height: 72, width: 72 }}>
          <a
            href="/"
            className="position-absolute top-50 start-50 translate-middle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="48"
              height="48"
              className="rounded-circle"
            />
          </a>
          <ul className="dropdown-menu text-small">
            <li>
              <a className="dropdown-item" href="/">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
