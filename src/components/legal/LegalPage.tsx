import { useLanguage } from '../../context/LanguageContext';
import { getLegalDocument } from '../../data/legalData';

interface LegalPageProps {
  legalId: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ legalId }) => {
  const { language, t } = useLanguage();
  const doc = getLegalDocument(legalId);

  if (!doc) {
    return (
      <div className="legal-page">
        <div className="legal-page-header">
          <h3>{language === 'tr' ? 'Sayfa Bulunamadı' : 'Page Not Found'}</h3>
        </div>
        <a href="#home" className="legal-back-btn">
          {t('legal_back')}
        </a>
      </div>
    );
  }

  return (
    <div className="legal-page">
      <div className="legal-page-header">
        <span>{t('legal_section')}</span>
        <h3>{doc.title[language]}</h3>
      </div>
      <div className="legal-content" dangerouslySetInnerHTML={{ __html: doc.content[language] }} />
      <a href="#home" className="legal-back-btn">
        {t('legal_back')}
      </a>
    </div>
  );
};

export default LegalPage;
