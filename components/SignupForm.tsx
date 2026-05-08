"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function SignupForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulated success
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage("Account created successfully! Redirecting to login...");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      });

      // TODO: Redirect to login page
      // router.push('/login');
    } catch (error) {
      setErrors({ submit: "An error occurred. Please try again." });
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {successMessage && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          {successMessage}
        </div>
      )}

      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {errors.submit}
        </div>
      )}

      {/* Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John"
            disabled={isLoading}
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Doe"
            disabled={isLoading}
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="you@example.com"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="At least 8 characters"
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-red-600 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Re-enter your password"
          disabled={isLoading}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className="w-4 h-4 mt-1 text-orange-500 rounded focus:ring-orange-500"
          disabled={isLoading}
        />
        <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
          I agree to the{" "}
          <Link href="#" className="text-orange-500 hover:underline">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-orange-500 hover:underline">
            Privacy Policy
          </Link>
        </label>
        {errors.agreeToTerms && (
          <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>

      {/* Login Link */}
      <p className="text-center text-gray-700">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 hover:underline">
          Log in here
        </Link>
      </p>
    </form>
  );
}
