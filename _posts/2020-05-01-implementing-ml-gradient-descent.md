---
layout: post
title:  "Machine Learning From Scratch - Part 1 - Gradient Descent"
date:   2020-05-01 00:00:00 -0700
categories: ml-from-scratch
author: Chandler Severson
image: "/assets/images/blog/ml-gradient-descent/gradient.png"
description: "In this experiment, I attempt to implement the Gradient Descent optimization algorithm, commonly used in Machine Learning to minimize arbitrary functions."
---


In this experiment, I attempt to implement the Gradient Descent optimization algorithm, commonly used in Machine Learning to minimize arbitrary functions. In machine learning, Gradient Descent is used to tune and update model paremeters (i.e. coefficients in linear regression or weights in neural networks).
This is a code sample that I used to practice concepts of Gradient Descent. This can be found on [my GitHub here](https://github.com/chandl/ML-Gradient-Descent).

## Overview

This code is implementing gradient descent to find the line of best fit that predicts the relationship between:

* Critic Score for a Video Game AND
* Global Sales (in USD) for the Video Game

![](/assets/images/blog/ml-gradient-descent/data-chart.png)
*This chart describes the data that is analyzed with this Gradient Descent algorithm.*

The code is doing a linear regression with gradient descent to predict the mapping. 


If you are interested in running this yourself, you can look at this data set [on Kaggle](https://www.kaggle.com/rush4ratio/video-game-sales-with-ratings).


## Annotated Code

```python
# Chandler Severson
# Gradient Descent - Machine Learning
# Jul 20, 2017

from numpy import *

#
#   Notes:
#   -A DERIVATIVE is the SLOPE of a function at a GIVEN POINT
#       -PARTIAL DERIVATIVE is the slope in respect to one of
#       the variables in the line
#
#   -GRADIENTS are Derivatives that point towards the direction
#       of a local minima of a function
#
#   -GRADIENT DESCENT is a popular optimization strategy in ML
#       that uses GRADIENTS to find the local minima of a function.
#
# Gradient Descent GIF: http://bit.ly/2uOO1gL


# Compute The Error for a Line, given a set of Data Points.
# "Sum of Squared Distances" Formula (To Calculate out Error)
#   *Error Measure for how close a predicted line is to the actual data
#   *https://spin.atomicobject.com/wp-content/uploads/linear_regression_error1.png
#
# GOAL: Find optimal 'b' and 'm' for a line, such that the line hits as many points as possible
# SLOPE formula: y=mx+b
#
def compute_err_for_line(b,m,pts):
    error = 0
    for i in range(0, len(pts)): #for every single data point
        x = pts[i,0]
        y = pts[i,1] #get the assoicated Y value from the point set

        # subtract the actual Y value (from slope formula) from the
        # Y value found above, to measure the distance (or error)
        # between the two points
        error += (y - ( m * x + b)) ** 2

    # TheError(m,b) = 1/n * error, where 'n' is the total number of data points
    return error / float(len(pts))


# Take the Partial Derivative with Respect to B and M,
# Performing Gradient Descent.
#   *https://spin.atomicobject.com/wp-content/uploads/linear_regression_gradient1.png
#
def step_gradient(b_curr, m_curr, pts):
    b_gradient = 0
    m_gradient = 0
    N = float(len(pts))
    for i in range(0, len(pts)):
        x = pts[i,0]
        y = pts[i,1]

        # Calculate Derivative with respect to M. (Power Rule)
        m_gradient = -(2/N) *  x*(y - (m_curr * x + b_curr))

        # Calculate Derivative with respect to B. (Power Rule)
        b_gradient = -(2/N) *  (y - (m_curr * x + b_curr))

    # Update both parameters to make B and M descend towards an optimized line
    new_b = b_curr - b_gradient
    new_m = m_curr - m_gradient
    return [new_b, new_m]

# Do Gradient Descent (step_gradient) for a 'num_iterations' number of times
# Performing this will minimize the function towards the local minima
# where the distance/error between our function and all of the data points is the smallest
#
def perform_descent(points, b_start, m_start, learning_rate, num_iterations):
    b = b_start
    m = m_start

    for i in range(num_iterations):
        b, m = step_gradient(b, m, array(points))

    return b,m


def run():
    # Example Data: Video Game Sales. Critic Score vs Global Sales
    #https://www.kaggle.com/rush4ratio/video-game-sales-with-ratings
    points = genfromtxt("data2.csv", delimiter=",", skip_header=1)

    learn_rate = 0.0001
    b_initial = 0
    m_initial = 0
    num_iterations = 8000
    print('Started gradient descent. b = {0}, m = {1}, error = {2}'.format(b_initial, m_initial, compute_err_for_line(b_initial, m_initial, points)))
    print("Running...")
    [b, m] = perform_descent(points, b_initial, m_initial, learn_rate, num_iterations)
    print("Finished after {0} iterations. b = {1}, m = {2}, error = {3}".format (num_iterations, b, m, compute_err_for_line(b,m,points)))

if __name__ == '__main__':
    run()

```

## Results

Running the program gives the results:

```
Started gradient descent. b = 0, m = 0, error = 4950.687807276303
Running...
Finished after 8000 iterations. b = 79.98363551659658, m = 0.7998363551659666, error = 319.6522102894599
```

This algorithm predicts the data follows the line described by the following equation; albeit, with a high error: `y = 0.7998363551659666x + 79.98363551659658`.

### Next Steps

This is part one of a series exploring machine learning algorithms. You can view [Part 2 - Support Vector Machines](/ml-from-scratch/2020/05/05/implementing-ml-svm.html) next!

{% include blog/codestyle.html %}