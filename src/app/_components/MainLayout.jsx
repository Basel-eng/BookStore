"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function DefaultHeader() {
  return (
    <Navbar>
      <Link href="/" passHref legacyBehavior>
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Book Store
          </span>
        </NavbarBrand>
      </Link>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink as={Link} href="/">
          Home
        </NavbarLink>

        <Link href="/about" passHref legacyBehavior>
          <NavbarLink>About</NavbarLink>
        </Link>

        <Link href="/services" passHref legacyBehavior>
          <NavbarLink>Services</NavbarLink>
        </Link>

        <Link href="/contact" passHref legacyBehavior>
          <NavbarLink>Contact</NavbarLink>
        </Link>
      </NavbarCollapse>

      <DarkThemeToggle />
    </Navbar>
  );
}

export function DefaultFooter() {
  return (
    <Footer container className="rounded-none">
      <FooterCopyright href="#" by="BookStore™" year={2026} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
