import React from "react";

import { Tailwind } from "@react-email/tailwind";
import { sendEmail } from "@/actions/send-email";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactEmailormProps = {
  message: string;
  senderEmail: string;
};

export default function ContactEmailForm({
  message,
  senderEmail,
}: ContactEmailormProps) {
  return (
    <Html>
      <Head>
        <Preview>New Message from Portfolio website</Preview>
        <Tailwind >
          <Body  className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-white  borderBlack my-10 px-10 py-4 rounded-md"> 
                <Heading className="leading-tight">You received a message from contact form</Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>Sender's email is : {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Head>
    </Html>
  );
}
