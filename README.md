# Form Builder UI

A lightweight, drag-and-drop form builder implemented using pure React.js without external form or UI libraries. This tool allows users to create and customize forms through an intuitive drag-and-drop interface.

## Live Link

[Here is the Live Demo](https://form-builder-build.vercel.app/)

## Features

- **Pure React Implementation**: Built using only React.js/Next.js without external form libraries
- **Drag and Drop Interface**: Intuitive drag-and-drop functionality for form element placement
- **Native HTML Controls**: Utilizes standard HTML form elements for maximum compatibility
- **Form Properties Editor**: Real-time editing of form element properties
- **Customizable Elements**: Support for various form field types:
  - Text Input
  - Text Area
  - Radio Buttons
  - Checkboxes

## Installation

```bash
# Clone the repository
git clone [https://github.com/mikenath223/form-builder-ui]

# Navigate to project directory
cd form-builder-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

1. **Adding Form Elements**:

   - Drag elements from the sidebar onto the form canvas
   - Elements will snap into place automatically

2. **Editing Properties**:

   - Click any form element to open its properties panel
   - Edit properties like:
     - Label text
     - Placeholder text
     - Required/Optional status
     - Options (for dropdowns, radio buttons, etc.)

3. **Rearranging Elements**:

   - Drag and drop elements to reorder them within the form
   - Use the handle icon to grab and move elements

4. **Saving Forms**:
   - Forms are automatically saved to local storage
   - Export functionality available for saving forms as JSON

## Project Structure

```
form-builder-ui/
├── src/
│   ├── components/
│   │   ├── FormBuilder/
│   │   ├── DragDrop/
│   │   └── FormElements/
│   ├── contexts/
│   ├── hooks/
│   └── App.js
├── public/
└── package.json
```

## Implementation Details

### Drag and Drop

The drag-and-drop functionality is implemented using the HTML5 Drag and Drop API, avoiding dependencies on external libraries. Key features include:

- Native drag events (`ondragstart`, `ondragover`, `ondrop`)
- Visual feedback during drag operations
- Precise element positioning

### Form State Management

Form state is managed using React's built-in state management features:

- `useState` for local component state
- `useContext` for sharing form state across components
- Custom hooks for drag-and-drop logic

### Styling

The project uses native CSS with a focus on:

- Responsive design
- Clean, modern aesthetic
- Intuitive user interface
- Drag and drop visual feedback

## Development

To run the project in development mode:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm start
```

## Browser Support

Tested and compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React.js
- Uses HTML5 Drag and Drop API
- Inspired by the need for a lightweight, library-free form builder

---

For bugs, feature requests, or additional information, please [open an issue](https://github.com/mikenath223/form-builder-ui/issues).
