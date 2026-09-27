"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-indigo-600 text-xl" />,
    title: "Our Location",
    detail: "123 Market Street, Dhaka, Bangladesh",
  },
  {
    icon: <FaPhoneAlt className="text-indigo-600 text-xl" />,
    title: "Phone Number",
    detail: "+880 1234-567890",
  },
  {
    icon: <FaEnvelope className="text-indigo-600 text-xl" />,
    title: "Email Address",
    detail: "support@yourshop.com",
  },
  {
    icon: <FaClock className="text-indigo-600 text-xl" />,
    title: "Working Hours",
    detail: "Mon - Sat, 9AM - 6PM",
  },
];

const ContactPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="mt-10 px-6 md:px-20 py-16 flex flex-col lg:flex-row gap-16 justify-between bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Left side */}
      <div className="space-y-6 lg:w-1/2">
        <h1 className="text-5xl md:text-6xl leading-tight font-black text-[#1E1B4B]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4338CA] to-[#7C3AED]">
            Get In Touch
          </span>
          <br /> With Our Team
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-600 max-w-md">
          Fill out the form below and our team will get back to you within 1-2
          business days.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-2"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-[#1E1B4B]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
          <Form className="w-full" onSubmit={onSubmit}>
            <Fieldset>
              <Fieldset.Legend className="text-2xl font-bold text-[#1E1B4B]">
                Send Us a Message
              </Fieldset.Legend>
              <Description>
                We'd love to hear from you. Fill in your details below.
              </Description>

              <FieldGroup className="mt-4 space-y-4">
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Name</Label>
                  <Input placeholder="John Doe" />
                  <FieldError />
                </TextField>

                <TextField isRequired name="email" type="email">
                  <Label>Email</Label>
                  <Input placeholder="john@example.com" />
                  <FieldError />
                </TextField>

                <TextField
                  isRequired
                  name="bio"
                  validate={(value) => {
                    if (value.length < 10) {
                      return "Message must be at least 10 characters";
                    }
                    return null;
                  }}
                >
                  <Label>Message</Label>
                  <TextArea placeholder="Tell us how we can help..." rows={5} />
                  <Description>Minimum 10 characters</Description>
                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-6 flex gap-3">
                <Button
                  type="submit"
                  className="bg-[#4338CA] hover:bg-[#3730A3] text-white rounded-full px-8 py-2.5 font-semibold transition-colors duration-200"
                >
                  <FloppyDisk />
                  Send Message
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  className="rounded-full px-8 py-2.5 font-semibold"
                >
                  Cancel
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;