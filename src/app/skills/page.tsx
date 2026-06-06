import {
  Heading,
  Text,
  Column,
  Row,
  Schema,
  Meta,
  Media,
  Tag,
} from "@once-ui-system/core";
import { skills, person, baseURL } from "@/resources";
import React from "react";
import TableOfContents from "@/components/about/TableOfContents";
import { SmartLink } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL: baseURL,
    path: skills.path,
  });
}

export default function SkillsPage() {
  const structure = [
    {
      title: "Learning Badges",
      display: true,
      items: []
    },
    {
      title: "Involvements",
      display: true,
      items: []
    },
    {
      title: "Technical Skills",
      display: true,
      items: []
    },
  ];
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={skills.path}
        title={skills.title}
        description={skills.description}
        author={{
          name: person.name,
          url: `${baseURL}${skills.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Navigation */}
      <Column
        left="0"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        position="fixed"
        paddingLeft="24"
        gap="32"
        s={{ hide: true }}
      >
        <TableOfContents 
          structure={structure} 
          about={{ tableOfContent: { display: true, subItems: false } }} 
        />
      </Column>

      {/* Certifications Section */}
      <Column id="Learning Badges" fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Credentials
        </Heading>
        <div className="cert-grid">
          {skills.certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              {/* Wrapping the image so it takes up available vertical space */}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '16px' }}>
                <Media
                  radius="m"
                  width={200}
                  height={130}
                  alt={cert.name}
                  src={cert.image}
                  style={{ objectFit: 'contain', width: "100%", height: "100%" }}
                />
              </div>
              <SmartLink
                suffixIcon="arrowUpRightFromSquare"
                href={cert.link} 
                target="_blank"
                style={{ marginTop: 'auto' }} // Explicitly push to bottom
              >
                <Text variant="body-default-s">View badge</Text>
              </SmartLink>
            </div>
          ))}
        </div>
      </Column>

      {/* Engagements Section */}
      <Column id="Involvements" fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Involvements
        </Heading>
        <div className="cert-grid">
          {skills.engagements[0]?.images?.map((image, index) => (
            <div key={index} className="cert-card">
                <Media
                  radius="m"
                  width={200}
                  height={130}
                  alt={image.alt}
                  src={image.src}
                  style={{ objectFit: 'contain', width: "100%", height: "100%", }}
                />
            </div>
            ))}
        </div>
      </Column>

      {/* Learning & Skills Section */}
      <Column id="Technical Skills" fillWidth gap="l">
        <Heading as="h2" variant="display-strong-s">
          Technical Skills
        </Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {skills.learning.map((category, index) => (
            <Column key={index} gap="m" style={{ border: '0.25px solid #666', borderRadius: '8px', padding: '1.5rem' }}>
              <Text variant="heading-strong-s">{category.category}</Text>
              <Row wrap gap="8">
                {category.skills.map((skill, skillIndex) => (
                  <Tag key={skillIndex} size="l">
                    {skill}
                  </Tag>
                ))}
              </Row>
            </Column>
          ))}
        </div>
      </Column>
    </Column>
  );
}