function Footer() {
  return (
    <footer className="bg-dark text-white-50 py-4 mt-auto">
      <div className="container">
        <p className="text-center">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
