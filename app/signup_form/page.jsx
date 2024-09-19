"use client";
import { useState, useRef } from "react";
import { Box, Typography, Button, Container, Alert } from "@mui/material";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    firstNameRef.current.focus();
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexdirection: "column",
          alignItems: "center",
          mt: 8,
          p: 3,
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          {" "}
          Sign Up
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <label htmlFor="firstName">
          <Typography varient="body1">First Name</Typography>
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
          <Typography varient="body1">Last Name</Typography>
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
          <Typography varient="body1">Email</Typography>
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
          <Typography varient="body1">Phone</Typography>
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
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Container>
  );
}
