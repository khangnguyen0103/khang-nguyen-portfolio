const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-editorial flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>Handcrafted with curiosity by Khang Nguyen</p>
        <p>Seattle, WA · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
