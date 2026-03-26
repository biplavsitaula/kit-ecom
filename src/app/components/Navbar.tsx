import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

interface NavbarProps {
  cartCount: number;
}

export function Navbar({ cartCount }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Vendor", to: "/vendor" },
    { label: "Categories", to: "/categories" },
    { label: "Deals", to: "/deals" },
    { label: "Our Story", to: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-[#16A34A] rounded-lg flex items-center justify-center mr-2">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#111827]">ShopHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  location.pathname === link.to
                    ? "text-[#16A34A] font-semibold"
                    : "text-[#374151] hover:text-[#16A34A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search, Cart, Profile */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center bg-[#F9FAFB] rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none ml-2 text-sm text-[#374151] w-full"
              />
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className={`relative p-2 transition-colors ${
                location.pathname === "/cart"
                  ? "text-[#16A34A]"
                  : "text-[#374151] hover:text-[#16A34A]"
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F59E0B] text-white text-xs rounded-full min-w-5 h-5 px-1 flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Profile */}
            <button className="p-2 text-[#374151] hover:text-[#16A34A] transition-colors">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#374151]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E5E7EB]">
            {/* Mobile Search */}
            <div className="flex items-center bg-[#F9FAFB] rounded-lg px-3 py-2 mb-4">
              <Search className="w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none ml-2 text-sm text-[#374151] w-full"
              />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 ${
                    location.pathname === link.to
                      ? "text-[#16A34A] font-semibold"
                      : "text-[#374151] hover:text-[#16A34A]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
