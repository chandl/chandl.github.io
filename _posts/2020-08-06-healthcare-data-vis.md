---
layout: post
title:  "Healthcare Data Visualization with Elasticsearch"
date:   2020-08-06 00:00:00 -0700
categories: projects
author: Chandler Severson

featured: true
type: Application Development
name: Healthcare Data Visualization with Elasticsearch
subtitle: Building a Product at Shasta Networks
image: "/assets/images/blog/healthcare-data-vis/healthcare-data-vis.jpg"
description: "As a Software Engineer at Shasta Networks, I was a technical lead on a project to create an inline healthcare data validation tool. I designed and implemented a Java application that utilizes the Elasticsearch (ELK) stack to visualize compliance and conformance details for real-time healthcare data."
---

As a Software Engineer at Shasta Networks, I was the technical lead on a project to create an inline healthcare data validation tool. I brought this project from ideation to production deployments + support afterwards. It can currently be found on [Shasta Networks' Website](https://shastanetworks.com/products/conformancevalidator).


## Project Overview 
![](/assets/images/blog/healthcare-data-vis/Conformance_Metrics_Dashboard.png)
*A conformance validation dashboard, showing message types and associated errors.*

The goal of this validation tool is to "Automate, increase accuracy, and reduce resource needs with testing processes as well as identify issues within internal workflows." Here is the official description of the project: 

>ConformanceValidator is an automated validation tool that increases speed and accuracy when validating HL7 data. Load HL7 conformance profiles to meet system requirements and receive immediate feedback upon submission. This product enables teams to self test through immediate feedback speeding up the validation process and reduces resource needs for all parties involved. <span>- Shasta Networks</span>

In short, this tool will be utilized when first integrating with a new partner in order to validate that the partner has their interfaces configured properly. 


### My Role

I designed and implemented this project as a Java application that utilizes the Elasticsearch (ELK) stack to visualize compliance and conformance details about real-time healthcare data. The resulting project gives consumers endless customizability about reports, which data is seen, and how to handle and manage errors and warnings. 

![](/assets/images/blog/healthcare-data-vis/Conformance_Detail_Dashboard.png)
*The conformance detail dashboard, which allows users to drill down into specific errors and warnings in order to fix them.*

As seen on shastanetworks.com, there are two example dashboards - one that shows an overview of messages with their errors and warnings, and one dashboard that helps analysts really drill down into the actual errors in order to fix them.

### What I Learned

This project was an amazing learning experience as it allowed me to take ownership for a project from start to finish. I took part in all aspects of the project, from planning to requirement gathering, managing team members, and delivering results. I learned so much about enterprise development, search systems, and healthcare informatics. 

![](/assets/images/blog/healthcare-data-vis/BusinessInformer_Demographics.png)
*A similar project called BusinessInformer, which I helped to develop during and after working on this conformance validation tool.* 

In fact, this system actually inspired a similar system at Shasta Networks, called BusinessInformer. This tool is designed to help healthcare executives make data-driven business decisions by providing searchable and easily digestable information about their healthcare data. While I wasn't a lead on that project, I spent a lot of time helping to design and implement it. 