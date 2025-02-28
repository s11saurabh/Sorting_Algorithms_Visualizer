export const setupKeyboardEvents = ({
  onStepForward,
  onStepBackward,
  onSkipForward,
  onSkipBackward,
  onTogglePause,
  onRandomize,
  onSpeedUp,
  onSpeedDown,
  isSorting
}) => {
  const handleKeyDown = (event) => {
    if (!isSorting && !['r', 'R'].includes(event.key)) return;
    
    switch (event.key) {
      case 'ArrowRight':
        onStepForward();
        break;
      case 'ArrowLeft':
        onStepBackward();
        break;
      case 'End':
        onSkipForward();
        break;
      case 'Home':
        onSkipBackward();
        break;
      case ' ':
        onTogglePause();
        event.preventDefault();
        break;
      case 'r':
      case 'R':
        onRandomize();
        break;
      case 'ArrowUp':
        onSpeedUp();
        event.preventDefault();
        break;
      case 'ArrowDown':
        onSpeedDown();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};
