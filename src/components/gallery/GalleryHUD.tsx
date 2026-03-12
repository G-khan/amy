import { useLanguage } from '../../context/LanguageContext';

interface Props {
  isLocked: boolean;
  hoveredTitle: string | null;
}

export default function GalleryHUD({ isLocked, hoveredTitle }: Props) {
  const { t } = useLanguage();

  return (
    <div className="gallery-hud">
      {!isLocked && (
        <div className="gallery-prompt">
          <div className="gallery-prompt-content">
            <h2>{t('gallery_title')}</h2>
            <p className="gallery-click-prompt">{t('gallery_click_enter')}</p>
            <p className="gallery-instructions">{t('gallery_instructions')}</p>
            <a
              href="#home"
              className="gallery-back-link"
              onClick={(e) => e.stopPropagation()}
            >
              {t('gallery_back')}
            </a>
          </div>
        </div>
      )}
      {isLocked && (
        <>
          <div className="gallery-crosshair">+</div>
          {hoveredTitle && <div className="gallery-tooltip">{hoveredTitle}</div>}
          <div className="gallery-controls-hint">WASD / ESC</div>
        </>
      )}
    </div>
  );
}
