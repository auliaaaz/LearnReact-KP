# Quick Note & Task Manager

Quick Note & Task Manager is a web application that allows users to manage sticky notes and to-do lists efficiently. Users can create, search, and delete notes and to-do items. Additionally, the application prompts users with a confirmation dialog when they try to navigate away from the page without saving their data.
Link to the app <https://learn-react-kp-e24m-jqxkzhpo5-aulias-projects-9b061aa2.vercel.app/>

## Usage

- Navigate to the home page to create, search, and manage your notes and to-do lists.
- Navigate to the contact page to fill out the contact form.
- If you try to navigate away from the home page or close the tab, a confirmation dialog will appear to ensure you don't lose your data.

## Features

- **Sticky Notes**: Create and manage notes with a text and date.
- **To-Do List**: Create and manage to-do items with completion status.
- **Search**: Search through your notes with a search bar.
- **Confirmation Prompt**: Prevent data loss by displaying a confirmation dialog when navigating away or closing the tab.

## Components

### `HomeApp`

The main component for managing notes and to-do lists.

### `ListNotes`

Displays the list of notes.

### `DeleteConfirmation`

A modal popup for confirming note deletions.

### `Search`

A search bar to filter notes.

### `NavBar`

Navigation bar for navigating between different pages.

### `FormContact`

A contact form component.

## Hooks

### `useEffect`

Used for managing side effects in functional components.

### `useState`

Used for managing state in functional components.

### Custom Hook for Confirmation Dialog

A custom implementation within the `HomeApp` component to handle the confirmation dialog when the user tries to navigate away from the page or close the tab.

```jsx
useEffect(() => {
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = 'Your data will not be saved, are you sure you want to exit?';
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);
