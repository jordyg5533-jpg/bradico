import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  projectTitle: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ isOpen, images, currentIndex, projectTitle, onClose, onNavigate }: LightboxProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors p-2 md:p-3 bg-black/50 rounded-full"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <div className="absolute top-4 left-4 z-50 text-white">
        <h3 className="text-lg md:text-2xl font-bold bg-black/50 px-4 py-2 rounded">
          {projectTitle}
        </h3>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white bg-black/50 px-4 py-2 rounded">
        <span className="text-sm md:text-base font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <div
        className="relative w-full h-full flex items-center justify-center px-4 md:px-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 z-50 text-white hover:text-gray-300 transition-all p-3 md:p-4 bg-black/50 rounded-full hover:bg-black/70 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={`${projectTitle} - ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain transition-opacity duration-300"
          width="1200"
          height="900"
          loading="lazy"
        />

        {currentIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-50 text-white hover:text-gray-300 transition-all p-3 md:p-4 bg-black/50 rounded-full hover:bg-black/70 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}
      </div>
    </div>
  );
}
