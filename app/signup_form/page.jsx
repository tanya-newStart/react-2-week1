"use client";
import { useState, useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import styles from "./page.module.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const regexPatterns = {
    firstName: /^[a-zA-Z]{2,}$/,
    lastName: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\d{8}$/,
  };
  const validateField = (fieldName, value) => {
    return regexPatterns[fieldName].test(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessages = [];
    if (!validateField("firstName", formData.firstName)) {
      errorMessages.push(
        "First name should be at least 2 characters long and contain only letters."
      );
    }
    if (!validateField("lastName", formData.lastName)) {
      errorMessages.push(
        "Last name should be at least 2 characters long and contain only letters."
      );
    }
    if (!validateField("email", formData.email)) {
      errorMessages.push("Please enter a valid email address.");
    }
    if (!validateField("phone", formData.phone)) {
      errorMessages.push("Phone number should be an 8-digit number.");
    }
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return;
    }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    firstNameRef.current.focus();
    setSubmitted(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 3,
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up Form
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <label htmlFor="firstName">
          <Typography variant="body1">First Name</Typography>
          <input
            className={styles.info}
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            ref={firstNameRef}
          />
        </label>
        <label htmlFor="lastName">
          <Typography variant="body1">Last Name</Typography>
          <input
            className={styles.info}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            ref={lastNameRef}
          />
        </label>
        <label htmlFor="email">
          <Typography variant="body1">Email</Typography>
          <input
            className={styles.info}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            ref={emailRef}
          />
        </label>
        <label htmlFor="phone">
          <Typography variant="body1">Phone</Typography>
          <input
            className={styles.info}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            ref={phoneRef}
          />
        </label>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
        {submitted && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              Form submitted successfully!
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Thank you for signing up!
            </Typography>
            <Link href="/" passHref>
              <Button variant="outlined" color="primary">
                Back to Home
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Container>
  );
}
