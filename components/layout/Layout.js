import Link from 'next/link';
function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>CRM PROJECT</h2>
        <Link rel="stylesheet" href="/add-customer">
          Add Customer
        </Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="" target="_blank" rel="noreferrer">
          CRM PROJECT
        </a>{' '}
        <span>NextJs | CRM &copy;</span>
      </footer>
    </>
  );
}

export default Layout;
