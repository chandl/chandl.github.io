---
layout: post
title:  "How I Built an Intelligence Test-Solving AI"
date:   2020-08-08 00:00:00 -0700
categories: projects
author: Chandler Severson

featured: true
type: Artificial Intelligence
name: Creating an AI Agent that Solves Intelligence Tests
subtitle: Solving Raven's Progressive Matrices
image: "/assets/images/blog/ai-intelligence-test/RPM.png"
description: "Can an AI solve an abstract reasoning test designed to test non-verbal intelligence? Well... mine can! Read more to see how I implemented an AI that solves the Raven's Progressive Matrices intelligence test."
---


#### What is Raven's Progressive Matrices?
Raven's Progressive Matrices (often referred to simply as Raven's Matrices) or RPM is a nonverbal test used in measuring abstract reasoning and regarded as a non-verbal estimate of fluid intelligence. It is a textbook example of an intelligence test, and is displayed as the first image on the [Wikipedia page for IQ](https://en.wikipedia.org/wiki/Intelligence_quotient).

#### Project Goals
One goal of knowledge-based AI is to create human-like, human-level intelligence. In this project, I tried to create an AI agent that solves the same type of intelligence tests that humans take.

I developed this project during my Knowledge-Based AI course at Georgia Tech. While I cannot go into too many specifics around how I implemented this AI agent, I will go over the high-level concepts and algorithms that anyone can use to develop the same type of agent.

#### The Problem Statement

![](/assets/images/blog/ai-intelligence-test/two-by-two.png)

The problem statement for this project can be distilled down to this: Given a two by two (shown above), or three by three RPM image, and six or eight answers (respectively), choose the correct answer that logically follows the 2x2 or 3x3 pattern. For example, the answer to the above question is #5, as the inner diamond disappeared from A to B, and it logically follows that the inner diamond would also disappear in the C to D transformation. 

---

## The Algorithms

Below, I will describe the set of algorithms that I tested to try and visually solve the Raven's Progressive Matrices problems. Most of these can be distilled down into algorithms that, in their own ways, attempt to find similarities or dissimilarities between images, and then correlate those results with possible answer pairs.

### Affine &amp; Fractal Methods

For my first iteration on this problem, I implemented the Affine algorithm, as it is somewhat simplistic and can be built upon to make the fractal method. I only attempted to solve two by two matrices at this point.

The Affine method is a generate & test-based algorithm that assumes relationships between the columns and rows in a RPM problem and performs a set of similitude transformations (e.g. mirroring, flipping, or rotating the image) on the known elements (Kunda, McGreggor, and Goel, 2010).

The known elements in a 2x2 matrix are A, B, and C and transformations will be applied to row A->B and column A->C. The Affine method will perform a set of defined transformations and will select the one that produces the most similar output; for example, if row A and B are mirrored, the Affine algorithm may (correctly) think that the ’Mirror’ transformation was applied on row A->B. 

This chosen transformation will then be applied to the other row or column. For the example above, the ’Mirror’ transformation will be applied on C->? and a generated image will be made. This generated image will then be compared against the six possible answers and the answer that is most similar to the generated image will be chosen. 

The Affine method also seeks to represent extra nuance in the transformations in the form of addition and subtraction of data in the generated compositions. This representation of image composition in addition to the similitude image transformations described above should allow the Affine algorithm to be fairly accurate while remaining fairly simple.

![](/assets/images/blog/ai-intelligence-test/generated.png)

Here is an example of my generate and test method's output: it received, A, B, and C as input, found that if it rotated A 270 degrees, it looked exactly like B. Then it applied that same transformation to C, and generated image D. It then would compare the generated image D against the possible answers and choose the answer that has the highest similarity to generated D.

**Note on the Fractal Method**: The fractal method is algorithmically similar to the Affine method, but it is performed on multiple subsets of each image in order to have a more granular view into the possible transformations made between each image pair. However, to note, I did not end up implementing the fractal method in any of my projects, as it seemed to underperform other algorithms that are described below.

### Pixel-Ratio Methods 

Each of the following algorithms are very similar to the Affine method as they do similar comparisons between horizontal, vertical, and diagonal elements; however, they do not apply any similitude transformations. These algorithms are advantageous because they are less CPU-intensive and they are very effective at solving problems that the affine method struggles at, such as image addition/subtraction and shape correlation problems. 

* **Dark Pixel Ratio (DPR)**: DPR takes in two images and returns the difference of the ratio of dark pixels over total pixels for each image.
* **Intersection Pixel Ratio (IPR)**: IPR takes in two images and then returns the ratio of intersecting dark pixels between both images over the total number of dark pixels in both images.
* **Non-Matching Pixel Ratio (NMPR)** : NMPR calculates the ratio of non-matching pixels to the total number of pixels - it is basically the inverse of IPR.
* **Dark Pixel Difference (DPD)**: DPD calculates the difference between the proportion of total dark pixels in two images.

### Three by Three Considerations

Three-by-three problems are a major leap in complexity from two-by-two problems, as there are many more relationships between rows, columns, and diagonals comapred to two by two problems. Here is an example of what 3x3 problems look like, and a good example of the complexity increase over the two by two problems.

>![](/assets/images/blog/ai-intelligence-test/three-by-three.png) 
>
> Example of a 3x3 RPM problem.


![](/assets/images/blog/ai-intelligence-test/transformations.png)

When expanding the problems to include three by three problems, there are many transformations that need to be taken into account. These can be seen in the above table, which describes each type of relationship between all parts of a 3x3 RPM problem. Including more of these comparisons was vital when implementing the pixel ratio methods described above, as it led to much greater accuracy when selecting the correct answer.


---

### Efficacy of my AI Agent

After implementing each of the algorithms above, tuning them with specific weights derived from an optimization algorithm, and iterating on my solutions until I was happy, I was able to solve 75 out of 96 total problems, or roughly 78% of all problems. This is slightly higher than the human average.

| **Problem Type**  | **Correct** | **Total** |
| Basic 2x2         | 20          | 24    |
| Basic 3x3         | 19          | 24    |
| Medium 3x3        | 20          | 24    |
| Hard 3x3          | 16          | 24    |



### Comparison to Human Cognition

While my agent was able to exceed typical human performance, this agent and humans do not think alike and both approach the RPM tests in wildly different ways. The human approach to these problems revolves around propositional logic and visuospatial knowledge, while the agent's approach is based purely on the values of pixels in images and how they relate to one another.

There are some surface-level similarities, such as how humans and the agent alike break down the problems into sub-problems by using 'frame representations'. In addition, both apply case-based reasoning to pick the correct answer from examples. Besides these similarities, the agent's cognition and human cognition are very dissimilar.

### Conclusion 

Implementing an AI agent to solve intelligence tests was an awesome introduction to replicating algorithms from textbooks and papers, as there were not many resources online about developing these algorithms. In the references section below, you can find the primary sources describing these algorithms in more detail, including more implementation details. 

Overall, I was happy with my agent's performance, and I thought this was an excellent introduction to Knowledge-Based AI and how systems can be made to replicate and exceed human cognition using some clever heuristics to solve tricky problems.

#### References


Kunda, Maithilee (2013). “Visual problem solving in autism, psychometrics,
and AI: the case of the Raven’s Progressive Matrices intelligence test”. PhD
thesis. Georgia Institute of Technology, pp. 120–120.

Kunda, Maithilee, McGreggor, Keith, and Goel, Ashok (2010). “Taking a look (literally!) at the Raven’s intelligence test: Two visual solution strategies”. In: Proceedings of the Annual Meeting of the Cognitive Science Society. Vol. 32. 