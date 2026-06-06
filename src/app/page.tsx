import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          
          {/* New: Small grey reminder text above the headline */}
          <RevealFx translateY="2" fillWidth horizontal="center" paddingBottom="8">
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              * For optimal viewing, please use a desktop.
            </Text>
          </RevealFx>

          {/* Changed gap: Reduced paddingBottom from "16" to "4" (or "0") */}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="4">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          {/* New Resume Button */}
          <RevealFx translateY="8" delay={0.25} fillWidth horizontal="center" paddingBottom="24">
            <Button
              href="/official-resume.pdf"
              target="_blank"  // Opens in a new tab
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              View Resume
            </Button>
          </RevealFx>
          {/* Add your new image block here! */}
          <RevealFx translateY="12" delay={0.3} fillWidth horizontal="center" paddingBottom="32">
            <img 
              src="/images/page-image.png" 
              alt="Main Portfolio Graphic" 
              style={{
                width: "120%",
                maxWidth: "1200px",  // adjust this based on how big you want it
                height: "380px",
                borderRadius: "var(--radius-xl)", // matches Once UI styling
                objectFit: "cover"
              }}
            />
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >

            </Button>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
