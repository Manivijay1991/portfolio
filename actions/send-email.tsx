"use server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
import { getErrorMessage, validateString } from "@/lib/utlis";
import ContactEmailForm from "@/email/contact-email-form";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");


  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "invalid message",
    };
  }
  let response ;
  let err; 
  try {
    const {data, error} = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "manivijay1991@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactEmailForm, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    response = data;
    err = error;

  } catch (error:unknown) {
    console.log('inside catch ' + error)
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    response,
    error:err?.message
  };
};
