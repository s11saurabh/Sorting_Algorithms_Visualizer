# Sorting Visualizer

A React-based web application for visualizing different sorting algorithms in action. Watch and learn how various sorting algorithms work by observing their step-by-step visualization.

## Live Demo

[View Live Demo](#) - Link will be updated after deployment

## Features

- **Visualization of 6 Sorting Algorithms**:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Quick Sort
  - Merge Sort
  - Shell Sort

- **Interactive Controls**:
  - Randomize array to create new data sets
  - Adjust array size
  - Control animation speed
  - Visual representation of algorithm steps

- **Responsive Design**:
  - Works on desktop and mobile devices

## Technologies Used

- React.js
- CSS3
- JavaScript ES6+
- React Icons

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/sorting-visualizer.git
   ```

2. Navigate to the project directory:
   ```
   cd sorting-visualizer
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Deployment

You can deploy this project using GitHub Pages, Vercel, or Netlify:

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

## Algorithm Implementation Details

### Bubble Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Description**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

### Insertion Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Description**: Builds the sorted array one item at a time by iteratively taking elements from the unsorted portion and inserting them into their correct position.

### Selection Sort
- **Time Complexity**: O(n²)
- **Space Complexity**: O(1)
- **Description**: Repeatedly finds the minimum element from the unsorted part and puts it at the beginning of the unsorted part.

### Quick Sort
- **Time Complexity**: O(n log n) average, O(n²) worst case
- **Space Complexity**: O(log n)
- **Description**: Divides array into smaller parts around a pivot element, then recursively sorts the partitions.

### Merge Sort
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)
- **Description**: Divides the array into halves, sorts each half, then merges the sorted halves.

### Shell Sort
- **Time Complexity**: O(n log² n)
- **Space Complexity**: O(1)
- **Description**: A generalization of insertion sort that allows the exchange of items that are far apart.

## Project Structure

```
📂 sorting-visualizer/
 ┣ 📂 public/
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 favicon.ico
 ┣ 📂 src/
 ┃ ┣ 📂 components/
 ┃ ┃ ┣ 📜 Header.jsx
 ┃ ┃ ┣ 📜 Visualizer.jsx 
 ┃ ┃ ┣ 📜 Controls.jsx
 ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┣ 📂 algorithms/
 ┃ ┃ ┣ 📜 bubbleSort.js
 ┃ ┃ ┣ 📜 insertionSort.js
 ┃ ┃ ┣ 📜 selectionSort.js
 ┃ ┃ ┣ 📜 quickSort.js
 ┃ ┃ ┣ 📜 mergeSort.js
 ┃ ┃ ┣ 📜 shellSort.js
 ┃ ┣ 📂 utils/
 ┃ ┃ ┣ 📜 arrayHelpers.js
 ┃ ┃ ┣ 📜 animationHelpers.js
 ┃ ┣ 📂 styles/
 ┃ ┃ ┣ 📜 Header.css
 ┃ ┃ ┣ 📜 Visualizer.css
 ┃ ┃ ┣ 📜 Controls.css
 ┃ ┃ ┣ 📜 Footer.css
 ┃ ┃ ┣ 📜 App.css
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## How It Works

1. **Array Generation**: 
   - Random arrays are generated with configurable size.

2. **Algorithm Selection**: 
   - Choose an algorithm to visualize its sorting process.

3. **Visualization**: 
   - Bars represent array elements with their heights corresponding to values.
   - Different colors indicate different states of elements during sorting:
     - Blue: Default unsorted elements
     - Orange: Elements being compared
     - Red: Pivot elements (in Quick Sort)
     - Green: Sorted elements

4. **Controls**:
   - Randomize: Generates a new random array
   - Size Slider: Adjusts the number of elements in the array
   - Speed Slider: Controls the animation speed
   - Algorithm Buttons: Select which sorting algorithm to visualize

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
- Built as a learning tool for algorithm visualization