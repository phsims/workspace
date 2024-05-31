export default function formatTime(minutes: number) {
    if (minutes < 60) {
      return `${minutes} Minutes`;
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    return `${hours} Hour${hours > 1 ? 's' : ''} ${remainingMinutes} Minutes`;
  }