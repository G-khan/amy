import { useState, useCallback, useEffect, Component, type ReactNode } from 'react';
import GalleryCanvas from './GalleryCanvas';
import GalleryHUD from './GalleryHUD';
import ArtworkInfoPanel from './ArtworkInfoPanel';
import { type PortfolioItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import './gallery.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class GalleryErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="gallery-mobile-fallback">
          <h3>3D Gallery</h3>
          <p>Unable to load the 3D gallery. Your browser may not support WebGL.</p>
          <a href="#portfolio">View Portfolio</a>
        </div>
      );
    }
    return this.props.children;
  }
}

interface Props {
  isActive: boolean;
}

export default function Gallery({ isActive }: Props) {
  const [isLocked, setIsLocked] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<PortfolioItem | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const { t } = useLanguage();

  const isMobile =
    typeof window !== 'undefined' &&
    (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768);

  const handleSelectArtwork = useCallback((item: PortfolioItem) => {
    setSelectedArtwork(item);
    document.exitPointerLock?.();
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedArtwork(null);
  }, []);

  useEffect(() => {
    if (!isActive && document.pointerLockElement) {
      document.exitPointerLock?.();
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('gallery-active');
    } else {
      document.body.classList.remove('gallery-active');
    }
    return () => {
      document.body.classList.remove('gallery-active');
    };
  }, [isActive]);

  if (isMobile) {
    return (
      <div className="gallery-mobile-fallback">
        <h3>{t('gallery_title')}</h3>
        <p>{t('gallery_mobile_hint')}</p>
        <a href="#portfolio">{t('portfolio_title')}</a>
      </div>
    );
  }

  return (
    <GalleryErrorBoundary>
      <div className="gallery-container">
        <GalleryHUD isLocked={isLocked} hoveredTitle={hoveredTitle} />
        <GalleryCanvas
          isActive={isActive}
          onSelectArtwork={handleSelectArtwork}
          isLocked={isLocked}
          onLockChange={setIsLocked}
          onHover={setHoveredTitle}
        />
        {selectedArtwork && <ArtworkInfoPanel item={selectedArtwork} onClose={handleClosePanel} />}
      </div>
    </GalleryErrorBoundary>
  );
}
