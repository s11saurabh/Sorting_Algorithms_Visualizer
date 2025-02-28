# Sorting Algorithms Visualizer

A React-based interactive web application that visualizes six popular sorting algorithms in action. This educational tool helps users understand how different sorting algorithms work through step-by-step visual representation.

## Live Demo

[View Live Demo](https://saurabh-sorting-algorithms-git-main-saurabhs-projects-d236dc8e.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Sorting Algorithms Explained](#sorting-algorithms-explained)
- [Project Structure](#project-structure)
- [Implementation Details](#implementation-details)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

### Visualized Sorting Algorithms
- **Bubble Sort**: Simple comparison-based algorithm
- **Insertion Sort**: Builds sorted array one item at a time
- **Selection Sort**: Divides input into sorted and unsorted regions
- **Quick Sort**: Efficient divide-and-conquer algorithm
- **Merge Sort**: Stable divide-and-conquer algorithm
- **Shell Sort**: Generalization of insertion sort

### Interactive User Controls
- **Array Management**:
  - Generate new random arrays with customizable sizes
  - Visual representation with bars proportional to values
  - View array values directly on bars (for smaller arrays)

- **Animation Controls**:
  - Adjust animation speed to control visualization pace
  - Step forward/backward through the sorting process
  - Skip to beginning/end of the algorithm
  - Pause/resume during visualization
  - Visual indication of current algorithm state

- **Layout Controls**:
  - Customize canvas size (width/height)
  - Mobile-responsive design

### User Experience
- **Educational Information**:
  - Time and space complexity information for each algorithm
  - Color-coded visualization of different operations:
    - Blue: Default unsorted elements
    - Orange: Elements being compared
    - Red: Pivot elements (in Quick Sort)
    - Green: Sorted elements
  - Preservation of sorted state after algorithm completion

- **Intuitive Interface**:
  - Clean, modern UI with dedicated sections
  - Left panel for controls, right panel for visualization
  - Responsive design for various screen sizes

## Technologies Used

- **React.js**: For building the interactive UI components
- **JavaScript ES6+**: For implementing sorting algorithms and animation logic
- **CSS3**: For styling and responsive design
- **React Icons**: For UI icons
- **Vercel**: For deployment and hosting

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/s11saurabh/Sorting_Algorithms_Visualizer.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Sorting_Algorithms_Visualizer
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## Usage Guide

### Basic Usage
1. **Generate a New Array**: Click "Randomize Array" to create a new random array.
2. **Adjust Array Size**: Use the slider to increase or decrease the number of elements.
3. **Select a Sorting Algorithm**: Click on any of the six sorting algorithm buttons.
4. **Watch the Visualization**: The selected algorithm will start sorting the array visually.

### Advanced Controls
1. **Animation Speed**: Adjust the slider to control how fast or slow the sorting process is visualized.
2. **Animation Controls**:
   - "Skip Back": Jump to the beginning of the animation
   - "Step Back": Move one step backward
   - "Pause/Play": Pause or resume the animation
   - "Step Forward": Move one step forward
   - "Skip Forward": Jump to the end of the animation

3. **Canvas Customization**:
   - Adjust the Width (W) and Height (H) values
   - Click "Change Canvas Size" to apply new dimensions
   - "Move Controls" toggles the position of the control panel

### Keyboard Shortcuts
- **Space**: Pause/Resume sorting
- **Right Arrow**: Step forward
- **Left Arrow**: Step backward
- **Home**: Skip to beginning
- **End**: Skip to end
- **R**: Randomize array
- **Up Arrow**: Increase speed
- **Down Arrow**: Decrease speed

## Sorting Algorithms Explained

### Bubble Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **How it Works**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until no swaps are needed, indicating that the list is sorted.
- **Best For**: Educational purposes and small datasets. Simple to understand and implement.
- **Visualization**: Watch as elements "bubble" to their correct positions with larger elements moving to the end first.

### Insertion Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **How it Works**: Builds the final sorted array one item at a time. It takes one element from the unsorted portion and inserts it into its correct position in the sorted portion.
- **Best For**: Small datasets or nearly sorted arrays. Efficient for arrays that are already substantially sorted.
- **Visualization**: See how each element finds its proper place among previously sorted elements.

### Selection Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **How it Works**: Repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part, gradually building up the sorted portion.
- **Best For**: Situations where memory writes are expensive. Makes the minimum possible number of swaps.
- **Visualization**: Observe how the smallest elements are progressively placed at the beginning of the array.

### Quick Sort
- **Time Complexity**: O(n log n) average, O(n²) worst case
- **Space Complexity**: O(log n)
- **How it Works**: Divides the array into smaller sub-arrays using a pivot element, then recursively sorts these sub-arrays.
- **Best For**: Large datasets. One of the fastest sorting algorithms in practice.
- **Visualization**: Watch the partitioning process around pivot elements and how sub-arrays are sorted.

### Merge Sort
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **How it Works**: Divides the array into halves, recursively sorts them, then merges the sorted halves.
- **Best For**: Stable sorting of linked lists and large datasets when stability is required.
- **Visualization**: Observe the divide-and-conquer strategy and the merging of sorted sub-arrays.

### Shell Sort
- **Time Complexity**: O(n log² n)
- **Space Complexity**: O(1)
- **How it Works**: A generalization of insertion sort that allows the exchange of items that are far apart, then progressively reduces the gap between elements to be compared.
- **Best For**: Medium-sized arrays where simplicity of implementation is important.
- **Visualization**: See how elements are compared and swapped at various gap distances.

## Project Structure

```
📂 Sorting_Algorithms_Visualizer/
 ┣ 📂 public/
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 favicon.ico
 ┣ 📂 src/
 ┃ ┣ 📂 components/
 ┃ ┃ ┣ 📜 Header.jsx             # Top navigation bar
 ┃ ┃ ┣ 📜 Visualizer.jsx         # Visualization area with array bars
 ┃ ┃ ┣ 📜 Controls.jsx           # User control panel (left side)
 ┃ ┃ ┣ 📜 Footer.jsx             # Footer with algorithm information
 ┃ ┣ 📂 algorithms/
 ┃ ┃ ┣ 📜 bubbleSort.js          # Bubble sort implementation
 ┃ ┃ ┣ 📜 insertionSort.js       # Insertion sort implementation
 ┃ ┃ ┣ 📜 selectionSort.js       # Selection sort implementation
 ┃ ┃ ┣ 📜 quickSort.js           # Quick sort implementation
 ┃ ┃ ┣ 📜 mergeSort.js           # Merge sort implementation
 ┃ ┃ ┣ 📜 shellSort.js           # Shell sort implementation
 ┃ ┣ 📂 utils/
 ┃ ┃ ┣ 📜 arrayHelpers.js        # Utility functions for array operations
 ┃ ┃ ┣ 📜 animationHelpers.js    # Animation logic helpers
 ┃ ┃ ┣ 📜 keyboardEvents.js      # Keyboard shortcut handlers
 ┃ ┣ 📂 styles/
 ┃ ┃ ┣ 📜 Header.css             # Header component styles
 ┃ ┃ ┣ 📜 Visualizer.css         # Visualizer component styles
 ┃ ┃ ┣ 📜 Controls.css           # Controls component styles
 ┃ ┃ ┣ 📜 Footer.css             # Footer component styles
 ┃ ┃ ┣ 📜 App.css                # Main app styles
 ┃ ┣ 📜 App.jsx                  # Main application component
 ┃ ┣ 📜 index.js                 # Application entry point
 ┣ 📜 package.json               # Project dependencies and scripts
 ┣ 📜 README.md                  # Project documentation
```

## Implementation Details

### Visualization Process

1. **Array Representation**:
   - Each element is represented by a vertical bar
   - Bar height corresponds to the element's value
   - For smaller arrays, values are displayed directly on the bars

2. **Algorithm Animation**:
   - Sorting algorithms are adapted to generate animation steps
   - Each animation step is one of the following types:
     - `compare`: Highlight elements being compared
     - `swap`: Exchange positions of elements
     - `update`: Directly set an element's value
     - `pivot`: Highlight a pivot element (in Quick Sort)
     - `sorted`: Mark elements as correctly positioned
     - `reset`: Return elements to default state

3. **State Management**:
   - Original array is preserved for stepping backward
   - Current display array updates based on animation steps
   - Color state tracks the status of each element
   - Animation can be paused, stepped through, or skipped

4. **Completion Behavior**:
   - Sorted array remains displayed after completion
   - All bars turn green to indicate successful sorting
   - Controls are updated to reflect completion state

### Key Components

1. **App.jsx**:
   - Main application state management
   - Layout coordination
   - Keyboard event handling

2. **Controls.jsx**:
   - User input handling
   - Algorithm selection
   - Animation control
   - Canvas size adjustment

3. **Visualizer.jsx**:
   - Array visualization
   - Animation processing
   - Dynamic bar rendering
   - Color state management

4. **Algorithm Files**:
   - Each implements a sorting algorithm
   - Generates animation steps for visualization
   - Pure functions for deterministic behavior

## Deployment

This project is deployed using Vercel. You can also deploy it using:

### GitHub Pages:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: 
   ```json
   "homepage": "https://yourusername.github.io/sorting-visualizer",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```
3. Deploy: `npm run deploy`

### Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Netlify:
1. Build your app: `npm run build`
2. Install Netlify CLI: `npm install netlify-cli -g`
3. Deploy: `netlify deploy --prod`

## Future Enhancements

- Additional sorting algorithms (Heap Sort, Radix Sort, etc.)
- Algorithm comparison mode to run multiple algorithms side by side
- Custom array input option for users to test specific scenarios
- Dark mode and additional theme options
- Performance statistics (comparisons, swaps, time taken)
- Algorithm explanation text that updates with each step

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Inspired by various sorting visualizers and computer science education resources
- Special thanks to the React and JavaScript community for excellent documentation
- Built as a learning tool to help understand sorting algorithms through visualization
- Developed by Saurabh Kumar
