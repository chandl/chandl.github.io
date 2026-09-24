export const profile = {
  name: 'Chandler Severson',
  handle: 'chandl',
  title: 'Principal Software Engineer',
  location: 'Vancouver, WA',
  now: 'building the next-gen Oracle Health Patient Portal',
  email: 'me@chandl.io',
  intro:
    'Staff-level engineer with 9+ years building and operating distributed systems at scale. Technical lead and founding member of teams from 0→1; strong in system design, cross-team alignment, and mentoring. Currently Principal Engineer at Oracle Health (patient portal); prior: OCI AI Infrastructure (data center & GPU inventory), OCI control-plane database (1M+ req/s, 40+ regions), Nike (cloud-native retail), and healthcare integration.',
  cv: 'https://drive.google.com/file/d/1R4TYUs-TFfwRkajIDn85tiloUQQDyH50/view?usp=share_link',
  links: {
    github: 'https://github.com/chandl',
    linkedin: 'https://linkedin.com/in/chandler-severson/',
  },
};

export type Job = {
  company: string;
  position: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  highlights?: string[];
};

export const experience: Job[] = [
  {
    company: 'Oracle',
    position: 'Principal Software Engineer, Oracle Health',
    start: 'Dec 2025',
    end: 'Present',
    location: 'Washington',
    summary: 'Lead engineer on the next-generation Oracle Health Patient Portal.',
  },
  {
    company: 'Oracle',
    position: 'Principal Software Engineer, OCI AI Infrastructure',
    start: 'Sep 2023',
    end: 'Dec 2025',
    summary:
      "Founding Staff engineer for a data center management system powering one of the world's largest AI training/inference facilities. Set technical direction for an org that grew to hundreds of engineers.",
    highlights: [
      'Led asset management (inventory) team of 10+; shipped system 0→1 and served as SME for post go-live.',
      'Owned Rack Handover tooling; validated >$1B of GPU/Compute hardware before customer handover.',
      'Onboarded 20+ engineers; conducted 70+ Senior/Principal interviews; built scrumhost.app for sprint planning.',
    ],
  },
  {
    company: 'Oracle',
    position: 'Senior Software Engineer, OCI Control Plane Platform',
    start: 'Nov 2020',
    end: 'Sep 2023',
    location: 'Portland',
    summary: 'Tier-0 NoSQL database: 1M+ req/s, 40+ regions, hundreds of internal OCI teams.',
    highlights: [
      'Authored ECAR migration design; named one of three best architecture docs in OCI FY24; used as org-wide template.',
      'Designed client-side service discovery adopted by hundreds of teams for zero-downtime DB migration.',
      'Led on-call shadowing and onboarding (20+ engineers); project lead for sub-teams of 5–10.',
      'Designed password rotation for disconnected National Security regions (30k DBs, zero downtime, no direct access).',
      'FY23: ~700 SEV-2/3 resolved; 200% improvement in multitenant connection library; 1M+ internal tool downloads.',
    ],
  },
  {
    company: 'Nike',
    position: 'Software Engineer (ETW)',
    start: 'Sep 2019',
    end: 'Nov 2020',
    location: 'Beaverton',
    summary:
      'Built AWS microservices for Nike retail (point of sale, self-checkout). DevOps rotation: owned scalability, resilience, and availability.',
  },
  {
    company: 'Shasta Networks',
    position: 'Software Engineer',
    start: 'Oct 2018',
    end: 'Aug 2019',
    location: 'Ashland',
    summary: 'Technical lead for healthcare data tooling and infrastructure.',
    highlights: [
      'Technical lead: HL7/FHIR conformance and validation tool; clinical charts from multi-source patient data for large billing client.',
      'Led infrastructure migration; proposed hybrid microservice architecture; introduced AWS; mentored juniors and interns.',
    ],
  },
  {
    company: 'Shasta Networks',
    position: 'Integration Engineer',
    start: 'Jun 2016',
    end: 'Oct 2018',
    location: 'Ashland',
    summary:
      'Project lead for hundreds of Java HL7 routes; technical liaison for 400+ interfaces across EHRs, interface engines, and billing.',
  },
  {
    company: 'Southern Oregon University',
    position: 'Senior Help Desk Technician',
    start: 'Oct 2014',
    end: 'Jun 2016',
    location: 'Ashland',
    summary: 'Promoted to Senior; mentored peers and provided escalation support.',
  },
];

export const stats = [
  { value: '9+', label: 'years shipping' },
  { value: '1M+', label: 'req/s served' },
  { value: '40+', label: 'regions' },
  { value: '>$1B', label: 'hardware validated' },
];

export const skills = [
  'Distributed Systems',
  'Software Architecture',
  'System Design',
  'Technical Leadership',
  'Java',
  'Python',
  'Go',
  'Oracle Database',
  'AWS',
  'OCI',
  'HL7 / FHIR',
];

export const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'Southern Oregon University',
    years: '2014 — 2017',
  },
];

export const recognitions = [
  {
    award: 'Outstanding Senior in Computer Science',
    org: 'Southern Oregon University',
    year: '2017',
  },
];
