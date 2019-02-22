## Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are used to ensure that the data React components receive is what is expected. In order for React to work, a contract between state-holding and stateless components needs to be honored. In the event that data is passed to a component in a form that is not in the form that is expected, unexpected side effects and bugs may occur for a user. Even worse, it's entirely possible that the data may not even exist. In all of these situations, as React developers, we want to control and validate data that is passing to ensure data quality and existence. While JavaScript has many benefits as a dynamically-typed language, these are some of the things that we must do as developers to consider where other languages might be more strict and controlled in its handling of data.

- [x] Describe a life-cycle event in React?
A life-cycle event in React occurs during one of the three primary phases of a React component's life-cycle - Mounting, Updating, and Unmounting. There are a handful of methods that the React library provides that gives developers more control over when things happen in a component's life-cycle. 

While there are many methods available, the one that we care most about is componentDidMount which gives us the ability to control initial hydrating of our state (by way of API, etc.) after our React components are initial mounted or rendered. Other methods allow us to trigger events when a component is re-rendered by an update to state or props and when the component is unmounted. 

- [x] Explain the details of a Higher Order Component?
A Higher Order Component (HOC) is a component that accepts another component(s). The idea behind HOC's is that each component in React is just a function or class which allows us to get creative with how we use them.

This week, we used a Higher Order Component in one of our projects to essentially serve as a tree router by accepting two different path scenarios - a Login page and a general logged-in version of our application. By using Higher Order Components, we were able to share between two components the basic structure of state and higher-logic. The higher-logic in this case returned either the Login page or logged-in app landing page depending on whether the state of the HOC indicated whether a user was logged in or not.

This paradigm is also useful for making sure that important data is gated until a user is authenticated.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

The three different ways to style components are the following: in-line, using CSS files, and styled components.

In-line is fairly straightforward. Particularly because React allows us to use HTML/CSS/JS together, we can have all our CSS in the same file as our HTML and JS (JSX) and inject small packages of CSS into our JSX using variables. The drawback to in-line styles applies in pretty much every scenario where it might be used -- while it can be used, it should be used with caution and consideration as the nature of in-line styles is that it means the styles are dispersed through the application at the point of requirement. This makes it difficult to create inheritance hierarchies and makes the component body potentially messy.

CSS files are also fairly straightforward. Much like any other regular web development project, users can reference external CSS files and pull those files in to point at elements that have the same tag/ class identifier. The tricky thing about CSS files and React is that React will trickle down styles top-down. This means that developers need to be careful of unintended inheritance of child component styles from their parent components. 

Styled components is the final way we learned how to style components in React. The benefit of styled components is that it removes the abstraction layer of classNames away from components. After all, if React is a component-focused development paradigm, it follows that it would make sense for styles to be created for components. Styled components also provides us benefits from pre-processing (LESS, Sass) such as nesting that makes it really intuitive to style components. 