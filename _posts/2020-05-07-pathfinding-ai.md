---
layout: post
title:  "Creating a Pathfinding AI with A* Search"
date:   2020-05-07 00:00:00 -0700
categories: projects
author: Chandler Severson

featured: true
type: Artificial Intelligence
name: Creating a Pathfinding AI
subtitle: Pathfinding with the A-Star Search Algorithm
image: "/assets/images/blog/pathfinding-ai/maze.jpg"
description: "A lot of people call AI a bunch of complicated IF statements -- well, in this school project, that's definitely the case... In this project, I created an AI that can solve complex mazes with the A* search algorithm. Read more to learn a bit about A* search, the environment the agent acted in, and my takeaways from the project."
---

For my Artificial Intelligence class at Southern Oregon University, one of my projects was to implement a search agent to solve a partially-observable maze world by collecting tools and meeting objectives. 

This project was built for CS 455 - Artificial Intelligence, at Southern Oregon University - Winter, 2017 (Professor Wayne Iba).


## Project Overview

![](/assets/images/blog/pathfinding-ai/world.png)

*The world that the pathfinding agent must interact with.*

The agent that I worked on acts within a program called [The MÆDEN Simulator](https://www.westmont.edu/~iba/maeden/). It is a testbed for studying single- and multi-agent problem solving. It allows for agent cooperation or adversarial agent interactions. The program provides a partially observal, stochastic, dynamic, asynchronous, and discrete world for agents to act within.  

The system is described on the website which was linked above:

> The MÆDEN simulator provides a testbed for studying problem solving in either a single or a multi-agent context. Both humans and artificial intelligence agents may interact with objects in the environment and with each other as they attempt to solve problems of varying difficulty. This Java-based simulator interacts asynchronously with multiple agent controllers written in any language using the standard socket layer. Agents may cooperate to solve problems or they may fight each other over limited resources. The testbed supports a simple visual sense of an agent's immediate surroundings, an olfactory sense indicating the direction of the food supply, an auditory perception of messages sent by other agents, and several other simple sensory features. Similarly, MÆDEN provides effector capabilities to move about the environment, manipulate tools and objects, attack other agents, and broadcast messages. <span>- Dr. Wayne Iba, The MÆDEN Simulator</span>

### The A* Search Algorithm
The A* search algorithm is a graph traversal algorithm which is widely used, as it is very efficient at finding a path from on point to another in a graph, given a heuristic funtion. A* is very similar to depth-first search but with uses a custom heuristic function. The heuristic function is used to evaluate different paths at each step of the search, based on known information (e.g. straight line distance to the goal point). 

See [A* Search Algorithm - Wikipedia](https://en.wikipedia.org/wiki/A*_search_algorithm) for more information about A* search.

### Agent Implementation

I worked with two other colleagues to design and implement an agent that can solve the various problems that are within the world. This agent is an intelligent agent that uses a combination of 'mental maps' and A* seach to nagivate mazes.

Our implementation of the A* search algorithm for finding paths between targets in the MÆDEN simulator can be found [on my GitHub](https://github.com/chandl/AI-SearchAgent). This project doesn't have the best documentation, but a good starting point is MaedenClient.java (the entrypoint of our algorithm), StateMachine.java (keeps track of the agent's state), and MoveSearch.java (contains the searching algorithm).

### What I Learned

This was my first large project that dealt with artificial intelligence and search algorithms. I was able to learn a lot about implementing graph search algorithms and gained a lot of insight on team collaboration working with my colleagues to complete the project.